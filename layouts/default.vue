<template>
  <layout-loading>
    <general-navbar-homepage></general-navbar-homepage>
    <nuxt class="margin-top-navbar"/>
    <div class="cursor">
      <div class="cursor__inner cursor__inner--circle"></div>
    </div>
  </layout-loading>
</template>

<style>
</style>

<script>
  import GeneralNavbarHomepage from "../components/common/includes/GeneralNavbarHomepage";
  import LayoutLoading from "../components/common/loading/LayoutLoading";
  export default {
    components: {LayoutLoading, GeneralNavbarHomepage},

  }
</script>
