<template>
  <div class="fixed w-full z-40 lg:z-10 py-6 navbar-animated" :class="[displayText ? 'bg-white shadow-navbar' : 'bg-white', classActive ? 'active' : '' ]">
    <div class="justify-end items-center navbar-desktop hidden md:flex">
      <div :class="[displayText ? 'col-4 col-xxl-3 opacity-100' : 'col-xl-8 col-5 opacity-0']"  class="transition ease-in-out duration-300 pr-0">
        <nuxt-link to="/">
          <span class="font-avenir-bold text-xl">Benjamin Grilleres </span> <span class="hidden xl:inline-block">-</span> <span class="block xl:inline-block">Développeur Web Fullstack</span>
        </nuxt-link>
      </div>
      <div  :class="[displayText ? 'col-8 col-xxl-9' : 'col-xl-6 col-7']" class="custom-col-animation">
        <div class="flex w-full items-center justify-between relative social" :class="{'active' : displayText }">
          <div class="flex lg:ml-4">
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
    <div class="navbar-mobile md:hidden px-6 w-full">
      <div class="logo-and-burger">
        <div>
          <nuxt-link to="/" @click.native="showMenuMobile = false">
            <span class="font-avenir-bold text-xl">Benjamin Grilleres </span> <span class="block">Développeur Web Fullstack</span>
          </nuxt-link>
        </div>

        <div @click="toggleMenuMobile" class="burger-menu">
          <div id="burger-menu-icon" :class="showMenuMobile ? 'open' : ''">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div class="items-mobile" :class="showMenuMobile ? 'open' : ''">
        <div
          v-for="(link,key) in links"
          :key="'navbar-mobile-' + key"
          class="item"
          >
          <nuxt-link :to="link.url">{{ link.text }}</nuxt-link>
        </div>
        <div class="item flex">
            <a href=""><img src="/icons/github.svg" height="16px" width="16px"/></a>
            <a href=""><img class="ml-4" src="/icons/linkedin-logo.svg" height="16px" width="16px"/></a>
            <a href=""><img class="ml-4" src="/icons/twitter.svg" height="16px" width="16px"/></a>
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
            url: '/portfolio'
          },
          {
            text: 'Contact',
            url: '/'
          },
        ],
        displayText: false,
        classActive: false,
        showMenuMobile: false

      }
    },

    watch: {
      '$route'() {
        this.showMenuMobile = false;
      }
    },

    methods: {
      displayTextUnderImage(displayText) {
        this.displayText = displayText
      },

      setClassActive() {
        this.classActive = true;
      },

      toggleMenuMobile() {
        this.showMenuMobile = !this.showMenuMobile;
      }

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

<style lang="scss" scoped>
  .navbar-animated {
    opacity: 0;
    left: 0;
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

  .burger-menu {
    background-color: white;
    height: 47px;
    //padding: 7px 4px 0 11px;
  }

  #burger-menu-icon {
    width: 40px;
    position: relative;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .5s ease-in-out;
    -moz-transition: .5s ease-in-out;
    -o-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    cursor: pointer;
    background: white;

    span {
      margin-top: 4px;
      display: block;
      position: absolute;
      height: 3px;
      width: 35px;
      background: #47444B;
      border-radius: 6px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
      -webkit-transition: .25s ease-in-out;
      -moz-transition: .25s ease-in-out;
      -o-transition: .25s ease-in-out;
      transition: .25s ease-in-out;

      &:nth-child(1) {
        top: 0px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }
      &:nth-child(2) {
        top: 12px;
        // width: 25px;
        // left: 4px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }
      &:nth-child(3) {
        top: 24px;
        -webkit-transform-origin: left center;
        -moz-transform-origin: left center;
        -o-transform-origin: left center;
        transform-origin: left center;
      }

    }

    &.open {
      span {
        &:nth-child(1) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
          left: 5px;
        }
        &:nth-child(2) {
          width: 0;
          opacity: 0;
        }
        &:nth-child(3) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
          top: 25px;
          left: 5px;
        }
      }
    }
  }

  .logo-and-burger {
    display: flex;
    justify-content: space-between;
    width: 100%;

  }

  .items-mobile {
    height: 0;
    opacity: 0;
    overflow: hidden;
    background: white;
    transition: all 0.3s ease-in-out;

    &.open {
      height: calc(100vh - 80px);
      opacity: 1;
      padding-top: 30px;
    }

    .item {
      padding-top: 10px;
      padding-bottom: 10px;

      &.categories {
        padding-left: 10px;
        padding-right: 10px;
      }
    }
  }


</style>
