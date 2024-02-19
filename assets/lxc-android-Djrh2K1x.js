import{_ as k}from"./ValaxyMain.vue_vue_type_style_index_0_lang-C6iFaOKN.js";import{a as d,p as r,m as g,o as u,c as F,w as l,f as _,q as y,k as m,h as i,r as t,g as s}from"./app-DJXMUuPO.js";import"./YunFooter.vue_vue_type_script_setup_true_lang-Cm-I7XME.js";import"./YunCard.vue_vue_type_script_setup_true_lang-CC1xuBOh.js";import"./YunPageHeader.vue_vue_type_script_setup_true_lang-D34gyHKd.js";import"./index-C7yU5XnD.js";const C=s("h1",{id:"lxc-on-android-📱",tabindex:"-1"},[i("Lxc on Android 📱 "),s("a",{class:"header-anchor",href:"#lxc-on-android-📱","aria-label":'Permalink to "Lxc on Android 📱"'},"​")],-1),f=s("p",null,[s("img",{src:"https://999-1257394446.cos.ap-hongkong.myqcloud.com/img/IMG_202310319387_2300x2300180.png",alt:""}),i(" 简介： LXC是一种操作系统层虚拟化技术，为Linux内核容器功能的一个用户空间接口。它将应用软件系统打包成一个软件容器，内含应用软件本身的代码，以及所需要的操作系统核心和库。")],-1),b=s("hr",null,null,-1),v=s("h1",{id:"_1-编译内核",tabindex:"-1"},[i("1. 编译内核 "),s("a",{class:"header-anchor",href:"#_1-编译内核","aria-label":'Permalink to "1. 编译内核"'},"​")],-1),B=s("h3",{id:"_1-1-调整内核配置",tabindex:"-1"},[i("1.1. 调整内核配置 "),s("a",{class:"header-anchor",href:"#_1-1-调整内核配置","aria-label":'Permalink to "1.1. 调整内核配置"'},"​")],-1),E=s("p",null,[i("使用此"),s("a",{href:"https://github.com/lateautumn233/android_kernel_docker",target:"_blank",rel:"noreferrer"},"仓库"),i("快捷添加配置")],-1),x=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," fetch https://github.com/lateautumn233/android_kernel_docker main")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," merge -s ours --no-commit --allow-unrelated-histories --squash FETCH_HEAD")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," read-tree --prefix=docker -u FETCH_HEAD")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"echo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "source '),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'\\"'),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"docker/Kconfig"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},'\\"'),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'"'),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," >>"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," arch/arm64/Kconfig")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' commit -m -a "Imported docker/ from https://github.com/lateautumn233/android_kernel_docker"')])])]),s("button",{class:"collapse"})],-1),A=s("p",null,"然后再自行编译 🥵🥵🥵",-1),D=s("h3",{id:"_1-2-内核补丁",tabindex:"-1"},[i("1.2. 内核补丁 "),s("a",{class:"header-anchor",href:"#_1-2-内核补丁","aria-label":'Permalink to "1.2. 内核补丁"'},"​")],-1),P=s("p",null,"1.修复可能存在的panic情况",-1),w=s("ul",null,[s("li",null,[s("a",{href:"https://github.com/lateautumn233/android_kernel_oneplus_sm8250/commit/51656fb1d02cbad23208391d1ba052a46d5eacf5",target:"_blank",rel:"noreferrer"},"net/netfilter/xt_qtaguid.c")])],-1),$=s("div",{class:"language-patch vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"patch"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"--- orig/net/netfilter/xt_qtaguid.c     2020-05-12 12:13:14.000000000 +0300")]),i(`
`),s("span",{class:"line"},[s("span",null,"+++ my/net/netfilter/xt_qtaguid.c       2019-09-15 23:56:45.000000000 +0300")]),i(`
`),s("span",{class:"line"},[s("span",null,"@@ -737,7 +737,7 @@")]),i(`
`),s("span",{class:"line"},[s("span",null,"{")]),i(`
`),s("span",{class:"line"},[s("span",null,"        struct proc_iface_stat_fmt_info *p = m->private;")]),i(`
`),s("span",{class:"line"},[s("span",null,"        struct iface_stat *iface_entry;")]),i(`
`),s("span",{class:"line"},[s("span",null,"-       struct rtnl_link_stats64 dev_stats, *stats;")]),i(`
`),s("span",{class:"line"},[s("span",null,"+       struct rtnl_link_stats64 *stats;")]),i(`
`),s("span",{class:"line"},[s("span",null,"        struct rtnl_link_stats64 no_dev_stats = {0};  ")]),i(`
`),s("span",{class:"line"},[s("span",null,"@@ -745,13 +745,8 @@")]),i(`
`),s("span",{class:"line"},[s("span",null,"        current->pid, current->tgid, from_kuid(&init_user_ns, current_fsuid()));")]),i(`
`),s("span",{class:"line"},[s("span",null,"        iface_entry = list_entry(v, struct iface_stat, list);")]),i(`
`),s("span",{class:"line"},[s("span",null,"+       stats = &no_dev_stats; ")]),i(`
`),s("span",{class:"line"},[s("span",null,"-       if (iface_entry->active) {")]),i(`
`),s("span",{class:"line"},[s("span",null,"-               stats = dev_get_stats(iface_entry->net_dev,")]),i(`
`),s("span",{class:"line"},[s("span",null,"-                                     &dev_stats);")]),i(`
`),s("span",{class:"line"},[s("span",null,"-       } else {")]),i(`
`),s("span",{class:"line"},[s("span",null,"-               stats = &no_dev_stats;")]),i(`
`),s("span",{class:"line"},[s("span",null,"-       }")]),i(`
`),s("span",{class:"line"},[s("span",null,"        /*")]),i(`
`),s("span",{class:"line"},[s("span",null,"         * If the meaning of the data changes, then update the fmtX")]),i(`
`),s("span",{class:"line"},[s("span",null,"         * string.")])])]),s("button",{class:"collapse"})],-1),I=s("p",null,"2.修复cgroup缺少cpuset前缀",-1),N=s("ul",null,[s("li",null,[s("a",{href:"https://github.com/lateautumn233/android_kernel_oneplus_sm8250/commit/14b4f8f5198071c5c6ec8146b4f4d99c9dc5135b",target:"_blank",rel:"noreferrer"},"kernel/cgroup/cgroup.c")])],-1),R=s("div",{class:"language-patch vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"patch"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,"--- a/kernel/cgroup/cgroup.c")]),i(`
`),s("span",{class:"line"},[s("span",null,"+++ b/kernel/cgroup/cgroup.c")]),i(`
`),s("span",{class:"line"},[s("span",null,"@@ -3786,6 +3786,10 @@ static int cgroup_add_file(struct cgroup_subsys_state *css, struct cgroup *cgrp,")]),i(`
`),s("span",{class:"line"},[s("span",null," 		cfile->kn = kn;")]),i(`
`),s("span",{class:"line"},[s("span",null," 		spin_unlock_irq(&cgroup_file_kn_lock);")]),i(`
`),s("span",{class:"line"},[s("span",null," 	}")]),i(`
`),s("span",{class:"line"},[s("span",null,"+	if (cft->ss && (cgrp->root->flags & CGRP_ROOT_NOPREFIX) && !(cft->flags & CFTYPE_NO_PREFIX)) {")]),i(`
`),s("span",{class:"line"},[s("span",null,'+				snprintf(name, CGROUP_FILE_NAME_MAX, "%s.%s", cft->ss->name, cft->name);')]),i(`
`),s("span",{class:"line"},[s("span",null,"+				kernfs_create_link(cgrp->kn, name, kn);")]),i(`
`),s("span",{class:"line"},[s("span",null,"+	}")]),i(`
`),s("span",{class:"line"},[s("span",null," ")]),i(`
`),s("span",{class:"line"},[s("span",null," 	return 0;")]),i(`
`),s("span",{class:"line"},[s("span",null," }")])])]),s("button",{class:"collapse"})],-1),X=s("p",null,"具体编译内核 以下省略n字",-1),q=s("h1",{id:"_2-使用termux安装lxc",tabindex:"-1"},[i("2. 使用termux安装lxc "),s("a",{class:"header-anchor",href:"#_2-使用termux安装lxc","aria-label":'Permalink to "2. 使用termux安装lxc"'},"​")],-1),L=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pkg"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," update "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"&& "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"pkg"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install root-repo "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"&& "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install lxc tsu")])])]),s("button",{class:"collapse"})],-1),O=s("h3",{id:"_2-1-配置并启动lxc容器",tabindex:"-1"},[i("2.1. 配置并启动lxc容器 "),s("a",{class:"header-anchor",href:"#_2-1-配置并启动lxc容器","aria-label":'Permalink to "2.1. 配置并启动lxc容器"'},"​")],-1),T=s("p",null,"首先需要挂载cgroup",-1),H=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"tsu")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mount"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," tmpfs -o mode="),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"755"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," tmpfs /sys/fs/cgroup")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mkdir"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /sys/fs/cgroup/devices")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mount"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," cgroup -o devices cgroup /sys/fs/cgroup/devices")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"lxc-setup-cgroups"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}}," #可能不需要")])])]),s("button",{class:"collapse"})],-1),M=s("p",null,"创建容器",-1),S=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 创建之前修改网络配置")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"请参考下面2.1配置网络")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"lxc-create"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," download -n my-container -- --server mirrors.tuna.tsinghua.edu.cn/lxc-images --no-validate")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 依次填入发行版 版本号 架构")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 然后启动")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"lxc-start"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -n"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," my-container -d -F")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 很快啊就报错了")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#Failed to mount cgroup at /sys/fs/cgroup/systemd: Operation not permitted")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#[!!!!!!] Failed to mount API filesystems.")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#Exiting PID 1...")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 解决方法1")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"echo"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "lxc.init.cmd = /sbin/init systemd.unified_cgroup_hierarchy=0"'),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," >>"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $PREFIX"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/share/lxc/config/common.conf.d/systemd.conf")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 解决方法2")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mkdir"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -p"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /sys/fs/cgroup/systemd "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"&& "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"mount"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," cgroup cgroup -o none,name=systemd /sys/fs/cgroup/systemd")])])]),s("button",{class:"collapse"})],-1),V=s("p",null,"调整lxc容器密码",-1),Z=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"chroot"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," path /bin/su -")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"lxc-attach"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -n"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," my-container passwd")])])]),s("button",{class:"collapse"})],-1),G=s("p",null,"在容器内配置dns解析",-1),K=s("div",{class:"language- vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"}),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",null,'echo -e "[Match]\\nName=wlan0\\n\\n[Network]\\nDHCP=yes\\n\\n[DHCP]\\nRouteMetric=120" \\')]),i(`
`),s("span",{class:"line"},[s("span",null,"> /etc/systemd/network/21-wireless.network")]),i(`
`),s("span",{class:"line"},[s("span",null,"systemctl restart systemd-networkd")])])]),s("button",{class:"collapse"})],-1),U=s("h2",{id:"_2-1-配置网络",tabindex:"-1"},[i("2.1. 配置网络 "),s("a",{class:"header-anchor",href:"#_2-1-配置网络","aria-label":'Permalink to "2.1. 配置网络"'},"​")],-1),j=s("p",null,"配置网络目前测试通过的有2种",-1),J=s("h3",{id:"_2-1-1-使用host模式",tabindex:"-1"},[i("2.1.1 使用host模式 "),s("a",{class:"header-anchor",href:"#_2-1-1-使用host模式","aria-label":'Permalink to "2.1.1 使用host模式"'},"​")],-1),Y=s("p",null,"在创建容器之前进行以下调整",-1),z=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"sed"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -i"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," 's/lxc\\.net\\.0\\.type = empty/lxc.net.0.type = none/g'"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}}," $PREFIX"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/etc/lxc/default.conf")])])]),s("button",{class:"collapse"})],-1),Q=s("p",null,[i("如果你想host下运行docker接下来还要做以下调整"),s("br"),i(" 启动容器在lxc容器内输入 ！！！")],-1),W=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"update-alternatives"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," --set"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," iptables /usr/sbin/iptables-legacy")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"iptables"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," filter -F")]),i(`
`),s("span",{class:"line"}),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#如果可以启动了就不需要再使用下面命令")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"iptables"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -t"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," filter -X")])])]),s("button",{class:"collapse"})],-1),ss=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"echo"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," 8.8"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},".8.8"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"}}," >"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," /etc/resolv.conf")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"systemctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," stop systemd-resolved")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"systemctl"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," disable systemd-resolved")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# systemctl enable systemd-networkd")])])]),s("button",{class:"collapse"})],-1),is=s("h3",{id:"_2-1-1-使用veth模式",tabindex:"-1"},[i("2.1.1 使用veth模式 "),s("a",{class:"header-anchor",href:"#_2-1-1-使用veth模式","aria-label":'Permalink to "2.1.1 使用veth模式"'},"​")],-1),ls=s("p",null,"以下第一次需要配置",-1),as=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"apt"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," install dnsmasq wget -y")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"#修改默认lxc配置")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"echo"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," -e"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},' "lxc.net.0.type = veth '),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"\\nlxc.net.0.link = lxcbr0 "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"\\nlxc.net.0.flags = up "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}},"\\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},'\\nlxc.net.0.hwaddr = 00:16:3e:xx:xx:xx"'),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"}}," \\")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"> $PREFIX"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/etc/lxc/default.conf")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A737D"}},"# 修改lxc-net")]),i(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"wget"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," https://qiuqiu233.top/d/linux-deploy/lxc/lxc-net -O "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PREFIX"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/libexec/lxc/lxc-net "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"&& "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"}},"chmod"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}}," a+x "),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PREFIX"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"}},"/libexec/lxc/lxc-net")])])]),s("button",{class:"collapse"})],-1),ts=s("p",null,"每次重启设备后想要使用veth请",-1),es=s("div",{class:"language-shell vp-adaptive-theme"},[s("button",{title:"Copy Code",class:"copy"}),s("span",{class:"lang"},"shell"),s("pre",{class:"shiki shiki-themes github-light github-dark vp-code"},[s("code",{"v-pre":""},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"}},"$PREFIX/libexec/lxc/lxc-net start")])])]),s("button",{class:"collapse"})],-1),ns=s("p",null,"喵喵喵喵喵",-1),hs=s("h2",{id:"参考文章",tabindex:"-1"},[i("参考文章: "),s("a",{class:"header-anchor",href:"#参考文章","aria-label":'Permalink to "参考文章:"'},"​")],-1),rs=s("ul",null,[s("li",null,[s("a",{href:"https://gist.github.com/FreddieOliveira/efe850df7ff3951cb62d74bd770dce27",target:"_blank",rel:"noreferrer"},"Docker on Android")]),s("li",null,[s("a",{href:"https://mirrors.tuna.tsinghua.edu.cn/help/lxc-images/",target:"_blank",rel:"noreferrer"},"LXC Images 软件仓库镜像使用帮助")]),s("li",null,[s("a",{href:"https://github.com/lxc/lxc/issues/4072",target:"_blank",rel:"noreferrer"},"Failed to mount cgroup at /sys/fs/cgroup/systemd: Operation not permitted")]),s("li",null,[s("a",{href:"https://www.cnblogs.com/embedded-linux/p/10540426.html",target:"_blank",rel:"noreferrer"},"采用systemd-networkd管理网卡")]),s("li",null,[s("a",{href:"https://unix.stackexchange.com/questions/442598/how-to-configure-systemd-resolved-and-systemd-networkd-to-use-local-dns-server-f",target:"_blank",rel:"noreferrer"},"How to configure systemd-resolved and systemd-networkd to use local DNS server for resolving local domains and remote DNS server for remote domains?")])],-1),cs=s("p",null,[s("a",{href:"./"})],-1),ms={__name:"lxc-android",setup(os,{expose:c}){const e=JSON.parse('{"title":"Lxc on Android 📱","description":"","frontmatter":{"tags":[],"title":"Lxc on Android 📱","sources":["xlog"],"summary":"","attributes":[{"value":"Lxc-on-Android-","trait_type":"xlog_slug"},{"value":false,"trait_type":"xlog_disable_ai_summary"}],"date":"2023-09-02T20:53:12.731Z","draft":true,"categories":["容器"],"modified":"2024-02-17T10:49:46.000Z"},"headers":[{"level":3,"title":"1.1. 调整内核配置","slug":"_1-1-调整内核配置","link":"#_1-1-调整内核配置","children":[]},{"level":3,"title":"1.2. 内核补丁","slug":"_1-2-内核补丁","link":"#_1-2-内核补丁","children":[]},{"level":3,"title":"2.1. 配置并启动lxc容器","slug":"_2-1-配置并启动lxc容器","link":"#_2-1-配置并启动lxc容器","children":[]},{"level":2,"title":"2.1. 配置网络","slug":"_2-1-配置网络","link":"#_2-1-配置网络","children":[{"level":3,"title":"2.1.1 使用host模式","slug":"_2-1-1-使用host模式","link":"#_2-1-1-使用host模式","children":[]},{"level":3,"title":"2.1.1 使用veth模式","slug":"_2-1-1-使用veth模式","link":"#_2-1-1-使用veth模式","children":[]}]},{"level":2,"title":"参考文章:","slug":"参考文章","link":"#参考文章","children":[]}],"relativePath":"pages/posts/lxc-android.md","path":"/home/runner/work/valaxy-blog/valaxy-blog/pages/posts/lxc-android.md","lastUpdated":1708336498000}'),h=d(),n=e.frontmatter||{};return h.meta.frontmatter=Object.assign(h.meta.frontmatter||{},e.frontmatter||{}),r("pageData",e),r("valaxy:frontmatter",n),globalThis.$frontmatter=n,c({frontmatter:{tags:[],title:"Lxc on Android 📱",sources:["xlog"],summary:"",attributes:[{value:"Lxc-on-Android-",trait_type:"xlog_slug"},{value:!1,trait_type:"xlog_disable_ai_summary"}],date:"2023-09-02T20:53:12.731Z",draft:!0,categories:["容器"],modified:"2024-02-17T10:49:46.000Z"}}),(a,ks)=>{const o=g("strike"),p=k;return u(),F(p,{frontmatter:_(n)},{"main-content-md":l(()=>[C,f,y(" more "),b,v,B,E,x,A,D,P,w,$,I,N,R,X,q,L,O,T,H,M,S,V,Z,G,K,U,j,J,Y,z,Q,W,m(o,null,{default:l(()=>[i(" hos模式一般可以自动解析dns当然也不排除意外情况 如果无法解析DNS "),ss]),_:1}),is,ls,as,ts,es,ns,hs,rs,cs]),"main-header":l(()=>[t(a.$slots,"main-header")]),"main-header-after":l(()=>[t(a.$slots,"main-header-after")]),"main-nav":l(()=>[t(a.$slots,"main-nav")]),"main-content":l(()=>[t(a.$slots,"main-content")]),"main-content-after":l(()=>[t(a.$slots,"main-content-after")]),"main-nav-before":l(()=>[t(a.$slots,"main-nav-before")]),"main-nav-after":l(()=>[t(a.$slots,"main-nav-after")]),comment:l(()=>[t(a.$slots,"comment")]),footer:l(()=>[t(a.$slots,"footer")]),aside:l(()=>[t(a.$slots,"aside")]),"aside-custom":l(()=>[t(a.$slots,"aside-custom")]),default:l(()=>[t(a.$slots,"default")]),_:3},8,["frontmatter"])}}};export{ms as default};
