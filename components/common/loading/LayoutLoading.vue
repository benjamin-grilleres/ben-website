<template>
    <div>
      <transition name="fade">
        <loading-page-component v-if="loadingPage" @typingComplete="setLoadingPage(false)"></loading-page-component>
        <div v-else>
          <slot></slot>
        </div>
      </transition>
    </div>
</template>

<script>
    import LoadingPageComponent from "./LoadingPageComponent";
    import {mapGetters,mapMutations} from 'vuex'
    export default {
        name: "LayoutLoading",
      components: {LoadingPageComponent},

      computed: {
          ...mapGetters('animations',['loadingPage'])
      },

      methods: {
          ...mapMutations('animations',['setLoadingPage'])
      },

      mounted() {

      }
    }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
