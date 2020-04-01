<template>
  <div id="home-slider" class="slider-homepage">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-one">
          <div class="swiper-image" data-swiper-parallax-y="-20%">
            <div class="swiper-image-inner swiper-image-left" :class="'swiper-image-one'">
              <h4>
                Thomas<br>Lebrequier
              </h4>
              <p>Développeur fullstack <br> chez Wecom4U</p>
            </div>
          </div>
          <div class="swiper-image" data-swiper-parallax-y="35%">
            <div class="swiper-image-inner swiper-image-right relative" :class="'swiper-image-two'">
              <p class="paragraph">
                Je recommande Benjamin pour ses compétences techniques seniors sur les frameworks Vue.js (Nuxt), Laravel et ses profondes connaissances des langages du web en général. À ses côtés, j'ai pu apprendre énormément dans le développement d'applications web et de sites internet, de la conception au développement jusqu'à la mise en production.
              </p>
            </div>
          </div>
        </div>

      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>

  import Swiper from 'swiper'
  import BeautifulCarouselSlide from "./BeautifulCarouselSlide";
    export default {
        name: "BeautifulCarousel",
      components: {BeautifulCarouselSlide},
      data() {
            return {}
        },

        methods: {
          loadingComplete() {
            let s = new Swiper(".swiper-container", {
              direction: "vertical",
              loop: true,
              pagination: {
                el: '.swiper-pagination',
                clickable: true,
              },
              speed: 1000,
              parallax: true,
              autoplay: false,
              effect: "slide",
              allowTouchMove: false,
              mousewheelControl: 1
            });
          }
        },

        mounted() {
          this.$bus.$on('loadingComplete',this.loadingComplete)

        }
    }
</script>

