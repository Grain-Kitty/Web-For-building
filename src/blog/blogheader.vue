<template>
    <div class="scrollbar" id="bar" style="width: 0%;"></div>
    <div :class="{ siteheader: true, 'siteheader yya': isScrolled }" role="banner">
        <div class="site-top">
            <div class="site-branding">
                <div class="site-title">
                    <!-- <a href=""><img alt="绫月乃萝" src="@/../public/images/LOGO-1.png"></a> -->
                </div>
                <!-- logo end -->
            </div><!-- .site-branding -->
            <div class="header-user-avatar">
                <avater />
            </div>
            <div class="lower">
                <nav>
                    <ul id="menu-menu" class="menu">
                        <li class="current-menu-item"><a href="" aria-current="page">首页</a></li>
                        <!-- <li><a href="">测试2</a></li>
                        <li><a href="">测试3</a></li>
                        <li><a href="">测试4</a>
                            <ul class="sub-menu">
                                <li><a href="">测试4.1</a></li>
                                <li><a href="">测试4.2</a></li>
                                <li><a href="">测试4.3</a></li>
                                <li><a href="">测试4.4</a></li>
                            </ul>
                        </li> -->
                        <li><a href="">更多？</a>
                            <ul class="sub-menu">
                                <li><a href="">没有更多</a></li>
                                <li><a href="">前面的首页也是摆设</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>


<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue';
import avater from "@/blog/avater.vue";

const scrollTop = ref(0);
const isScrolled = ref(false);
const scrollPercent = ref(0);

const handleScroll = () => {
    scrollTop.value = document.documentElement.scrollTop;
    isScrolled.value = scrollTop.value > 0;
    scrollPercent.value = (scrollTop.value / (document.documentElement.scrollHeight - document.documentElement.clientHeight)) * 100;
    document.getElementById('bar').style.width = scrollPercent.value + '%';
    // console.log('页面滚动了', scrollPercent.value);
};


onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
img {
    border: 0;
    height: auto;
    max-width: 100%;
}

.blog a,
.blog p {
    color: var(--theme-skin);
}

.site-title a:hover,
.site-top ul li a:hover,
.site-info a:hover,
.ins-section .ins-search-item:hover .ins-slug,
.ins-section .ins-search-item:hover .ins-search-preview,
.ins-section .ins-search-item:hover header,
.sorry li a:hover,
.art .art-content #archives a:hover {
    color: var(--theme-skin-matching, #505050);
}

// 导航栏
.siteheader {
    width: 95%;
    height: 60px;
    transition: all 1s ease-in-out !important;
    position: fixed;
    left: 2.5%;
    top: 2.5%;
    z-index: 999;
    border-radius: 20px;
    word-break: keep-all;
    border: 1.5px solid transparent;
}

.siteheader:hover {
    background-color: rgba(255, 255, 255, .9);
}

.site-top {
    width: 100%;
    display: block;
    margin: 0 auto;
    padding: 0 20px;
}

// logo
.site-branding {
    animation: sitetop 1s;
    float: left;
    position: relative;
    height: 60px;
    line-height: 60px;
    margin-left: -6px;
}

.site-branding img {
    height: 40px;
    margin-top: 10px;
    margin-left: 10px;
    opacity: 1;
    -webkit-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    -moz-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
}

//头像
.header-user-avatar {
    width: 33px;
    height: 33px;
    animation: searchbox 1s;
    position: relative;
    float: right;
    margin: 0 10px;
    margin-top: 15px;
}

.header-user-avatar>.avatar {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
}

// 导航菜单
.site-top .lower {
    animation: searchbox 1s;
    position: relative;
    display: block;
    float: right;
    margin: 7.5px 0 0 0;
    font-size: 16px;
    font-weight: var(--global-font-weight);
}

.site-top .lower nav {
    position: relative;
    float: right;
    display: none;
    animation: searchbox .4s;
}

.site-top ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: inline-block;
}

.site-top ul li {
    float: left;
    margin: 0 14px;
    position: relative;
    -webkit-transition: all 1s ease;
    transition: all 1s ease;
}

.site-top ul li a {
    padding: 10px 0;
    display: inline-block;
    color: var(--theme-skin);
    cursor: pointer;
}

.site-top ul li a:hover:after,
embed,
iframe,
object {
    max-width: 100%;
}

.site-top ul li a:after {
    content: "";
    display: block;
    position: absolute;
    bottom: -5px;
    height: 4px;
    background-color: var(--theme-skin-matching, #505050);
    width: 100%;
    border-radius: 30px;
    max-width: 0;
    transition: max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.lower li ul {
    display: none;
    opacity: 1;
    position: absolute;
    background: rgba(255, 255, 255, .95);
    padding: 10px;
    top: 45px;
    right: -20px;
    min-width: 80px;
    text-align: center;
    white-space: nowrap;
    z-index: 9999;
    border-radius: 15px;
    /* box-shadow: 0 1px 40px -8px rgba(0, 0, 0, .2); */
    animation: header-menu .8s;
}

.lower li:hover ul {
    display: inline-block;
    -webkit-transition: all .4s;
    transition: all .4s;
}

a {
    background-color: transparent;
    text-decoration: none;
    color: var(--theme-skin, #505050);
    outline: 0;
    -webkit-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    -moz-transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    transition: color .2s ease-out, border .2s ease-out, opacity .2s ease-out;
    word-break: break-word;
}

/*导航菜单动画*/

.site-top .lower nav {
    display: block !important;
}

.site-top ul {
    -moz-animation: fadeInLeft 1s;
    -webkit-animation: fadeInLeft 1s;
    animation: fadeInLeft 1s;
    max-width: 76vw;
}

@-moz-keyframes fadeInLeft {
    0% {
        -moz-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0
    }

    50% {
        -moz-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0
    }

    100% {
        -moz-transform: translateX(0%);
        transform: translateX(0%);
        opacity: 1
    }
}

@-webkit-keyframes fadeInLeft {
    0% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0
    }

    50% {
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0
    }

    100% {
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        opacity: 1
    }
}

@keyframes fadeInLeft {
    0% {
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0
    }

    50% {
        -moz-transform: translateX(100%);
        -ms-transform: translateX(100%);
        -webkit-transform: translateX(100%);
        transform: translateX(100%);
        opacity: 0
    }

    100% {
        -moz-transform: translateX(0%);
        -ms-transform: translateX(0%);
        -webkit-transform: translateX(0%);
        transform: translateX(0%);
        opacity: 1
    }
}

.siteheader.yya {
    background: rgba(255, 255, 255, .7);
    border-bottom: 1.5px solid #FFFFFF;
    transition: all 0.6s ease-in-out;
    width: 100%;
    left: 0;
    top: 0;
    border-radius: 0px !important;
}

.yya {
    position: fixed;
    -webkit-transition: all 1s ease !important;
    transition: all 1s ease !important;
    border-radius: 50px !important;
}

.scrollbar {
    position: fixed;
    top: 0;
    height: 3px;
    background: var(--theme-skin-matching, #505050);
    transition-property: width, background;
    transition-duration: 1s, 1s;
    z-index: 99999;
}

//进度条
.scrollbar {
    position: fixed;
    top: 0;
    height: 3px;
    background: var(--theme-skin-matching, #505050);
    transition-property: width, background;
    transition-duration: 1s, 1s;
    z-index: 99999;
}
</style>