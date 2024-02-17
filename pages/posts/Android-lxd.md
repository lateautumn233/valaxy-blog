---
title: Android运行lxd
subtitle: 
date: 2024-02-07T10:13:25+08:00
draft: false
author: qiuqiu
authorLink: blog.qiuqiu233.xyz
description: 
license: 
images: 
resources:
  - name: featured-image
    src: featured-image.png
tags:
  - lxd
  - lxc
categories: 
featuredImage: 
featuredImagePreview: ""
hiddenFromHomePage: false
hiddenFromSearch: false
twemoji: false
lightgallery: true
ruby: true
fraction: true
fontawesome: true
linkToMarkdown: true
rssFullText: false
toc:
  enable: true
  auto: true
code:
  copy: true
  maxShownLines: 50
math:
  enable: false
mapbox: 
share:
  enable: true
comment:
  enable: true
library:
  css: 
  js: 
seo:
  images: []
modified: 2024-02-17T11:31:29+08:00
---
![lxd.png](https://999-1257394446.cos.ap-hongkong.myqcloud.com/img/lxd.png)
简介:
LXD 是 Linux 容器 (LXC) 的开源容器管理扩展。LXD 既改进了现有的 LXC 功能，又提供了新的特性和功能来构建和管理 Linux 容器。

<!-- more -->


## 1. 安装lxd模块
下载此[magisk模块](https://alist.qiuqiu233.xyz/d/软件/lxd/lxd-android.zip)安装并重启
### 1.1. 创建容器
随便找一个终端软件执行
```shell
su
```
然后初始化
```shell
$ lxd init
Would you like to use LXD clustering? (yes/no) [default=no]:
Do you want to configure a new storage pool? (yes/no) [default=yes]:
Name of the new storage pool [default=default]:
Name of the storage backend to use (btrfs, dir, lvm) [default=btrfs]:
Would you like to create a new btrfs subvolume under /var/lib/lxd? (yes/no) [default=yes]:
Would you like to connect to a MAAS server? (yes/no) [default=no]:
Would you like to create a new local network bridge? (yes/no) [default=yes]:
What should the new bridge be called? [default=lxdbr0]:
What IPv4 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]:
What IPv6 address should be used? (CIDR subnet notation, “auto” or “none”) [default=auto]:
Would you like the LXD server to be available over the network? (yes/no) [default=no]:
Would you like stale cached images to be updated automatically? (yes/no) [default=yes]
Would you like a YAML "lxd init" preseed to be printed? (yes/no) [default=no]:

```
创建容器
```shell
lxc launch ubuntu:23.04 ubuntu
# lxc launch 发行版:版本 容器名字
```
调整lxc容器密码
```shell
lxc exec ubuntu -- passwd
lxc exec 容器名字 -- passwd
# 二进制文件位置可能不同
```
### 1.2. 配置网络
(无需配置，自动处理)
如果容器无法访问网络，请发送/data/lxd/var/log/network.log到
lateautumn233@foxmail.com

### 2.1. web界面
```shell
lxc config set core.https_address "[::]:8443"
```
继续访问ip:8443按要求操作即可
### 2.2. 端口映射
```shell
lxc config device add qiuqiu ssh proxy listen=tcp::外部ip connect=tcp::容器ip
```
### 2.2. lxd运行docker
```shell
update-alternatives --set iptables /usr/sbin/iptables-legacy
```

<span style="color:red">注:未经允许禁止转载</span>



喵喵喵喵喵
## 参考文章:
- [ArchLinux 安装 LXD](https://new.negoces.top/posts/cecd6168/)
- [LXC Images 软件仓库镜像使用帮助](https://mirrors.tuna.tsinghua.edu.cn/help/lxc-images/)
- [Failed to mount cgroup at /sys/fs/cgroup/systemd: Operation not permitted](https://github.com/lxc/lxc/issues/4072)