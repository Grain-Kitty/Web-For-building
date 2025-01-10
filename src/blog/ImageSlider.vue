<template>
  <div id="image-container">
    <RecycleScroller
      class="scroller"
      :items="imageInfo"
      :item-size="itemSize" 
      key-field="id"
      v-slot="{ item }"
      @scroll="handleScroll"
    >
      <div class="image-wrapper-item" @mouseenter="pauseScroll" @mouseleave="resumeScroll">
        <img :src="item.url" :alt="item.name" />
      </div>
    </RecycleScroller>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { RecycleScroller } from 'vue-virtual-scroller';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';


const imageInfo = ref([]);
const itemSize = ref(350);
const scrollerRef = ref(null);
let scrollInterval;
let isPaused = false;

function loadImageInfoFromJSON() {
fetch('./images.json')
.then(response => response.json())
.then(data => {
        const shuffledImages = shuffleArray(data.images);
        imageInfo.value = shuffledImages.map((image, index) => ({
    ...image,
          id: index // 确保每个 item 有唯一的 id 用于 key-field
        }));
      })
.catch(error => {
        console.error(error);
      });
}

function shuffleArray(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex!== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

function handleScroll(event) {
  // 可在此处添加滚动时的处理逻辑
  // console.log('当前滚动位置:', event.target.scrollTop);
}

function startAutoScroll() {
  if (scrollerRef.value &&!isPaused) {
    scrollInterval = setInterval(() => {
      const scroller = scrollerRef.value;
      const currentScrollTop = scroller.scrollTop;
      const scrollHeight = scroller.scrollHeight;
      const clientHeight = scroller.clientHeight;
      const nextScrollTop = currentScrollTop + 1;
      
      if (nextScrollTop >= scrollHeight - clientHeight) {
        scroller.scrollTop = 0;
      } else {
        scroller.scrollTop = nextScrollTop;
      }
    }, 15);
  }
}

function pauseScroll() {
  isPaused = true;
  clearInterval(scrollInterval);
}

function resumeScroll() {
  isPaused = false;
  startAutoScroll();
}

onMounted(() => {
  loadImageInfoFromJSON();
  nextTick(() => {
    scrollerRef.value = document.querySelector('.scroller');
    startAutoScroll();
  });
});

onUnmounted(() => {
  if (scrollInterval) {
    clearInterval(scrollInterval);
  }
});
</script>

<style>
.scroller {
  height: 100%;
  overflow-y: hidden !important;
  mask-image: linear-gradient(0deg, #0000, #000 128px calc(100% - 128px), #0000);
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}

#image-container {
  height: 100%;
  overflow: hidden;
  position: relative;
}
  

.image-wrapper-item {
  padding: 16px;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  overflow: hidden;
  position: relative;
}

.image-wrapper-item img {
  border-radius: 16px;
  max-width: 100%;
  max-height: 310px;
  object-fit: contain;
  transition: transform 0.3s ease;
}

.image-wrapper-item img:hover {
  transform: scale(1.2);
}
.vue-recycle-scroller.ready.direction-vertical .vue-recycle-scroller__item-view {
    width: auto !important;
}
.vue-recycle-scroller__item-wrapper{
  max-width: 500px !important ;
}
</style>