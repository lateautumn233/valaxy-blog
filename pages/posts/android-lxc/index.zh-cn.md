---
tags:
  - post
  - Linux
title: Android原生运行Lxc
sources:
  - xlog
summary: ""
attributes:
  - value: Android-yuan-sheng-yun-xing-Lxcmd
    trait_type: xlog_slug
  - value: false
    trait_type: xlog_disable_ai_summary
date: 2023-09-03T05:59:49.873Z
categories:
  - 容器
---

# Android原生运行Lxc

![image.png](./attachments/33dfc6e078a74e2e8f9ce839b2c6d5e7.image.webp)
简介：\
LXC是一种操作系统层虚拟化技术，为Linux内核容器功能的一个用户空间接口。它将应用软件系统打包成一个软件容器，内含应用软件本身的代码，以及所需要的操作系统核心和库。
<!-- more -->
---

# 1. 编译内核
### 1.1. 调整内核配置
使用此[仓库](https://github.com/lateautumn233/android_kernel_docker)快捷添加配置
 ```shell
git fetch https://github.com/lateautumn233/android_kernel_docker main
git merge -s ours --no-commit --allow-unrelated-histories --squash FETCH_HEAD
git read-tree --prefix=docker -u FETCH_HEAD
echo "source \"docker/Kconfig\"" >> arch/arm64/Kconfig
git commit -a -m "Imported docker/ from https://github.com/lateautumn233/android_kernel_docker"
```
然后再自行编译
🥵🥵🥵
### 1.2. 内核补丁
1.修复可能存在的panic情况
- [net/netfilter/xt_qtaguid.c](https://github.com/lateautumn233/android_kernel_oneplus_sm8250/commit/51656fb1d02cbad23208391d1ba052a46d5eacf5)
```patch
--- orig/net/netfilter/xt_qtaguid.c     2020-05-12 12:13:14.000000000 +0300
+++ my/net/netfilter/xt_qtaguid.c       2019-09-15 23:56:45.000000000 +0300
@@ -737,7 +737,7 @@
{
        struct proc_iface_stat_fmt_info *p = m->private;
        struct iface_stat *iface_entry;
-       struct rtnl_link_stats64 dev_stats, *stats;
+       struct rtnl_link_stats64 *stats;
        struct rtnl_link_stats64 no_dev_stats = {0};  
@@ -745,13 +745,8 @@
        current->pid, current->tgid, from_kuid(&init_user_ns, current_fsuid()));
        iface_entry = list_entry(v, struct iface_stat, list);
+       stats = &no_dev_stats; 
-       if (iface_entry->active) {
-               stats = dev_get_stats(iface_entry->net_dev,
-                                     &dev_stats);
-       } else {
-               stats = &no_dev_stats;
-       }
        /*
         * If the meaning of the data changes, then update the fmtX
         * string.
```
2.修复cgroup缺少cpuset前缀
- [kernel/cgroup/cgroup.c](https://github.com/lateautumn233/android_kernel_oneplus_sm8250/commit/14b4f8f5198071c5c6ec8146b4f4d99c9dc5135b)
```patch
--- a/kernel/cgroup/cgroup.c
+++ b/kernel/cgroup/cgroup.c
@@ -3786,6 +3786,10 @@ static int cgroup_add_file(struct cgroup_subsys_state *css, struct cgroup *cgrp,
 		cfile->kn = kn;
 		spin_unlock_irq(&cgroup_file_kn_lock);
 	}
+	if (cft->ss && (cgrp->root->flags & CGRP_ROOT_NOPREFIX) && !(cft->flags & CFTYPE_NO_PREFIX)) {
+				snprintf(name, CGROUP_FILE_NAME_MAX, "%s.%s", cft->ss->name, cft->name);
+				kernfs_create_link(cgrp->kn, name, kn);
+	}
 
 	return 0;
 }
 ```
3.禁用ANDROID_PARANOID_NETWORK

```shell
scripts/config --file arch/arm64/configs/<defconfig> -
d ANDROID_PARANOID_NETWORK
```
### 1.3. 检查内核配置
生成完整内核配置后检查
```shell
wget https://raw.githubusercontent.com/lxc/lxc/main/src/lxc/cmd/lxc-checkconfig.in -O lxc-checkconfig
chmod a+x lxc-checkconfig
CONFIG=out/.config lxc-checkconfig
```

具体编译内核 \
以下省略n字
# 2. 安装lxc模块
下载此[magisk模块](https://qiuqiu233.top/d/linux-deploy/lxc/LxcMagisk.zip)安装并重启

### 2.1. 启动lxc容器
随便找一个终端软件执行
```shell
. /data/lxc/env.sh
```
创建容器
```shell
lxc-create -t download -n my-container -- --server mirrors.tuna.tsinghua.edu.cn/lxc-images
# 依次填入发行版 版本号 架构
# 然后启动
lxc-start -n my-container -d -F
```
调整lxc容器密码
```shell
chroot path /bin/su -
lxc-attach -n my-container passwd
```
## 2.1. 配置网络
(可选，默认veth 可以不修改)
### 2.1.1 使用host模式
```shell
sed -i 's/lxc\.net\.0\.type = veth/lxc.net.0.type = none/g' /data/lxc/etc/lxc/default.conf
```
喵喵喵喵喵

## 参考文章:
- [Docker on Android](https://gist.github.com/FreddieOliveira/efe850df7ff3951cb62d74bd770dce27)
- [LXC Images 软件仓库镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/lxc-images/)
- [Failed to mount cgroup at /sys/fs/cgroup/systemd: Operation not permitted](https://github.com/lxc/lxc/issues/4072)
- [采用systemd-networkd管理网卡](https://www.cnblogs.com/embedded-linux/p/10540426.html)
- [How to configure systemd-resolved and systemd-networkd to use local DNS server for resolving local domains and remote DNS server for remote domains?](https://unix.stackexchange.com/questions/442598/how-to-configure-systemd-resolved-and-systemd-networkd-to-use-local-dns-server-f)

[]()