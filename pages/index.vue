<template>
  <section class="homepage" style="height:3000px">
    <div class="flex homepage-part-1">
      <div class="col-6 z-20 transition ease-in-out duration-300" ref="benImage" style="padding:0" :class="hideImageOnScroll ? 'opacity-0' : 'opacity-100'">
        <div data-fct="opacityAndLeft" data-delay="100" v-bckg-img="'/img/ben.JPG'" class="bckg-img h-screen ben-image">
        </div>
      </div>
      <div class="col-6" style="padding:0" data-fct="opacityAndRight" data-delay="300">
        <div class="row justify-center h-full items-center " style="margin-top:-45px">
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
          <div class="col-8">
            <div class="text-center mb-12">
            <span class="sub-title">
              3 ans d'expérience et diplômé d'un Master en Développement Logiciel
            </span>
            </div>
          </div>
          <div class="col-12 py-20">
            <div class="row">
              <div class="col-4 flex-1"
                   v-for="(skill,key) in skills"
                  :key="'skill' + key"
              >
                <div class="row justify-center h-full">
                  <div class="col-12 col-sm-12 flex-1 ">
                    <div class="bg-white py-10 px-3 h-full">
                      <div class="mb-4 text-center text-lg uppercase font-avenir-medium">{{ skill.name}}</div>
                      <div v-for="(infoSkill,key2) in skill.infos"
                           :key="'skillinfo' + key + '-' +key2"
                           class="text-center mb-2 text-xl"
                      >
                        {{ infoSkill }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-10 text-center text-xl">
            Décrire en quelques mots les compétences que l'on peut proposer c'est bien.
            <br>Aller voir mes projets et mes différentes expériences c'est encore mieux.
          </div>
          <div class="col-12 text-center mt-8">
            <button class="btn-black" v-scroll-to="'.homepage-part-2'">
              <ArrowLeft class="with-arrow"></ArrowLeft>
              Voir mes projets
            </button>
          </div>
        </div>

      </div>
    </div>

  </section>
</template>

<script>

import MiniNavbarHomepage from "../components/common/includes/MiniNavbarHomepage";
import ArrowLeft from '@/static/icons/right.svg?inline'
import Animate from '~/plugins/animations/animate.js'
export default {
  components: {
    MiniNavbarHomepage,
    ArrowLeft
  },

  layout: 'homepage',

  methods: {
    checkWindowScroll() {
      let $image = this.$refs.benImage;
      let imageHeight = $image.clientHeight;

      this.hideImageOnScroll = window.scrollY  > (imageHeight - 200);
      this.$bus.$emit('displayTextUnderImage',this.hideImageOnScroll);
    }
  },

  data() {
    return {
      hideImageOnScroll: false,
      skills: [
        {
          name: 'front',
          infos: [
            'Intégration de maquettes',
            'Architecture par composants',
            'Intégration de librairies',
            'Utilisation d\'API'
          ]
        },
        {
          name: 'back',
          infos: [
            'Conception UML',
            'Architecture MVC',
            'Intégration de modules',
          ]
        },
        {
          name: 'Général',
          infos: [
            'Management d\'équipe',
            'Pair Programming',
            'Revue de code',
            'Veille technologique'
          ]
        }
      ]
    }
  },

  mounted() {
    Animate.initClass(this.$el, window)
    document.documentElement.className="js mes-experiences";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");
    window.addEventListener('scroll',this.checkWindowScroll)

    setTimeout( () => {
      window.scrollTo(0,10);
      window.scrollTo(0,0);
    },600)

  },

  destroyed() {
    window.removeEventListener('scroll',this.checkWindowScroll)
  }
}
</script>

<style>
</style>

