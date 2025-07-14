const { createApp } = Vue

createApp({
    data() {
        return {
            searchQuery: '',
            quickLinks: [
                { name: 'Bing', icon: 'fa fa-search', bgColor: 'bg-blue-500', url: 'https://cn.bing.com' },
                { name: 'Google', icon: 'fa fa-google', bgColor: 'bg-red-500', url: 'https://www.google.com' },
                { name: 'GitHub', icon: 'fa fa-github', bgColor: 'bg-gray-800', url: 'https://github.com' },
                { name: 'YouTube', icon: 'fa fa-youtube-play', bgColor: 'bg-red-600', url: 'https://www.youtube.com' },
                { name: 'Twitter', icon: 'fa fa-twitter', bgColor: 'bg-blue-400', url: 'https://twitter.com' },
                { name: 'Facebook', icon: 'fa fa-facebook', bgColor: 'bg-blue-600', url: 'https://www.facebook.com' },
                { name: 'Bilibili', icon: 'fa fa-video-camera', bgColor: 'bg-red-500', url: 'https://www.bilibili.com' },
                { name: 'Telegram', icon: 'fa fa-paper-plane', bgColor: 'bg-blue-500', url: 'https://t.me' },
                { name: 'Instagram', icon: 'fa fa-instagram', bgColor: 'bg-pink-500', url: 'https://www.instagram.com' },
                { name: 'Twitch', icon: 'fa fa-twitch', bgColor: 'bg-purple-500', url: 'https://www.twitch.tv' },
                { name: 'Discord', icon: 'fa fa-commenting', bgColor: 'bg-purple-500', url: 'https://discord.com' },
                { name: 'Reddit', icon: 'fa fa-reddit', bgColor: 'bg-orange-500', url: 'https://www.reddit.com' },
            ]
        }
    },
    computed: {
        currentDate() {
            const date = new Date()
            const year = date.getFullYear()
            const month = date.getMonth() + 1
            const day = date.getDate()
            return `${year}年${month}月${day}日`
        },
        greeting() {
            const hour = new Date().getHours()
            if (hour < 6) return '凌晨好'
            if (hour < 9) return '早上好'
            if (hour < 12) return '上午好'
            if (hour < 14) return '中午好'
            if (hour < 17) return '下午好'
            if (hour < 19) return '傍晚好'
            if (hour < 22) return '晚上好'
            return '夜深了'
        }
    },
    methods: {
        searchBing() {
            if (this.searchQuery.trim()) {
                window.location.href = `https://cn.bing.com/search?q=${encodeURIComponent(this.searchQuery)}`
            }
        },
        openLink(url) {
            window.open(url, '_blank')
        }
    },
    mounted() {
        // 自动更新时间
        setInterval(() => {
            this.$forceUpdate()
        }, 60000)

        // 支持按Enter键搜索
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.searchBing()
            }
        })
    }
}).mount('#app')