<template>
    <blogheader />
    <!-- 首页下拉箭头 -->
    <div class="headertop-down" @click="scrollToPosition">
        <span>
            <svg t="1682342753354" class="homepage-downicon" viewBox="0 0 1843 1024" version="1.1"
                xmlns="http://www.w3.org/2000/svg" p-id="21355" width="80px" height="80px">
                <path
                    d="M1221.06136021 284.43250057a100.69380037 100.69380037 0 0 1 130.90169466 153.0543795l-352.4275638 302.08090944a100.69380037 100.69380037 0 0 1-130.90169467 0L516.20574044 437.48688007A100.69380037 100.69380037 0 0 1 647.10792676 284.43250057L934.08439763 530.52766665l286.97696258-246.09516608z"
                    fill="rgba(255,255,255,0.8)" p-id="21356"></path>
            </svg></span>
    </div>
    <div v-show="showBackToTopButton" class="back-to-top" @click="scrollToTop">
        <svg data-v-06186cb2="" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24" width="24" height="24" fill="currentColor" class="back-to-top-icon">
            <path
                d="M20.3964 12.83585C21.65635 14.0958 20.76405 16.2501 18.9822 16.2501L5.01774 16.2501C3.23594 16.2501 2.34359 14.0958 3.60353 12.83585L10.58575 5.85361C11.3668 5.07256 12.63315 5.07256 13.4142 5.85361L20.3964 12.83585z"
                fill="currentColor"></path>
        </svg>
    </div>
    <div class="targetelement" ref="targetElement">
        <infomassage style="width: 800px; float: left;"></infomassage>
        <ImageSlider style="width: 500px; float: left;"></ImageSlider>  
    </div>
</template>

<script setup>
import blogheader from "@/blog/blogheader.vue";
import ImageSlider from '@/blog/ImageSlider.vue';
import infomassage from '@/blog/infomassage.vue';
import { ref } from 'vue';

const targetElement = ref(null);

const scrollToPosition = () => {
    if (targetElement.value) {
        targetElement.value.scrollIntoView({
            behavior: 'smooth'
        });
    }
};

const barpadding = ref(false);
const showBackToTopButton = ref(false);

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};
// 定义一个函数，用于处理滚动事件
const handleScroll = () => {
    showBackToTopButton.value = window.scrollY > 300;   
};


onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    // 在组件挂载时检查当前滚动位置，如果不在顶部则返回顶部
    if (window.scrollY > 0) {
        window.scrollTo({
            top: 0
        });
    }
});
</script>

<style>
.headertop-down {
    position: absolute;
    bottom: 30px;
    left: calc(10% - 42px);
    z-index: 5;
    animation-name: float-down;
    animation-duration: 5s;
    animation-iteration-count: infinite;
}

@keyframes float-down {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-7px);
    }

    100% {
        transform: translateY(0px);
    }
}

.back-to-top {
    position: fixed;
    bottom: 20px;
    left: 40px;
    width: 50px;
    height: 50px;
    background-color: var(--theme-skin-matching, #505050);
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    /* 添加过渡效果 */
    transition: transform 0.3s ease-in-out;
}

.back-to-top:hover {
    transform: scale(1.1);
}

.back-to-top-icon {
    fill: white;
    animation: bounce 1.5s infinite;
}

/* 定义一个动画，使图标上下跳动 */
@keyframes bounce {

    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
    }

    40% {
        transform: translateY(-10px);
    }

    60% {
        transform: translateY(-5px);
    }
}

.targetelement {
    width: 1300px;
    height: 100%;
    margin: 0 auto;
    margin-left: 350px;
    padding-top: 60px;
}
</style>