<template>
  <header class="the-head">
    <div class="body" flex>
      <a class="favicon" href="/">
        <img :src="selfImage" alt="favicon"/>
      </a>
      <a class="txt" :href="siteConfig.aboutUrl" flex :title="siteConfig.corner">{{siteConfig.corner}}</a>
      <span @mouseenter="toggle(true)" @mouseleave="toggle(false)"></span>
    </div>
  </header>
</template>

<script>
import Headroom from "headroom.js";
import selfImage from '@/image/i.png';
const siteConfig = require( '@/site-config');

export default {
  name: "TheHead",
  data() {
    return {
      selfImage,
      siteConfig
    }
  },
  mounted() {
    new Headroom(this.$el, {
      offset: this.$el.scrollHeight,
      scroller: document.querySelector('section.body')
    }).init()
  },
  methods: {
    toggle(b) {
      this.$emit('toggle', b)
    }
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/style/public";

.the-head {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: $head-height;
  background: rgba(0, 0, 0, 0.1);
  transition: all .15s linear;
  z-index: $z-index-head;
  box-shadow: 0 0 0.5rem rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(1px);
  &.headroom--unpinned {
    background: rgba(0, 0, 0, 0.6);
  }
  &.show-bg{
    background: transparent !important;
  }
  > .body{
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    justify-content: space-between;
    > .favicon{
      margin-left: 1rem;
      height: 88%;
      border-radius: 0.4rem;
      box-shadow: 0 0 0.4rem rgba(255, 255, 255, 0.3);
      >img{
        border-radius: inherit;
        height: 100%;
        object-fit: contain;
      }
    }
    > .txt{
      font-weight: bold;
      margin: 0 1rem 0 auto;
      height: 100%;
      color: white;
      text-decoration: none;
      cursor: pointer;
      font-size: 0.95rem;
      font-family: "Source Code Pro", serif;
      word-break: keep-all;
      white-space: nowrap;
    }
    >a{
      position: relative;
      z-index: 2;
    }
    > span{
      position: absolute;
      z-index: 1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: transparent;
    }
  }
  @include media{
    >.body{
      > .txt{
        font-size: 0.85rem;
        margin-right: 0.3rem;
      }
    }
  }
}
</style>