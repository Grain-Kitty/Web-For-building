<template>
    <div class="avatar yuan" style="color: rgb(240, 208, 192);">
        <!-- 头像 -->
        <div class="xEFF2 x2pHm xraw1">
            <img height="100%" width="100%" class="xkJBF"
                src="/images/tx.jpg"
                alt="" loading="eager" decoding="async">
        </div>
        <!-- 状态 -->
        <!-- <div class="xiuv3 xa2Cc">
        </div> -->
        <!-- 头像框 -->
        <div class="xbyxl">
            <div class="xhUxx"></div>
            <div class="xudJZ"></div>
        </div>
        <img class="x1fJq" src="/images/txk.png" alt="">
    </div>
</template>

<style>
.avatar {
    display: block;
    position: absolute;
    top: 170px;
    left: 16px;
    z-index: 2;
    width: 120px;
    height: 120px;
    box-shadow: 1px 1px 3px #0003;
}

.yuan {
    vertical-align: bottom;
    flex-shrink: 0;
    border-radius: 100%;
    line-height: 16px;
}

.xraw1 {
    position: absolute;
    inset: 0;
    border-radius: 100%;
    z-index: 1;
    overflow: clip;
    object-fit: cover;
    width: 100%;
    height: 100%;
}

.xEFF2 {
    position: relative;
    width: 100%;
    height: 100%;
}

/* 状态 */
/* .xa2Cc {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    width: 20%;
    height: 20%;
}

.xiuv3 {
    background: #888;
    box-shadow: 0 0 0 3px var(--panel);
    border-radius: 120%;
} */

/* 头像框 */


.xbyxl {
    contain: strict;
    position: absolute;
    top: -50%;
    left: -50%;
    width: 100%;
    height: 100%;
    padding: 50%;
    pointer-events: none;
    box-sizing: content-box !important;
}

.xbyxl>.xhUxx,
.xbyxl>.xhUxx:after {
    border-radius: 25% 75% 75%;
}

.xbyxl>.xhUxx {
    transform: rotate(37.5deg) skew(30deg);
}

.xbyxl>.xhUxx,
.xbyxl>.xudJZ {
    contain: strict;
    display: inline-block;
    height: 50%;
    width: 50%;
    background: currentColor;
}

.xbyxl>.xhUxx:after,
.xbyxl>.xudJZ:after {
    contain: strict;
    content: "";
    display: block;
    width: 60%;
    height: 60%;
    margin: 20%;
    background: #df548f;
}

.xbyxl>.xudJZ,
.xbyxl>.xudJZ:after {
    border-radius: 75% 25% 75% 75%;
}

.xbyxl>.xudJZ {
    transform: rotate(-37.5deg) skew(-30deg);
}

.xbyxl>.xhUxx:after,
.xbyxl>.xudJZ:after {
    contain: strict;
    content: "";
    display: block;
    width: 60%;
    height: 60%;
    margin: 20%;
    background: #df548f;
}

.avatar:hover>.xbyxl>.xhUxx {
    animation: xzoAW 1s infinite
}

@keyframes xzoAW {
    0% {
        transform: rotate(37.6deg) skew(30deg)
    }

    25% {
        transform: rotate(10deg) skew(30deg)
    }

    50% {
        transform: rotate(20deg) skew(30deg)
    }

    75% {
        transform: rotate(0) skew(30deg)
    }

    to {
        transform: rotate(37.6deg) skew(30deg)
    }
}
.avatar:hover>.xbyxl>.xudJZ {
    animation: x7I3Z 1s infinite;
}
@keyframes x7I3Z {
    0% {
        transform: rotate(-37.6deg) skew(-30deg)
    }

    30% {
        transform: rotate(-10deg) skew(-30deg)
    }

    55% {
        transform: rotate(-20deg) skew(-30deg)
    }

    75% {
        transform: rotate(0) skew(-30deg)
    }

    to {
        transform: rotate(-37.6deg) skew(-30deg)
    }
}

.x1fJq {
    position: absolute;
    z-index: 1;
    top: -50%;
    left: -50%;
    width: 200%;
    pointer-events: none;
}
</style>