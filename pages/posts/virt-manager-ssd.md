---
tags:
  - Linux
title: virt-manager如何添加ssd设备和nvme设备
sources:
  - xlog
summary: ""
attributes:
  - value: How-to-Add-SSD-and-NVMe-Devices-in-virt-manager
    trait_type: xlog_slug
  - value: false
    trait_type: xlog_disable_ai_summary
images: 
date: 2023-11-03T06:53:32.471Z
resources:
  - name: featured-image
    src: attachments/featured-image.png
modified: 2024-02-17T18:50:02+08:00
---

# virt-manager如何添加ssd设备和nvme设备

# **ssd设备**
最近在virt-manager添加虚拟磁盘时发现，无论如何都会被识别成hdd，在查找一番后发现了
[how-to-add-virtual-storage-as-ssd-in-kvm](https://serverfault.com/questions/876467/how-to-add-virtual-storage-as-ssd-in-kvm)
很遗憾这种方法无法使用会报错找不到设备
最后我在[官方文档](https://libvirt.org/formatdomain.html)看到了
> The optional attribute rotation_rate sets the rotation rate of the storage for disks on a SCSI, IDE, or SATA bus. Values in the range 1025 to 65534 are used to indicate rotational media speed in revolutions per minute. A value of one is used to indicate solid state, or otherwise non-rotational, storage. These values are not required to match the values of the underlying host storage. Since 0.0.3; bus attribute since 0.4.3; tray attribute since 0.9.11; "usb" attribute value since after 0.4.4; "sata" attribute value since 0.9.7; "removable" attribute value since 1.1.3; "rotation_rate" attribute value since 7.3.0

机翻过来
> 可选属性rotation_rate设置SCSI、IDE 或SATA 总线上磁盘的存储旋转速率。1025 到 65534 范围内的值用于指示旋转介质速度（以每分钟转数为单位）。值一用于指示固态或非旋转存储。这些值不需要与底层主机存储的值匹配。 从 0.0.3 开始；从 0.4.3 开始“bus”属性；从 0.9.11 开始"tray" 属性；0.4.4 之后的“usb”属性值 ；自 0.9.7 起“sata”属性值；自 1.1.3 起， “removable”属性值；自 7.3.0 起的“rotation_rate”属性值

并且找到了这个例子
````xml
  <disk type='block' device='lun'>
    <driver name='qemu' type='raw'/>
    <source dev='/dev/sda'>
      <slices>
        <slice type='storage' offset='12345' size='123'/>
      </slices>
      <reservations managed='no'>
        <source type='unix' path='/path/to/qemu-pr-helper' mode='client'/>
      </reservations>
    </source>
    <target dev='sda' bus='scsi' rotation_rate='1'/>
    <address type='drive' controller='0' bus='0' target='3' unit='0'/>
  </disk>
````
在virt-manager->编辑->首选项->常规->启用xml编辑
再在target属性添加`rotation_rate='1'`就行了


![image](https://999-1257394446.cos.ap-hongkong.myqcloud.com/img/QmbjGMzo1tuffLd21hBmrMhh3KTc6NQnhqH7NsPLqt1vp9.png)

# **nvme设备**
在头部修改
```xml
<domain type='kvm'>
为
<domain xmlns:qemu="http://libvirt.org/schemas/domain/qemu/1.0" type="kvm">
```
在最后添加
```xml
......
  </devices>
  <qemu:commandline>
    <qemu:arg value="-drive"/>
    <qemu:arg value="file=/mnt/windows/tmp/archlinux.qcow2,format=raw,if=none,id=nvm"/>
    <qemu:arg value="-device"/>
    <qemu:arg value="nvme,drive=nvm,serial=nvm"/>
    <qemu:arg value="-drive"/>
    <qemu:arg value="file=/var/lib/libvirt/images/archlinux-3.qcow2,format=raw,if=none,id=nvm-1"/>
    <qemu:arg value="-device"/>
    <qemu:arg value="nvme,drive=nvm-1,serial=nvm-1,bus=pcie.0,addr=0x11"/>
  </qemu:commandline>
</domain>
```
如果虚拟pcie插槽地址重复可以修改addr值




### 参考文章:
- [KVM guests with emulated SSD and NVMe drives](https://blog.christophersmart.com/2019/12/18/kvm-guests-with-emulated-ssd-and-nvme-drives/)
- [How to add virtual storage as SSD in KVM](https://serverfault.com/questions/876467/how-to-add-virtual-storage-as-ssd-in-kvm)
