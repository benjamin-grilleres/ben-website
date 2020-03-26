<template>
    <div>
      <loading-page-component class="transition ease-in-out duration-300" :class="!loadingPage ? 'opacity-0 z-0': 'opacity-100 z-auto'" @typingComplete="typingComplete"></loading-page-component>
      <div class="transition ease-in-out duration-500" :class="loadingPage ? 'opacity-0 z-0': 'opacity-100 z-auto'">
        <slot></slot>
      </div>

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
          ...mapMutations('animations',['setLoadingPage']),

        typingComplete() {
          this.setLoadingPage(false);
          this.$bus.$emit('loadingComplete');
        }
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
