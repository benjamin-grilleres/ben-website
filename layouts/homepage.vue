<template>
  <layout-loading>
    <mini-navbar-homepage></mini-navbar-homepage>
    <nuxt/>
    <div class="cursor">
      <div class="cursor__inner cursor__inner--circle"></div>
    </div>
  </layout-loading>
</template>

<style>
</style>

<script>
  import MiniNavbarHomepage from "../components/common/includes/MiniNavbarHomepage";
  import LayoutLoading from "../components/common/loading/LayoutLoading";
  export default {
    components: {LayoutLoading, MiniNavbarHomepage},


  }
</script>
