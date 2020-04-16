<template>
  <layout-loading>
    <general-navbar-homepage></general-navbar-homepage>
    <nuxt :class="customClassNuxtComponent"/>
    <custom-cursor></custom-cursor>
    <footer-credits></footer-credits>
  </layout-loading>
</template>

<style>
</style>

<script>
  import GeneralNavbarHomepage from "../components/common/includes/GeneralNavbarHomepage";
  import LayoutLoading from "../components/common/loading/LayoutLoading";
  import CustomCursor from "../components/common/includes/CustomCursor";
  import FooterCredits from "../components/common/includes/FooterCredits";
  export default {
    components: {FooterCredits, CustomCursor, LayoutLoading, GeneralNavbarHomepage},

    data() {
      return {
        customClassNuxtComponent: ''
      }
    },

    watch: {
      '$route'() {
        setTimeout( () => {

          this.customClassNuxtComponent = !this.$route.name.includes('index') ? 'margin-top-navbar' : ''
        }, 600)
      }
    },

    mounted() {
      this.customClassNuxtComponent = !this.$route.name.includes('index') ? 'margin-top-navbar' : ''
    }


  }
</script>
