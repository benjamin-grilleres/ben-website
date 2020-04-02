<template>
  <section class="homepage" >
    <div class="flex flex-wrap homepage-part-1">
      <div class="col-12 col-md-5 col-xl-6 z-20 transition ease-in-out duration-300 custom-padding" ref="benImage"  :class="hideImageOnScroll ? 'opacity-0' : 'opacity-100'">
        <div v-bckg-img="'/img/ben.jpg'" class="bckg-img ben-image" :class="{'active':runAnimation}">
        </div>
      </div>
      <div class="col-12 col-md-7 col-xl-6 opacityAndRight custom-padding mt-12 md:mt-0 text-center md:text-left" style="transition-delay:250ms" :class="{'active':runAnimation}">
        <div class="flex justify-center h-full items-center ">
          <div class="col-12 col-sm-10">
            <div>
              <h1 class="title-h1 mb-6">Hello, moi c'est Benjamin !</h1>
              <h2 class="title-h2 mb-8">Je suis <span class="font-avenir-bold">développeur web fullstack </span> spécialisé sur Laravel, Vue.js et Nuxt.js</h2>
              <div>
                <button class="btn-black" v-scroll-to="'.homepage-part-2'">
                  <ArrowLeft class="with-arrow"></ArrowLeft>
                  En savoir plus
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
    <div class="container">
      <div class="homepage-part-2 mt-20">
        <div class="row justify-center">
          <div class="col-md-11 col-lg-8">
            <div class="text-center mb-12 md:mb-24">
            <span class="sub-title">
              3 ans d'expérience et diplômé d'un Master en Développement Logiciel
            </span>
            </div>
          </div>
          <div class=" col-12 col-lg-10 mb-32">
            <div class="row justify-center md:justify-between items-center mb-16 md:mb-32">
              <div class="col-8 col-md-3">
                <img src="/img/tech/logos.png" width="100%">
              </div>
              <div class="col-md-8 text-center md:text-left mt-10 md:mt-0">
                <h3 class="title-h3 mb-5">
                  Développement front et composants réutilisables
                </h3>
                <p class="text-lg">La conception par composants même dans le développement front a tout son intérêt pour maximiser la réutilisabilité et la maintenabilité d'un site.</p>
              </div>
            </div>

            <div class="row justify-center md:justify-between items-center mb-16 md:mb-32 flex-col-reverse md:flex-row">
              <div class="col-md-8 text-center md:text-left mt-10 md:mt-0">
                <h3 class="title-h3 mb-5">Conception d'architectures complexes</h3>
                <p class="text-lg">Mes différentes expériences m'ont permis d'acquérir suffisament de compétences pour concevoir dans sa globalité des sites plus ou moins complexes et de proposer des solutions techniques aux problèmes que l'on peut rencontrer.</p>
              </div>
              <div class="col-8 col-md-3">
                <img src="/img/tech/logos2.png" width="100%">
              </div>
            </div>
            <div class="row justify-center">
              <div class="col-12">
                <h3 class="title-h3 mb-5 text-center mb-6">Le développement ce n'est pas que coder</h3>
                <p class="text-lg text-center">Le travail d'équipe est essentiel au bon déroulement des projets. Le pair programming et le code review sont des atouts majeurs pour faire progresser chaque développeur en apprenant toujours plus.</p>
              </div>
             </div>
            <div class="row">
              <div class="col-12 text-center mt-8">
                <button class="btn-black" v-scroll-to="'.homepage-part-2'">
                  <ArrowLeft class="with-arrow"></ArrowLeft>
                  Voir mes projets
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="homepage-part-3  mb-30">
        <div class="mb-12">
          <div class="text-center mb-6 sub-title">
            Toutes mes compétences
          </div>
          <!--<div class="text-lg text-center mb-10">
            <span class="text-green font-avenir-bold">En vert </span> les technologies que j'utilise régulièrement, <span class="text-dark-blue font-avenir-bold">en bleu foncé </span> les technologies déjà utilisées en entreprise, <span class="text-light-blue font-avenir-bold">en bleu clair </span> les compétences annexes au développement
          </div>-->
          <div class="text-lg text-center">
            <div class="mb-3">
              <span class="text-green font-avenir-bold">En vert </span> les technologies que j'utilise régulièrement
            </div>
            <div class="mb-3">
              <span class="text-dark-blue font-avenir-bold">En bleu foncé </span> les technologies déjà utilisées en entreprise
            </div>
            <div>
              <span class="text-light-blue font-avenir-bold">En bleu clair </span> les compétences annexes au développement
            </div>

          </div>
        </div>

        <bubbles-component></bubbles-component>
      </div>
      <div class="homepage-part-4 mt-32 mb-56">
        <div class="text-center mb-12 md:mb-24 sub-title">
          J'ai travaillé avec eux
        </div>
       <beautiful-carousel></beautiful-carousel>
      </div>
    </div>

  </section>
</template>

<script>

import ArrowLeft from '@/static/icons/right.svg?inline'
import Animate from '~/plugins/animations/animate.js'
import {mapGetters} from 'vuex'
import BeautifulCarousel from "../components/homepage/BeautifulCarousel";
import BubblesComponent from "../components/homepage/BubblesComponent";
const MEDIA_MAX_IMAGE = 991;

export default {


  components: {
    BubblesComponent,
    BeautifulCarousel,
    ArrowLeft
  },


  methods: {
    checkWindowScroll() {
      if ( this.windowWidth <= MEDIA_MAX_IMAGE ) {
        this.$bus.$emit('displayTextUnderImage',true);
      } else {
        let $image = this.$refs.benImage;
        let imageHeight = $image.clientHeight;

        this.hideImageOnScroll = window.scrollY  > (imageHeight - 200);

        this.$bus.$emit('displayTextUnderImage',this.hideImageOnScroll);
      }
    },

    loadingComplete() {
      setTimeout( () => {
        this.runAnimation = true
      }, 400)
    },

    checkResizeScreen() {
      let width = window.innerWidth;
      this.windowWidth = width;
      this.checkWindowScroll()
    },
  },

  computed: {
    ...mapGetters('animations', ['loadingPage'])
  },

  data() {
    return {
      hideImageOnScroll: false,
      runAnimation: false,
      windowWidth: 0,
    }
  },


  mounted() {
    Animate.initClass(this.$el, window)
    window.addEventListener('scroll',this.checkWindowScroll)

    if ( !this.loadingPage ) {
      this.loadingComplete();
    } else {
      this.$bus.$on('loadingComplete',this.loadingComplete)
    }

    window.addEventListener('resize',this.checkResizeScreen)
    this.checkResizeScreen();
    this.checkWindowScroll()



  },

  destroyed() {
    window.removeEventListener('scroll',this.checkWindowScroll)
    window.removeEventListener('resize', this.checkResizeScreen);
    this.runAnimation = false;
  }
}
</script>

<style>
</style>

