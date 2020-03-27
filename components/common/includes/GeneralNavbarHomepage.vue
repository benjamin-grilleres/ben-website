<template>
  <div class="fixed w-full z-40 lg:z-10 py-6 navbar-animated" :class="[displayText ? 'bg-white shadow-navbar' : 'bg-white', classActive ? 'active' : '' ]">
    <div class="flex justify-end ">
      <div :class="[displayText ? 'col-4 col-xxl-3 opacity-100' : 'col-xl-8 col-5 opacity-0']"  class="transition ease-in-out duration-300 pr-0">
        <nuxt-link to="/">
          <span class="font-avenir-bold text-xl">Benjamin Grilleres </span> <span class="hidden xl:inline-block">-</span> <span class="block xl:inline-block">Développeur Web Fullstack</span>
        </nuxt-link>
      </div>
      <div  :class="[displayText ? 'col-8 col-xxl-9' : 'col-xl-6 col-7']" class="custom-col-animation">
        <div class="flex w-full items-center justify-between relative social" :class="{'active' : displayText }">
          <div class="flex ml-4">
            <a href=""><img src="/icons/github.svg" height="16px" width="16px"/></a>
            <a href=""><img class="ml-4" src="/icons/linkedin-logo.svg" height="16px" width="16px"/></a>
            <a href=""><img class="ml-4" src="/icons/twitter.svg" height="16px" width="16px"/></a>
          </div>
          <div class="flex">
            <nuxt-link
              :to="link.url"
              v-for="(link,key) in links"
              :key="'navbar-' + key"
              class="font-avenir-medium animated-link mx-6"
            >{{ link.text }}</nuxt-link>
          </div>
          <!--<div>
            <nuxt-link to="/" class="font-avenir-bold">Traduire en anglais</nuxt-link>
          </div>-->


        </div>
      </div>
    </div>
  </div>


</template>

<script>

  export default {
    name: "GeneralNavbarHomepage",

    data() {
      return {
        links: [
          {
            text: 'Mes expériences',
            url: '/mes-experiences'
          },
          {
            text: 'Portfolio',
            url: '/'
          },
          {
            text: 'Contact',
            url: '/'
          },
        ],
        displayText: false,
        classActive: false,

      }
    },

    methods: {
      displayTextUnderImage(displayText) {
        this.displayText = displayText
      },

      setClassActive() {
        this.classActive = true;
      },

    },

    mounted() {

      this.$bus.$on('displayTextUnderImage', this.displayTextUnderImage)

      this.$bus.$on('loadingComplete',this.setClassActive)

    },

    destroyed() {

      this.$bus.$off('displayTextUnderImage', this.displayTextUnderImage)
      this.$bus.$off('loadingComplete',this.setClassActive)
    }
  }
</script>

<style>
  .navbar-animated {
    opacity: 0;
    top: -45px;
    transition: 0.3s ease-in-out;
  }

  .navbar-animated.active {
    opacity: 1;
    top: 0;
  }

  .navbar-animated.shadow-navbar {
    box-shadow: 4px 0px 5px -1px;
  }

  .custom-col-animation {
    transition: all 0.3s ease-in-out;
  }
</style>
