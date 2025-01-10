<template>
    <div class="ftskorzw wide" style="container-type: inline-size;">
        <div class="main">
            <div class="profile">
                <div class="main _panel">
                    <div class="banner-container">
                        <div class="banner" :style="{
                            backgroundImage: `url('/images/Real-ESRGANv3-anime_1018_234033.png')`,
                            backgroundPosition: `center calc(50% + ${scrollYValue - 983.2}px)`
                        }">
                        </div>
                        <div class="fade"></div>
                        <div class="title">
                            <span class="name"
                                style="white-space: pre; overflow-wrap: normal; overflow: hidden; text-overflow: ellipsis;">
                                燈`cheney
                            </span>
                            <div class="bottom">
                                <span class="username">
                                    <span>
                                        <span>@Grain_Kitty</span>
                                        <span style="opacity: 0.5;">@GrainKitty.top</span>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <avater />
                    <!-- <div class="roles">
                        <span class="role">
                            <a href="/roles/9ablnrjc8m" style="background-color: rgba(0, 0, 0, 0);">1岁</a>
                        </span>
                    </div> -->
                    <div class="description">
                        <div class="xjzyI">
                            <span style="white-space: pre-wrap;">
                                呀呼~！
                            </span>
                        </div>
                    </div>
                    <div class="fields system">
                        <dl class="field">
                            <dt class="name"><i class="ti ti-cake ti-fw"></i>性别</dt>
                            <dd class="value">男</dd>
                        </dl>
                        <dl class="field">
                            <dt class="name"><i class="ti ti-cake ti-fw"></i>生日</dt>
                            <dd class="value">11/06</dd>
                        </dl>
                        <dl class="field">
                            <dt class="name"><i class="ti ti-cake ti-fw"></i>星座</dt>
                            <dd class="value">天蝎座</dd>
                        </dl>
                        <dl class="field">
                            <dt class="name"><i class="ti ti-cake ti-fw"></i>学校</dt>
                            <dd class="value">毕业于-加利顿大学</dd>
                        </dl>
                        <dl class="field">
                            <dt class="name"><i class="ti ti-cake ti-fw"></i>公司</dt>
                            <dd class="value">Grain_Kitty Studio</dd>
                        </dl>
                        <dl class="field">
                            <dt class="name"><i class="ti ti-cake ti-fw"></i>居住地</dt>
                            <dd class="value">宇宙-总星系-本超星系团(室女座超星系团 )-本星系群-银河系-太阳系-地月系-地球-亚洲-中国</dd>
                        </dl>
                        <dl class="field">
                            <dt class="name"><i class="ti ti-calendar ti-fw"></i>网站建立日期</dt>
                            <dd class="value">2024/12/31</dd>
                        </dl>
                        <dl class="field">
                            <dt class="name"><i class="ti ti-cake ti-fw"></i>个人说明</dt>
                            <dd class="value">个人说明？</dd>
                        </dl>
                    </div>
                    <div class="fields">
                        <dl class="field">
                            <dt class="name">
                                <span style="white-space: pre-wrap;">X(Twitter)</span>
                            </dt>
                            <dd class="value">
                                <span style="white-space: pre-wrap;">
                                    <a class="xxhr0 _link" href="https://x.com/raintoxic2"
                                        rel="nofollow noopener" target="_blank">
                                        <span class="xkUmz">
                                            x.com
                                        </span>
                                    </a>
                                </span>
                            </dd>
                        </dl>
                        <dl class="field">
                            <dt class="name">
                                <span style="white-space: pre-wrap;">bilibili</span>
                            </dt>
                            <dd class="value">
                                <span style="white-space: pre-wrap;">
                                    <a class="xxhr0 _link" href="https://space.bilibili.com/386623880"
                                        rel="nofollow noopener" target="_blank">
                                        <span class="xkUmz">
                                            (゜-゜)つロ 干杯 ~
                                        </span>
                                    </a>
                                </span>
                            </dd>
                        </dl>
                        <dl class="field">
                            <dt class="name">
                                <span style="white-space: pre-wrap;">github</span>
                            </dt>
                            <dd class="value">
                                <span style="white-space: pre-wrap;">
                                    <a class="xxhr0 _link" href="https://github.com/Grain-Kitty"
                                        rel="nofollow noopener" target="_blank">
                                        <span class="xkUmz">
                                            github.com
                                        </span>
                                    </a>
                                </span>
                            </dd>
                        </dl>
                        
                    </div>
                    <!-- <div class="status">
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import avater from "@/blog/avater.vue";

const scrollYValue = ref(0);

const handleScroll = () => {
    scrollYValue.value = window.pageYOffset;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});


</script>

<style>
.ftskorzw {
    background-color: var(--bg);
    color: var(--fg) !important;
    accent-color: var(--accent);
    overflow: auto;
    overflow-wrap: break-word;
    font-family: Hiragino Maru Gothic Pro, BIZ UDGothic, Roboto, HelveticaNeue, Arial, sans-serif;
    font-size: 14px;
    line-height: 1.35;
    text-size-adjust: 100%;
    tab-size: 2;
    -webkit-text-size-adjust: 100%;
}

.ftskorzw.wide {
    display: flex;
    width: 100%;
}

.ftskorzw.wide>.main {
    width: 100%;
    min-width: 0;
}

.ftskorzw>.main>.profile>.main {
    position: relative;
    overflow: clip;
}

._panel {
    background: var(--panel);
    border-radius: var(--radius);
    overflow: clip;
}

@container (max-width: 500px) {
    .ftskorzw>.main>.profile>.main>.banner-container {
        height: 140px;
    }
}

.ftskorzw>.main>.profile>.main>.banner-container {
    position: relative;
    height: 250px;
    overflow: clip;
    background-size: cover;
    background-position: center;
}

.ftskorzw>.main>.profile>.main>.banner-container>.banner {
    height: 100%;
    background-color: #4c5e6d;
    background-size: cover;
    background-position: center;
    box-shadow: 0 0 128px #00000080 inset;
    will-change: background-position;
}

@container (max-width: 500px) {
    .ftskorzw>.main>.profile>.main>.banner-container>.fade {
        display: none;
    }
}

.ftskorzw>.main>.profile>.main>.banner-container>.fade {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 78px;
    background: linear-gradient(transparent, #000000b3);
}

@container (max-width: 500px) {
    .ftskorzw>.main>.profile>.main>.banner-container>.title {
        display: none;
    }
}

.ftskorzw>.main>.profile>.main>.banner-container>.title {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 0 0 8px 154px;
    box-sizing: border-box;
    color: #fff;
}

.ftskorzw>.main>.profile>.main>.banner-container>.title>.name {
    display: block;
    margin: 0;
    line-height: 32px;
    font-weight: 700;
    font-size: 1.8em;
    text-shadow: 0 0 8px #000;
}


.ftskorzw>.main>.profile>.main>.banner-container>.title>.bottom>*.username {
    font-weight: 700;
}

.ftskorzw>.main>.profile>.main>.banner-container>.title>.bottom>* {
    display: inline-block;
    margin-right: 16px;
    line-height: 20px;
    opacity: .8;
}

.ftskorzw>.main>.profile>.main>.title {
    display: none;
    text-align: center;
    padding: 50px 8px 16px;
    font-weight: 700;
    border-bottom: solid .5px var(--divider);
}

.ftskorzw>.main>.profile>.main>.roles {
    padding: 24px 24px 0 154px;
    font-size: .95em;
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.ftskorzw>.main>.profile>.main>.roles>.role {
    border: solid 1px var(--color, var(--divider));
    border-radius: 999px;
    margin-right: 4px;
    padding: 3px 8px;
}

a {
    color: inherit;
}

.ftskorzw>.main>.profile>.main>.description {
    padding: 24px 24px 24px 154px;
    font-size: .95em;
}


.ftskorzw>.main>.profile>.main>.fields {
    padding: 24px;
    font-size: .9em;
    border-top: solid .5px var(--divider);
    margin-top: .5px;
}

.ftskorzw>.main>.profile>.main>.fields>.field:not(:last-child) {
    margin-bottom: 8px;
}

.ftskorzw>.main>.profile>.main>.fields>.field {
    display: flex;
    padding: 0;
    margin: 0;
    align-items: center;
}

.ftskorzw>.main>.profile>.main>.fields>.field>.name {
    width: 30%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 700;
    text-align: center;
}

.ti-fw {
    display: inline-block;
    text-align: center;
}

.ti {
    width: 1.28em;
    vertical-align: -12%;
    line-height: 1em;
}

.ti {
    font-family: "tabler-icons" !important;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.ftskorzw>.main>.profile>.main>.status {
    display: flex;
    padding: 24px;
    border-top: solid .5px var(--divider);
}

.ftskorzw>.main>.profile>.main>.status>a {
    flex: 1;
    text-align: center;
}

.ftskorzw>.main>.profile>.main>.status>a>b {
    display: block;
    line-height: 16px;
}

.ftskorzw>.main>.profile>.main>.status>a>span {
    font-size: 70%;
}
</style>