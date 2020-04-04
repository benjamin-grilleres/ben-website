<template>
  <layout-loading>
    <general-navbar-homepage></general-navbar-homepage>
    <nuxt :class="customClassNuxtComponent"/>
    <custom-cursor></custom-cursor>
  </layout-loading>
</template>

<style>
</style>

<script>
  import GeneralNavbarHomepage from "../components/common/includes/GeneralNavbarHomepage";
  import LayoutLoading from "../components/common/loading/LayoutLoading";
  import CustomCursor from "../components/common/includes/CustomCursor";
  export default {
    components: {CustomCursor, LayoutLoading, GeneralNavbarHomepage},

    data() {
      return {
        customClassNuxtComponent: ''
      }
    },

    watch: {
      '$route'() {
        setTimeout( () => {
          this.customClassNuxtComponent = this.$route.path !== '/' ? 'margin-top-navbar' : ''
        }, 600)
      }
    },

    mounted() {
      this.customClassNuxtComponent = this.$route.path !== '/' ? 'margin-top-navbar' : ''
    }


  }
</script>
