import { defineSiteConfig } from 'valaxy'

export default defineSiteConfig({
  url: 'https://blog.qiuqiu233.xyz',
  lang: 'zh-CN',
  title: '秋秋',
  author: {
    avatar: 'https://999-1257394446.cos.ap-hongkong.myqcloud.com/img/IMG_202310319387_2300x2300180.png',
    name: '秋秋',
  },
  description: 'Valaxy Theme Yun Preview.',
  social: [
    {
      name: 'RSS',
      link: '/atom.xml',
      icon: 'i-ri-rss-line',
      color: 'orange',
    },
    {
      name: 'QQ',
      link: 'mqqapi://card/show_pslcard?src_type=internal&version=1&uin=2811329631',
      icon: 'i-ri-qq-line',
      color: '#12B7F5',
    },
    {
      name: 'GitHub',
      link: 'https://github.com/lateautumn233',
      icon: 'i-ri-github-line',
      color: '#6e5494',
    },
    {
      name: '哔哩哔哩',
      link: 'https://space.bilibili.com/383894969',
      icon: 'i-ri-bilibili-line',
      color: '#FF8EB3',
    },
    {
      name: 'Telegram Channel',
      link: 'https://t.me/lateautumn233',
      icon: 'i-ri-telegram-line',
      color: '#0088CC',
    },
    {
      name: 'E-Mail',
      link: 'mailto:lateautumn233@foxmail.com',
      icon: 'i-ri-mail-line',
      color: '#8E71C1',
    },
    {
      name: 'Travelling',
      link: 'https://www.travellings.cn/go.html',
      icon: 'i-ri-train-line',
      color: 'var(--va-c-text)',
    },
  ],

  search: {
    enable: false,
  },

  sponsor: {
    enable: false,
    title: '我很可爱，请给我钱！',
    methods: [
      {
        name: '支付宝',
        url: 'https://cdn.yunyoujun.cn/img/donate/alipay-qrcode.jpg',
        color: '#00A3EE',
        icon: 'i-ri-alipay-line',
      },
    ],
  },
})
