<template>

  <div id="home-slider">
    <!--<div class="swiper-container">
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
    </div>-->
    <div v-swiper:mySwiper="swiperOptions" class="swiper-container">
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
            return {
              swiperOptions: {
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
              }
            }
        },

        methods: {},

        mounted() {
          new Swiper(".swiper-container", {
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
    }
</script>

<style scoped>

</style>
