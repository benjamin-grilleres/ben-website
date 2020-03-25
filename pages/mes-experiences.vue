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
      <div class="content content--first">
        <div class="content__move">
          <div class="columns">
            <!--<div class="column">
              <div class="column__img" style="background-image:url(/img/2.png)"></div>
              <div class="column__img" style="background-image:url(/img/6.png)"></div>
              <div class="column__img" style="background-image:url(/img/13.png)"></div>
              <div class="column__img" style="background-image:url(/img/14.png)"></div>
              <div class="column__img" style="background-image:url(/img/5.png)"></div>
              <div class="column__img" style="background-image:url(/img/6.png)"></div>
              <div class="column__img" style="background-image:url(/img/7.png)"></div>
              <div class="column__img" style="background-image:url(/img/8.png)"></div>
              <div class="column__img" style="background-image:url(/img/9.png)"></div>
            </div>
            <div class="column column&#45;&#45;bottom">
              <div class="column__img" style="background-image:url(/img/3.png)"></div>
              <div class="column__img" style="background-image:url(/img/11.png)"></div>
              <div class="column__img" style="background-image:url(/img/1.png)"></div>
              <div class="column__img" style="background-image:url(/img/15.png)"></div>
              <div class="column__img" style="background-image:url(/img/14.png)"></div>
              <div class="column__img" style="background-image:url(/img/13.png)"></div>
              <div class="column__img" style="background-image:url(/img/12.png)"></div>
              <div class="column__img" style="background-image:url(/img/3.png)"></div>
              <div class="column__img" style="background-image:url(/img/15.png)"></div>
            </div>
            <div class="column">
              <div class="column__img" style="background-image:url(/img/7.png)"></div>
              <div class="column__img" style="background-image:url(/img/4.png)"></div>
              <div class="column__img" style="background-image:url(/img/9.png)"></div>
              <div class="column__img" style="background-image:url(/img/11.png)"></div>
              <div class="column__img" style="background-image:url(/img/5.png)"></div>
              <div class="column__img" style="background-image:url(/img/3.png)"></div>
              <div class="column__img" style="background-image:url(/img/2.png)"></div>
              <div class="column__img" style="background-image:url(/img/1.png)"></div>
              <div class="column__img" style="background-image:url(/img/5.png)"></div>
              <div class="column__img" style="background-image:url(/img/14.png)"></div>
            </div>
            <div class="column column&#45;&#45;bottom">
              <div class="column__img" style="background-image:url(/img/1.png)"></div>
              <div class="column__img" style="background-image:url(/img/2.png)"></div>
              <div class="column__img" style="background-image:url(/img/3.png)"></div>
              <div class="column__img" style="background-image:url(/img/7.png)"></div>
              <div class="column__img" style="background-image:url(/img/4.png)"></div>
              <div class="column__img" style="background-image:url(/img/6.png)"></div>
              <div class="column__img" style="background-image:url(/img/5.png)"></div>
              <div class="column__img" style="background-image:url(/img/8.png)"></div>
              <div class="column__img" style="background-image:url(/img/10.png)"></div>
            </div>-->
          </div><!--/columns-->
          <nav class="menu">
            <a class="menu__item">Bubbleflat</a>
            <a class="menu__item">TMIC Ellipses</a>
            <a class="menu__item">Wecom4U</a>
          </nav>
        </div><!--/content--move-->
      </div><!--/content-->
    </main>


</template>

<script>
    import ArticleExperience from "../components/mes-experiences/ArticleExperience";
    export default {
        name: "mes-experiences",
      components: {ArticleExperience},


        head: {
          htmlAttrs: {
            class: 'no-js mes-experiences'
          },
          bodyAttrs: {
            class: 'loading'
          },

        },

        data() {
            return {
              loaded: false
            }
        },

        methods: {

        },

        mounted() {
            //this.loadScript('/js/demo.js')
            document.documentElement.className="js mes-experiences";var supportsCssVars=function(){var e,t=document.createElement("style");return t.innerHTML="root: { --tmp-var: bold; }",document.head.appendChild(t),e=!!(window.CSS&&window.CSS.supports&&window.CSS.supports("font-weight","var(--tmp-var)")),t.parentNode.removeChild(t),e};supportsCssVars()||alert("Please view this demo in a modern browser that supports CSS Variables.");
            this.$store.commit('animations/setScriptsLoaded', true)
            this.loaded = true;

        }
    }
</script>

<style scoped>

</style>
