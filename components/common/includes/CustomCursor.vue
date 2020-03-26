<template>
  <div class="cursor">
    <div class="cursor__inner cursor__inner--circle"></div>
  </div>
</template>

<script>
    import Cursor from '~/helpers/custom-cursor.js'
    export default {
        name: "CustomCursor",

        data() {
            return {
              winsize: {},
              mousepos: {},
              cursor: null
            }
        },

        methods: {

          calcWinsize() {
            this.winsize = {width: window.innerWidth, height: window.innerHeight};
          },

          refreshMousePos(ev) {
            this.cursor.getMousePos(ev)
          }
        },

        mounted() {

          this.cursor = new Cursor(this.$el);

          window.addEventListener('resize', this.calcWinsize);
          window.addEventListener('mousemove', ev => this.refreshMousePos(ev));

        },

      destroyed() {
          window.removeEventListener('resize', this.calcWinsize);
          window.removeEventListener('mousemove', this.refreshMousePos)
      }
    }
</script>

<style scoped>
  @media (any-pointer: fine) {
    .cursor {
      display: block;
    }
    .cursor__inner {
      z-index: 9999;
      pointer-events: none;
      position: absolute;
      top: 0;
      left: 0;
      mix-blend-mode: difference;
      border-radius: 50%;
    }
    .cursor__inner--circle {
      width: 25px;
      height: 25px;
      border: 1px solid #fff;
    }
  }
</style>
