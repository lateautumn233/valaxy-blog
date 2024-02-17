---
tags: []
title: Lxc on Android 📱
sources:
  - xlog
summary: ""
attributes:
  - value: Lxc-on-Android-
    trait_type: xlog_slug
  - value: false
    trait_type: xlog_disable_ai_summary
date: 2023-09-02T20:53:12.731Z
draft: true
categories:
  - 容器
modified: 2024-02-17T18:49:46+08:00
---

# Lxc on Android 📱

![](https://999-1257394446.cos.ap-hongkong.myqcloud.com/img/IMG_202310319387_2300x2300180.png)
简介：
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
git commit -m -a "Imported docker/ from https://github.com/lateautumn233/android_kernel_docker"
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

具体编译内核
以下省略n字

# 2. 使用termux安装lxc
```shell
pkg update && pkg install root-repo && apt install lxc tsu
```

### 2.1. 配置并启动lxc容器
首先需要挂载cgroup
```shell
tsu
mount -t tmpfs -o mode=755 tmpfs /sys/fs/cgroup
mkdir -p /sys/fs/cgroup/devices
mount -t cgroup -o devices cgroup /sys/fs/cgroup/devices

lxc-setup-cgroups #可能不需要
```

创建容器
```shell
# 创建之前修改网络配置
请参考下面2.1配置网络

lxc-create -t download -n my-container -- --server mirrors.tuna.tsinghua.edu.cn/lxc-images --no-validate

# 依次填入发行版 版本号 架构
# 然后启动
lxc-start -n my-container -d -F

# 很快啊就报错了
#Failed to mount cgroup at /sys/fs/cgroup/systemd: Operation not permitted
#[!!!!!!] Failed to mount API filesystems.
#Exiting PID 1...

# 解决方法1
echo "lxc.init.cmd = /sbin/init systemd.unified_cgroup_hierarchy=0" >> $PREFIX/share/lxc/config/common.conf.d/systemd.conf
# 解决方法2
mkdir -p /sys/fs/cgroup/systemd && mount -t cgroup cgroup -o none,name=systemd /sys/fs/cgroup/systemd
```
调整lxc容器密码
```shell
chroot path /bin/su -
lxc-attach -n my-container passwd
```

在容器内配置dns解析
```
echo -e "[Match]\nName=wlan0\n\n[Network]\nDHCP=yes\n\n[DHCP]\nRouteMetric=120" \
> /etc/systemd/network/21-wireless.network
systemctl restart systemd-networkd
```
## 2.1. 配置网络
配置网络目前测试通过的有2种
### 2.1.1 使用host模式
在创建容器之前进行以下调整
```shell
sed -i 's/lxc\.net\.0\.type = empty/lxc.net.0.type = none/g' $PREFIX/etc/lxc/default.conf

```


如果你想host下运行docker接下来还要做以下调整\
启动容器在lxc容器内输入 ！！！
```shell
update-alternatives --set iptables /usr/sbin/iptables-legacy
iptables -t filter -F

#如果可以启动了就不需要再使用下面命令
iptables -t filter -X
```
<strike>
hos模式一般可以自动解析dns当然也不排除意外情况
如果无法解析DNS
    
```shell
echo 8.8.8.8 > /etc/resolv.conf
systemctl stop systemd-resolved
systemctl disable systemd-resolved
# systemctl enable systemd-networkd
```
</strike>

### 2.1.1 使用veth模式
以下第一次需要配置
```shell
apt install dnsmasq wget -y
#修改默认lxc配置
echo -e "lxc.net.0.type = veth \
\nlxc.net.0.link = lxcbr0 \
\nlxc.net.0.flags = up \
\nlxc.net.0.hwaddr = 00:16:3e:xx:xx:xx" \
> $PREFIX/etc/lxc/default.conf
# 修改lxc-net
wget https://qiuqiu233.top/d/linux-deploy/lxc/lxc-net -O $PREFIX/libexec/lxc/lxc-net && chmod a+x $PREFIX/libexec/lxc/lxc-net
```
每次重启设备后想要使用veth请
```shell
$PREFIX/libexec/lxc/lxc-net start
```

喵喵喵喵喵



## 参考文章:
- [Docker on Android](https://gist.github.com/FreddieOliveira/efe850df7ff3951cb62d74bd770dce27)
- [LXC Images 软件仓库镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/lxc-images/)
- [Failed to mount cgroup at /sys/fs/cgroup/systemd: Operation not permitted](https://github.com/lxc/lxc/issues/4072)
- [采用systemd-networkd管理网卡](https://www.cnblogs.com/embedded-linux/p/10540426.html)
- [How to configure systemd-resolved and systemd-networkd to use local DNS server for resolving local domains and remote DNS server for remote domains?](https://unix.stackexchange.com/questions/442598/how-to-configure-systemd-resolved-and-systemd-networkd-to-use-local-dns-server-f)

[]()