<style>
  /** purgecss start ignore */


  .slider-homepage {
    height: 50vh;
    width: 100%;
    position: relative;
  }
  @media screen and (max-width: 1440px) {
    .slider-homepage {
      height: 45vh;
    }
  }
  @media screen and (max-width: 1024px) {
    .slider-homepage {
      height: 30vh;
    }
  }
  @media screen and (max-width: 768px) {
    .slider-homepage {
      height: 52vh;
    }
  }
  @media screen and (max-width: 576px) {
    .slider-homepage {
      height: 700px;
    }
  }


  .swiper-container {
    height: 100%;
    width: 100%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  .swiper-image-one {
    background-color: #35495e !important;
  }
  .swiper-image-two {
    background-color: #41b883 !important;
  }
  .swiper-image-three {
    background-color: #f8df1e !important;
  }
  .swiper-image-four {
    background-color: #0d1924 !important;
  }
  .swiper-image-five {
    background-color: #2e3029 !important;
  }
  .swiper-image-six {
    background-color: #1bbcb9 !important;
  }
  .swiper-image {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    .swiper-image {
      width: 100%;
    }
  }
  @media screen and (max-width: 576px) {
    .swiper-image {
      height: 100%;
    }
  }
  .swiper-image-inner {
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .swiper-image-inner.swiper-image-left {
    padding: 4rem;
  }
  @media screen and (max-width: 576px) {
    .swiper-image-inner.swiper-image-left {
      padding: 2.5rem 2rem;
    }
  }
  .swiper-image-left {
    filter: sepia(100%);
    transition: all 1s linear;
    transition-delay: 1s;
  }
  .swiper-slide.swiper-slide-active .swiper-image-left {
    filter: sepia(0%);
  }
  .swiper-image-inner.swiper-image-right {
    transition: all 1s linear;
    transition-delay: 1s;
  }
  @media screen and (max-width: 576px) {
    .swiper-image-inner.swiper-image-right {
      padding: 20px 0;
    }
  }
  .swiper-image-inner.swiper-image-right:hover .swiper-next-text {
    transform: scale(1.2);
  }
  @media screen and (max-width: 768px) {
    .swiper-slide {
      flex-direction: column;
    }
  }
  h4 {
    color: #fff;
    /*@media screen and (max-width: $screen-md) {
       font-size: 2.4rem;
    }
    */
  }
  @apply font-avenir-bold;
  align-self: flex-start;
  margin: 0;
  font-size: 4.5rem;
  line-height: 1;
  transition: all .8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.1s;
  transform: translate3d(-20%, 0, 0);
  opacity: 0;
  @media screen and (max-width: $screen-xl) {
    font-size: 3.9rem;
  }
  @media screen and (max-width: 1024px) {
    h4 {
      font-size: 3.1rem;
    }
  }
  h4 + p {
    font-size: 14px;
    line-height: 24px;
    letter-spacing: 2px;
    padding-left: 3px;
    width: 100%;
    align-self: flex-end;
    text-transform: uppercase;
    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.3s;
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
    font-weight: 500;
    color: #fff;
    margin-top: 30px;
  }
  @media screen and (max-width: 1200px) {
    h4 + p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 768px) {
    h4 + p {
      margin-top: 20px;
    }
  }
  p.paragraph {
    margin: 0;
    color: #fff;
    width: 100%;
    max-width: 82%;
    text-align: justify;
    font-size: 1.2rem;
    font-weight: 500;
    opacity: 0;
    transition: all 0.6s cubic-bezier(0.215, 0.61, 0.355, 1) 1.4s;
    transform: translate3d(-20%, 0, 0);
  }
  @apply font-avenir-regular;
  @media screen and (max-width: $screen-xl) {
    font-size: 1.25rem;
    line-height: 1.4;
  }
  .swiper-slide.swiper-slide-active h4, .swiper-slide.swiper-slide-active p.paragraph, .swiper-slide.swiper-slide-active h4 span.emphasis, .swiper-slide.swiper-slide-active h4 + p {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  .swiper-next-text {
    transition: all 0.3s ease-in-out;
    transform: scale(1);
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  /* Swiper css file. Only thing changed down here is the pagination styling */
  /** * Swiper 3.4.1 * Most modern mobile touch slider and framework with hardware accelerated transitions * * http://www.idangero.us/swiper/ * * Copyright 2016, Vladimir Kharlampidi * The iDangero.us * http://www.idangero.us/ * * Licensed under MIT * * Released on: December 13, 2016 */
  .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .swiper-container-no-flexbox .swiper-slide {
    float: left;
  }
  .swiper-container-vertical > .swiper-wrapper {
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  .swiper-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    z-index: 1;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-transition-property: -webkit-transform;
    -moz-transition-property: -moz-transform;
    -o-transition-property: -o-transform;
    -ms-transition-property: -ms-transform;
    transition-property: transform;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }
  .swiper-container-android .swiper-slide, .swiper-wrapper {
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate(0px, 0px);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }
  .swiper-container-multirow > .swiper-wrapper {
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .swiper-slide {
    -webkit-flex-shrink: 0;
    -ms-flex: 0 0 auto;
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;
    overflow: hidden;
    display: flex;
  }
  /* a11y */
  .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }
  /* IE10 Windows Phone 8 Fixes */
  .swiper-wp8-horizontal {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }
  .swiper-wp8-vertical {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }
  /* Pagination Styles */
  .swiper-pagination {
    position: absolute;
    text-align: center;
    -webkit-transition: 300ms;
    -moz-transition: 300ms;
    -o-transition: 300ms;
    transition: 300ms;
    -webkit-transform: translate3d(0, 0, 0);
    -ms-transform: translate3d(0, 0, 0);
    -o-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
    z-index: 10;
  }
  .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
  /* Common Styles */
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  /* Bullets */
  .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    display: inline-block;
    background: #fff;
    opacity: 0.4;
  }
  button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
  .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .swiper-pagination-white .swiper-pagination-bullet {
    background: #fff;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }
  .swiper-pagination-white .swiper-pagination-bullet-active {
    background: #fff;
  }
  .swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000;
  }
  .swiper-container-vertical > .swiper-pagination-bullets {
    right: 15px;
    bottom: 15px;
  }
  .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 5px 0;
    display: block;
  }
  .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }
  /* Progress */
  .swiper-pagination-progress {
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
  }

  /** purgecss end ignore */


</style>
