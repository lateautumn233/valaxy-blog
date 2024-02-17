---
tags:
  - Linux
title: linux网桥
sources:
  - xlog
summary: ""
attributes:
  - value: linux-wang-qiao-md
    trait_type: xlog_slug
  - value: false
    trait_type: xlog_disable_ai_summary
date: 2023-11-20T04:16:10.717Z
images: 
modified: 2024-02-17T18:49:34+08:00
---

# linux网桥

 > 在虚拟化环境中，你可能有多个虚拟机以及宿主机的网络接口，使用网桥可以使它们在同一个网络中进行通信。这有助于虚拟机之间的直接通信，并能够方便地与物理网络交互。

<!-- more -->

以下任选其一
 ## 命令行配置


1.**创建网桥设备**
```
nmcli c add type bridge autoconnect yes con-name br0 ifname br0
```
2.**配置网桥ipv4**
```
动态获取
nmcli c modify br0 ipv4.method auto 
静态获取
nmcli c modify br0 ipv4.method manual ipv4.address 192.168.3.10 
nmcli c modify br0 ipv4.gateway 192.168.3.1
nmcli c modify br0 ipv4.dns 192.168.3.1
```
3.**删除原有有线连接**
```
nmcli c delete eno1
```
4.**绑定网卡**
```
nmcli c add type bridge-slave autoconnect yes con-name enp3s0f3u2c2 master br0
```
5.**重启Linux**



![cb563b2c109bda0bc90f52e408e1aa91.image.webp](https://999-1257394446.cos.ap-hongkong.myqcloud.com/img/cb563b2c109bda0bc90f52e408e1aa91.image.webp)
## GUI配置
**无线网卡需设置4addr模式**
```
# /etc/udev/rules.d/91-wifi-4addr-mode.rules
ACTION=="add", SUBSYSTEM=="net", ATTRS{address}=="04:cf:4b:21:76:0e", RUN+="/usr/bin/iw dev $name set 4addr on"

#address为网卡mac地址
```
![0cdff1a1a157066100078b0a7b48a773.image.webp](https://999-1257394446.cos.ap-hongkong.myqcloud.com/img/0cdff1a1a157066100078b0a7b48a773.image.webp)

![image.png](https://999-1257394446.cos.ap-hongkong.myqcloud.com/img/141491221067112b81cbc3ce514a1e06.image.webp)
**建议在常规配置上选中自动连接**