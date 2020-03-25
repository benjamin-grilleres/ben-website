<template>
  <article class="item flex items-center">
    <div class="col-sm-6 bckg-img h-full" v-bckg-img="image" style="background-position:top;">
    </div>
    <div class="col-sm-6 item__content">
      <h2 class="item__content-title mb-10">{{ title }}</h2>
      <a class="item__content-back">back</a>

      <h3 class="item__content-subtitle">{{ subtitle }}</h3>
      <div class="item__content-text">
        <slot></slot>
      </div>
    </div>
    <!--<div class="item__img" v-bckg-img="image"></div>
    <div class="item__content">
      <a class="item__content-back">back</a>
      <h2 class="item__content-title">{{ title }}</h2>
      <h3 class="item__content-subtitle">{{ subtitle }}</h3>
      <div class="item__content-text">
        <slot></slot>
      </div>
    </div>-->
  </article>
</template>

<script>
    export default {
        name: "ArticleExperience",

        props: [
          'image',
          'title',
          'subtitle'
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

</style>
