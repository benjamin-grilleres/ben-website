<template>
  <div id="home-slider" class="slider-homepage">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <beautiful-carousel-slide
          class-image-left="swiper-image-one"
          class-image-right="swiper-image-two"
          class="swiper-slide-one"
          linkedin="https://www.linkedin.com/in/thomas-lebrequier-developpeur/"
        >
          <template slot="bloc-left">
            <h4>
                Thomas<br>Lebrequier
            </h4>
            <p>Développeur fullstack <br> chez Wecom4U</p>
          </template>

          <p class="paragraph" slot="bloc-right">
            Je recommande Benjamin pour ses compétences techniques seniors sur les frameworks Vue.js (Nuxt), Laravel et ses profondes connaissances des langages du web en général. À ses côtés, j'ai pu apprendre énormément dans le développement d'applications web et de sites internet, de la conception au développement jusqu'à la mise en production.
          </p>

        </beautiful-carousel-slide>
        <beautiful-carousel-slide
          class-image-left="swiper-image-three"
          class-image-right="swiper-image-four"
          class="swiper-slide-two"
          linkedin="https://www.linkedin.com/in/nicolas-cont%C3%A9-6816b483/"
        >
          <template slot="bloc-left">
            <h4 class="hover:underline">
                Nicolas<br>Conté
            </h4>
            <p>CEO Bubbleflat</p>
          </template>
          <p class="paragraph" slot="bloc-right">
            Benjamin a travaillé pour mon entreprise durant 2 ans. Je retiens que c’est une personne sur qui l’on peut compter, travailleur, soigneux tant dans son travail que dans les relations avec les autres salariés.
          </p>

        </beautiful-carousel-slide>
        <beautiful-carousel-slide
          class-image-left="swiper-image-five"
          class-image-right="swiper-image-six"
          class="swiper-slide-three"
        >
          <template slot="bloc-left">
            <h1>The <span class="emphasis">Drop</span>. <br><span>Of Eternal life.</span></h1>
            <p>Chapter II, page VII</p>
          </template>
          <template slot="bloc-right">
            <p class="paragraph">
              Je recommande Benjamin pour ses compétences techniques seniors sur les frameworks Vue.js (Nuxt), Laravel et ses profondes connaissances des langages du web en général. À ses côtés, j'ai pu apprendre énormément dans le développement d'applications web et de sites internet, de la conception au développement jusqu'à la mise en production, le tout en méthode agile en utilisant le versioning (via Github).
            </p>
          </template>
        </beautiful-carousel-slide>
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
  .slider-homepage .swiper-container {
    height: 100%;
    width: 100%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  }
  .slider-homepage .swiper-image-one {
    background-color: #35495e !important;
  }
  .slider-homepage .swiper-image-two {
    background-color: #41b883 !important;
  }
  .slider-homepage .swiper-image-three {
    background-color: #f8df1e !important;
  }
  .slider-homepage .swiper-image-four {
    background-color: #0d1924 !important;
  }
  .slider-homepage .swiper-image-five {
    background-color: #2e3029 !important;
  }
  .slider-homepage .swiper-image-six {
    background-color: #1bbcb9 !important;
  }
  .slider-homepage .swiper-image {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    .slider-homepage .swiper-image {
      width: 100%;
    }
  }
  @media screen and (max-width: 576px) {
    .slider-homepage .swiper-image {
      height: 100%;
    }
  }
  .slider-homepage .swiper-image-inner {
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }
  .slider-homepage .swiper-image-inner.swiper-image-left {
    padding: 4rem;
  }
  @media screen and (max-width: 576px) {
    .slider-homepage .swiper-image-inner.swiper-image-left {
      padding: 2.5rem 2rem;
    }
  }
  .slider-homepage .swiper-image-left {
    filter: sepia(100%);
    transition: all 1s linear;
    transition-delay: 1s;
  }
  .slider-homepage .swiper-slide.swiper-slide-active .swiper-image-left {
    filter: sepia(0%);
  }
  .slider-homepage .swiper-image-inner.swiper-image-right {
    transition: all 1s linear;
    transition-delay: 1s;
  }
  @media screen and (max-width: 576px) {
    .slider-homepage .swiper-image-inner.swiper-image-right {
      padding: 20px 0;
    }
  }
  .slider-homepage .swiper-image-inner.swiper-image-right:hover .swiper-next-text {
    transform: scale(1.2);
  }
  @media screen and (max-width: 768px) {
    .slider-homepage .swiper-slide {
      flex-direction: column;
    }
  }
  .slider-homepage h4 {
    color: #fff;
    font-family: 'AvenirNextBold';
    align-self: flex-start;
    margin: 0;
    font-size: 4.5rem;
    line-height: 1;
    transition: all 0.8s cubic-bezier(0.215, 0.61, 0.355, 1) 1.1s;
    transform: translate3d(-20%, 0, 0);
    opacity: 0;
    /*@media screen and (max-width: $screen-md) {
       font-size: 2.4rem;
    }
    */
  }
  @media screen and (max-width: 1200px) {
    .slider-homepage h4 {
      font-size: 3.9rem;
    }
  }
  @media screen and (max-width: 1024px) {
    .slider-homepage h4 {
      font-size: 3.1rem;
    }
  }
  .slider-homepage h4 + p {
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
    .slider-homepage h4 + p {
      font-size: 13px;
    }
  }
  @media screen and (max-width: 768px) {
    .slider-homepage h4 + p {
      margin-top: 20px;
    }
  }
  .slider-homepage p.paragraph {
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
    font-family: 'AvenirNextRegular';
  }
  @media screen and (max-width: 1200px) {
    .slider-homepage p.paragraph {
      font-size: 1.25rem;
      line-height: 1.4;
    }
  }
  .slider-homepage .swiper-slide.swiper-slide-active h4, .slider-homepage .swiper-slide.swiper-slide-active p.paragraph, .slider-homepage .swiper-slide.swiper-slide-active h4 span.emphasis, .slider-homepage .swiper-slide.swiper-slide-active h4 + p {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  .slider-homepage .swiper-next-text {
    transition: all 0.3s ease-in-out;
    transform: scale(1);
    position: absolute;
    bottom: 10px;
    right: 15px;
  }
  .slider-homepage .swiper-container {
    margin-left: auto;
    margin-right: auto;
    position: relative;
    overflow: hidden;
    /* Fix of Webkit flickering */
    z-index: 1;
  }
  .slider-homepage .swiper-container-no-flexbox .swiper-slide {
    float: left;
  }
  .slider-homepage .swiper-container-vertical > .swiper-wrapper {
    -webkit-box-orient: vertical;
    -moz-box-orient: vertical;
    -ms-flex-direction: column;
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  .slider-homepage .swiper-wrapper {
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
  .slider-homepage .swiper-container-android .swiper-slide, .slider-homepage .swiper-wrapper {
    -webkit-transform: translate3d(0px, 0, 0);
    -moz-transform: translate3d(0px, 0, 0);
    -o-transform: translate(0px, 0px);
    -ms-transform: translate3d(0px, 0, 0);
    transform: translate3d(0px, 0, 0);
  }
  .slider-homepage .swiper-container-multirow > .swiper-wrapper {
    -webkit-box-lines: multiple;
    -moz-box-lines: multiple;
    -ms-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    flex-wrap: wrap;
  }
  .slider-homepage .swiper-container-free-mode > .swiper-wrapper {
    -webkit-transition-timing-function: ease-out;
    -moz-transition-timing-function: ease-out;
    -ms-transition-timing-function: ease-out;
    -o-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    margin: 0 auto;
  }
  .slider-homepage .swiper-slide {
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
  .slider-homepage .swiper-container .swiper-notification {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;
    opacity: 0;
    z-index: -1000;
  }
  .slider-homepage .swiper-wp8-horizontal {
    -ms-touch-action: pan-y;
    touch-action: pan-y;
  }
  .slider-homepage .swiper-wp8-vertical {
    -ms-touch-action: pan-x;
    touch-action: pan-x;
  }
  .slider-homepage .swiper-button-prev, .slider-homepage .swiper-button-next {
    position: absolute;
    top: 50%;
    width: 27px;
    height: 44px;
    margin-top: -22px;
    z-index: 10;
    cursor: pointer;
    -moz-background-size: 27px 44px;
    -webkit-background-size: 27px 44px;
    background-size: 27px 44px;
    background-position: center;
    background-repeat: no-repeat;
  }
  .slider-homepage .swiper-button-prev.swiper-button-disabled, .slider-homepage .swiper-button-next.swiper-button-disabled {
    opacity: 0.35;
    cursor: auto;
    pointer-events: none;
  }
  .slider-homepage .swiper-button-prev, .slider-homepage .swiper-container-rtl .swiper-button-next {
    background-image: url("data:image/svg+xml;
    charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    left: 10px;
    right: auto;
    }
    .slider-homepage .swiper-button-prev.swiper-button-black, .slider-homepage .swiper-container-rtl .swiper-button-next.swiper-button-black {
    background-image: url("data:image/svg+xml;
    charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
    }
    .slider-homepage .swiper-button-prev.swiper-button-white, .slider-homepage .swiper-container-rtl .swiper-button-next.swiper-button-white {
    background-image: url("data:image/svg+xml;
    charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M0%2C22L22%2C0l2.1%2C2.1L4.2%2C22l19.9%2C19.9L22%2C44L0%2C22L0%2C22L0%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
    }
    .slider-homepage .swiper-button-next, .slider-homepage .swiper-container-rtl .swiper-button-prev {
    background-image: url("data:image/svg+xml;
    charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23007aff'%2F%3E%3C%2Fsvg%3E");
    right: 10px;
    left: auto;
    }
    .slider-homepage .swiper-button-next.swiper-button-black, .slider-homepage .swiper-container-rtl .swiper-button-prev.swiper-button-black {
    background-image: url("data:image/svg+xml;
    charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23000000'%2F%3E%3C%2Fsvg%3E");
    }
    .slider-homepage .swiper-button-next.swiper-button-white, .slider-homepage .swiper-container-rtl .swiper-button-prev.swiper-button-white {
    background-image: url("data:image/svg+xml;
    charset=utf-8,%3Csvg%20xmlns%3D'http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg'%20viewBox%3D'0%200%2027%2044'%3E%3Cpath%20d%3D'M27%2C22L27%2C22L5%2C44l-2.1-2.1L22.8%2C22L2.9%2C2.1L5%2C0L27%2C22L27%2C22z'%20fill%3D'%23ffffff'%2F%3E%3C%2Fsvg%3E");
    }
    .slider-homepage .swiper-pagination {
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
  .slider-homepage .swiper-pagination.swiper-pagination-hidden {
    opacity: 0;
  }
  .slider-homepage .swiper-pagination-fraction, .slider-homepage .swiper-pagination-custom, .slider-homepage .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .slider-homepage .swiper-pagination-bullet {
    width: 14px;
    height: 14px;
    display: inline-block;
    background: #fff;
    opacity: 0.4;
  }
  .slider-homepage button.swiper-pagination-bullet {
    border: none;
    margin: 0;
    padding: 0;
    box-shadow: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -webkit-appearance: none;
    appearance: none;
  }
  .slider-homepage .swiper-pagination-clickable .swiper-pagination-bullet {
    cursor: pointer;
  }
  .slider-homepage .swiper-pagination-white .swiper-pagination-bullet {
    background: #fff;
  }
  .slider-homepage .swiper-pagination-bullet-active {
    opacity: 1;
    background: #fff;
  }
  .slider-homepage .swiper-pagination-white .swiper-pagination-bullet-active {
    background: #fff;
  }
  .slider-homepage .swiper-pagination-black .swiper-pagination-bullet-active {
    background: #000;
  }
  .slider-homepage .swiper-container-vertical > .swiper-pagination-bullets {
    right: 15px;
    bottom: 15px;
  }
  .slider-homepage .swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 5px 0;
    display: block;
  }
  .slider-homepage .swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
    margin: 0 5px;
  }
  .slider-homepage .swiper-pagination-progress {
    background: rgba(0, 0, 0, 0.25);
    position: absolute;
  }
  .slider-homepage .swiper-pagination-progress .swiper-pagination-progressbar {
    background: #007aff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    -webkit-transform: scale(0);
    -ms-transform: scale(0);
    -o-transform: scale(0);
    transform: scale(0);
    -webkit-transform-origin: left top;
    -moz-transform-origin: left top;
    -ms-transform-origin: left top;
    -o-transform-origin: left top;
    transform-origin: left top;
  }
  .slider-homepage .swiper-container-rtl .swiper-pagination-progress .swiper-pagination-progressbar {
    -webkit-transform-origin: right top;
    -moz-transform-origin: right top;
    -ms-transform-origin: right top;
    -o-transform-origin: right top;
    transform-origin: right top;
  }
  .slider-homepage .swiper-container-horizontal > .swiper-pagination-progress {
    width: 100%;
    height: 4px;
    left: 0;
    top: 0;
  }
  .slider-homepage .swiper-container-vertical > .swiper-pagination-progress {
    width: 4px;
    height: 100%;
    left: 0;
    top: 0;
  }
  .slider-homepage .swiper-pagination-progress.swiper-pagination-white {
    background: rgba(255, 255, 255, 0.5);
  }
  .slider-homepage .swiper-pagination-progress.swiper-pagination-white .swiper-pagination-progressbar {
    background: #fff;
  }
  .slider-homepage .swiper-pagination-progress.swiper-pagination-black .swiper-pagination-progressbar {
    background: #000;
  }

  /** purgecss end ignore */


</style>
