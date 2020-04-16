<template>
  <section class="homepage" >
    <div class="flex flex-wrap homepage-part-1">
      <div class="col-12 col-md-5 col-xl-6 z-20 transition ease-in-out duration-300 custom-padding" ref="benImage"  :class="hideImageOnScroll ? 'opacity-0' : 'opacity-100'">
        <div v-bckg-img="'/img/ben_3_photopea.jpg'" class="bckg-img ben-image" :class="{'active':runAnimation}">
        </div>
      </div>
      <div class="col-12 col-md-7 col-xl-6 opacityAndRight custom-padding mt-12 md:mt-0 text-center md:text-left" style="transition-delay:250ms" :class="{'active':runAnimation}">
        <div class="flex justify-center h-full items-center ">
          <div class="col-12 col-sm-10">
            <div>
              <h1 class="title-h1 mb-6">{{ $t('index.title')}}</h1>
              <h2 class="title-h2 mb-8" v-html="$t('index.subtitle')"></h2>
              <div>
                <button class="btn-black" v-scroll-to="'.homepage-part-5'">
                  <ArrowLeft class="with-arrow"></ArrowLeft>
                  {{ $t('index.title_call_to_action')}}
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
          <div class="col-md-11 col-lg-8" data-fct="opacity">
            <div class="text-center mb-12 md:mb-24">
            <span class="sub-title">
              {{ $t('index.master_degree') }}
            </span>
            </div>
          </div>
          <div class=" col-12 col-lg-10 mb-32">
            <div class="row justify-center md:justify-between items-center mb-16 md:mb-32">
              <div class="col-8 col-md-3" data-fct="opacityAndLeft">
                <img src="/img/tech/logos.png" width="100%">
              </div>
              <div class="col-md-8 text-center md:text-left mt-10 md:mt-0" data-fct="opacityAndRight" data-delay="200">
                <h3 class="title-h3 mb-5">
                  {{ $t('index.part_2.title_1') }}
                </h3>
                <p class="text-lg">{{ $t('index.part_2.text_1') }}</p>
              </div>
            </div>

            <div class="row justify-center md:justify-between items-center mb-16 md:mb-32 flex-col-reverse md:flex-row">
              <div class="col-md-8 text-center md:text-left mt-10 md:mt-0" data-fct="opacityAndLeft" data-delay="200">
                <h3 class="title-h3 mb-5">
                  {{ $t('index.part_2.title_2') }}
                </h3>
                <p class="text-lg">
                  {{ $t('index.part_2.text_2') }}
                </p>
              </div>
              <div class="col-8 col-md-3" data-fct="opacityAndRight">
                <img src="/img/tech/logos2.png" width="100%">
              </div>
            </div>
            <div class="row justify-center">
              <div class="col-12">
                <h3 class="title-h3 mb-5 text-center mb-6">{{ $t('index.part_2.title_3') }}</h3>
                <p class="text-lg text-center">{{ $t('index.part_2.text_3') }} </p>
              </div>
             </div>
            <div class="row">
              <div class="col-12 text-center mt-8">
                <nuxt-link class="btn-black" :to="localePath('projects')">
                  <ArrowLeft class="with-arrow"></ArrowLeft>
                  {{ $t('index.part_2.call_to_action') }}
                </nuxt-link>
              </div>
            </div>

          </div>
        </div>

      </div>
      <div class="homepage-part-3  mb-30">
        <div class="mb-12" data-fct="opacity">
          <div class="text-center mb-6 sub-title">
            {{ $t('index.part_3.title')}}
          </div>
          <div class="text-lg text-center">
            <div class="mb-3" v-html="$t('index.part_3.text_1')">
            </div>
            <div class="mb-3" v-html="$t('index.part_3.text_2')">
            </div>
            <div v-html="$t('index.part_3.text_3')">
            </div>
          </div>
        </div>
        <bubbles-component></bubbles-component>
      </div>
      <div class="homepage-part-4 my-32">
        <div class="text-center mb-12 md:mb-24 sub-title">
          J'ai travaillé avec eux
        </div>
       <beautiful-carousel></beautiful-carousel>
      </div>
      <div class="homepage-part-5 mb-32">

        <div data-fct="opacityAndBottom">
          <div class="text-center mb-6 sub-title" >
            {{ $t('index.part_5.title') }}
          </div>
          <div class="row justify-center mb-12">
            <div class="col-12 col-sm-9">
              <div class="text-lg text-center">
                {{ $t('index.part_5.text')}}
              </div>
            </div>
          </div>
        </div>

        <div class="row justify-center">
          <div class="col-12 col-sm-4 text-center" data-fct="opacityAndLeft" data-delay="300">
            <img src="/img/beautiful-linkedin.svg" width="60px" height="60px" class="inline-block mr-4"/>
            <a href="https://linkedin.com/in/benjamin-grilleres-283530124" target="_blank" class="animated-link text-xl font-avenir-medium inline-block">{{ $t('index.part_5.text_linkedin')}}</a>
          </div>
          <div class="col-12 col-sm-4 text-center" data-fct="opacityAndRight" data-delay="300">
            <img src="/img/beautiful-mail.png" width="60px" height="60px" class="inline-block mr-4"/>
            <a href="mailto:contact@benjamingrilleres.com" class="animated-link text-xl font-avenir-medium inline-block">{{ $t('index.part_5.text_mail')}}</a>
          </div>
        </div>

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

  head () {
    return {
      title: 'Benjamin Grilleres - Développeur Freelance Laravel, Vue.js, Nuxt.js',
    }
  },

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

