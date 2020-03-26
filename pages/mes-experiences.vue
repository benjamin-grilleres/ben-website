<template>

    <main  >
      <div class="content content--second">
        <article-experience
          title="Bubbleflat"
          subtitle="Fashion artisans at work"
          image="/img/pages-experiences/bubbleflat.png"
        >
          Contenu
        </article-experience>
        <article-experience
          title="TMIC Ellipses"
          subtitle="Sous titre"
          image="/img/13.png"
        >
          Contenu
        </article-experience>
        <article-experience
          title="Wecom4U"
          subtitle="Sous titre"
          image="/img/13.png"
        >
          Contenu
        </article-experience>
      </div>
    </main>


</template>

<script>
    import ArticleExperience from "../components/mes-experiences/ArticleExperience";
    export default {
        name: "mes-experiences",
      components: {ArticleExperience},


        methods: {

        },

        created() {
          this.$bus.$emit('displayTextUnderImage', true)
        },


        mounted() {
        }
    }
</script>

<style scoped>

</style>
