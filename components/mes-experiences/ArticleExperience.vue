<template>
  <div class="article-experience section">
    <div class="flex flex-wrap" :class="{'flex-row-reverse': reverse}">
      <div class="col-12 col-md-5 col-xl-6 z-20 custom-padding">
        <div v-bckg-img="image" class="bckg-img article-experience-image opacityAndLeft animation bg-center">
        </div>
      </div>
      <div class="col-12 col-md-7 col-xl-6 custom-padding opacityAndRight animation">
        <div class="flex justify-center h-full items-center ">
          <div class="col-12 col-sm-10 mt-6 sm:mt-0">
            <div>
              <h1 class="title-h1">{{title}}</h1>
              <h2 class="title-h2 mb-8">{{ subtitle }}</h2>
              <div class="font-avenir-regular">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
    export default {
        name: "ArticleExperience",

        props: [
          'image',
          'title',
          'subtitle',
          'reverse'
        ],

        data() {
            return {}
        },

        methods: {},

        mounted() {

        }
    }
</script>

<style scoped>
  .article-experience {
    height: 100%;
    width: 100%;
  }
  .fp-tableCell {
    vertical-align: initial !important;
  }
</style>
