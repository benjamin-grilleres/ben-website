<template>
  <layout-loading>
    <mini-navbar-homepage></mini-navbar-homepage>
    <nuxt/>
    <custom-cursor></custom-cursor>
  </layout-loading>
</template>

<style>
</style>

<script>
  import MiniNavbarHomepage from "../components/common/includes/MiniNavbarHomepage";
  import LayoutLoading from "../components/common/loading/LayoutLoading";
  import CustomCursor from "../components/common/includes/CustomCursor";
  export default {
    components: {CustomCursor, LayoutLoading, MiniNavbarHomepage},


  }
</script>
