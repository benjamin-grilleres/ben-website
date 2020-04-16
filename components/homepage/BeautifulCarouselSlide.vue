<template>
  <div class="swiper-slide">
    <div class="swiper-image swiper-image-1" data-swiper-parallax-y="-20%">
      <div class="swiper-image-inner swiper-image-left" :class="classImageLeft">
        <slot name="bloc-left">
        </slot>
        <a :href="linkedin" target="_blank">
          <img src="/icons/linkedin-logo-white.svg" width="20px" class="absolute" style="bottom: 10px; left: 10px"/>
        </a>
        <div class="block sm:hidden mt-6">
          <slot name="bloc-right"></slot>
        </div>
      </div>
    </div>
    <div class="swiper-image swiper-image-2 hidden sm:block" data-swiper-parallax-y="35%">
      <div class="swiper-image-inner swiper-image-right relative" :class="classImageRight">
       <slot name="bloc-right"></slot>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "BeautifulCarouselSlide",

        props: [
          'data-swiper-parallax-y-image-left',
          'data-swiper-parallax-y-image-right',
          'class-image-left',
          'class-image-right',
          'linkedin'
        ],

        mounted() {

        }
    }
</script>

<style scoped>

</style>
