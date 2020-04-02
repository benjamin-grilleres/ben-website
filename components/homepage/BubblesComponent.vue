<template>
    <div class="bubbles text-center">
      <div
        v-for="(bubble,key) in skills"
        :key="'bubble-' + key"
        :id="'bubble' + key"
        class="bubble"
        :style="`background-color: ${bubble.color}`"
      >{{ bubble.text }}</div>
    </div>
</template>

<script>
  import Skills from '~/assets/js/skills-bubbles-component'
    export default {
        name: "BubblesComponent",

        data() {
            return {
              skills: this.fullShuffle(Skills),
            }
        },

        methods: {
          buildPositionBubbles() {
            this.skills.forEach( (skill,key) => {
              let randomAnimation = this.generateRandom(0, 1, []);
              let animation = randomAnimation ? 'rot-counter-clockwise' : 'rot-clockwise'
              let $bubble = this.$el.querySelector(`#bubble${key}` );

              if ( $bubble ) {
               $bubble.classList.add(animation);
              }

            })

          },

          generateRandom(min, max, failOn) {
            failOn = Array.isArray(failOn) ? failOn : [failOn]
            var num = Math.floor(Math.random() * (max - min + 1)) + min;
            return failOn.includes(num) ? this.generateRandom(min, max, failOn) : num;
          },


          fullShuffle(array) {
            return array.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
          }
        },

        mounted() {
          this.buildPositionBubbles();

        }
    }
</script>

<style scoped lang="scss">
  .bubbles {
    .bubble {
      padding: 10px 23px;
      margin: 28px;
      border-radius: 20px;
      color: white;
      display: inline-block;
      position: relative;

      @media screen and (max-width: 768px) {
        margin: 18px;
      }


      &:nth-child(even) {
        top: -15px;
        //animation: rot-counter-clockwise 10s linear infinite;
      }
      &:nth-child(odd) {
        top: 15px;
        //animation: rot-clockwise 10s linear infinite;
      }

      &.rot-counter-clockwise {
        animation: rot-counter-clockwise 10s linear infinite;
      }
      &.rot-clockwise {
        animation: rot-clockwise 10s linear infinite;
      }
    }

    @keyframes rot-clockwise {
      0% {
        -webkit-transform: rotate(0deg) translate(-5px) rotate(0deg);
        transform: rotate(0deg) translate(-5px) rotate(0deg);
      }

      100% {
        -webkit-transform: rotate(1turn) translate(-5px) rotate(-1turn);
        transform: rotate(1turn) translate(-5px) rotate(-1turn);
      }
    }

    @keyframes rot-counter-clockwise {
      0% {
        -webkit-transform: rotate(0deg) translate(-5px) rotate(0deg);
        transform: rotate(0deg) translate(-5px) rotate(0deg);
      }

      100% {
        -webkit-transform: rotate(-1turn) translate(-5px) rotate(1turn);
        transform: rotate(-1turn) translate(-5px) rotate(1turn);
      }
    }
  }
</style>
