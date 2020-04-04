<template>
  <div class="article-experience section">
    <div class="flex flex-wrap" :class="{'flex-row-reverse': reverse}">
      <div class="col-12 col-md-5 col-xl-6 z-20 transition ease-in-out duration-300 custom-padding" data-fct="opacityAndLeft">
        <div v-bckg-img="image" style="background-position:top;" class="bg-no-repeat bg-100 article-experience-image" data-fct="opacityAndLeft">
        </div>
      </div>
      <div class="col-12 col-md-7 col-xl-6 custom-padding" data-fct="opacityAndRight">
        <div class="flex justify-center h-full items-center ">
          <div class="col-12 col-sm-10">
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
</style>
