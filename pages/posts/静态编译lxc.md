---
tags:
  - post
  - Linux
title: 静态编译lxc
sources:
  - xlog
summary: ""
attributes:
  - value: jing-tai-bian-yi-lxcmd
    trait_type: xlog_slug
date: 2023-09-03T05:59:49.842Z
modified: 2024-02-17T08:47:46+08:00
---

# 静态编译lxc

### 1. 安装依赖lxc依赖
````shell
apt-get update -qq
apt-get install --yes --no-install-recommends \
apparmor bash-completion bridge-utils build-essential \
busybox-static clang cloud-image-utils curl dbus debhelper debootstrap \
devscripts dnsmasq-base docbook2x doxygen ed fakeroot file gcc graphviz \
git iptables meson net-tools libapparmor-dev libcap-dev libgnutls28-dev liblua5.2-dev \
libpam0g-dev libseccomp-dev libselinux1-dev libtool linux-libc-dev \
llvm lsb-release make openssl pkg-config python3-all-dev \
python3-setuptools rsync squashfs-tools uidmap unzip uuid-runtime \
wget xz-utils systemd-coredump libdbus-1-dev
apt-get remove --yes lxc-utils liblxc-common liblxc1 liblxc-dev
````
<!-- more -->
### 2. 克隆lxc仓库
```shell
git clone https://github.com/lateautumn233/lxc
```
### 3. 编译lxc
```shell
cd lxc && mkdir build
meson setup build -Dprefix=/data/lxc --default-library=static -Dinit-script=sysvinit -Ddbus=false -Druntime-path=/data/local/tmp -Dstrip=true -Dcapabilities=false -Dseccomp=false -Dselinux=false -Dapparmor=false -Dlog-path=/data/lxc/var/log/lxc -Ddata-path=/data/lxc/lib/lxc --localstatedir=/data/lxc/var/ -Dc_link_args="-static"
ninja -C build
ninja -C build install
```