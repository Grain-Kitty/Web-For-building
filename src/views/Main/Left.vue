<template>
  <div :class="store.mobileOpenState ? 'left hidden' : 'left'">
    <div :class="{ leftbj: store.coverType == '0' }">
      <Message />
      <SocialLinks />
    </div>
  </div>
</template>

<script setup>
import { mainStore } from "@/store";
import Message from "@/components/Message.vue";
import SocialLinks from "@/components/SocialLinks.vue";
const store = mainStore();
</script>

<style lang="scss" scoped>
.left {
  // flex: 1 0 0%;
  width: 50%;
  margin-right: 10px;
  transform: translateY(20px);
  &.hidden {
    display: none;
  }
  @media (max-width: 720px) {
    margin-right: 0;
    width: 100%;
  }
}
.leftbj {
  margin-left: 56px;
}
</style>
