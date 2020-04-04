<template>
    <main class="mes-experiences">
      <article-experience
        title="Bubbleflat"
        subtitle="Développeur fullstack - Avril 2016 à Juin 2017"
        image="/img/pages-experiences/bubbleflat.png"
      >
        <div>
          <div class="mb-6">
            Bubbleflat est un outil de mise en relation destiné aux étudiants et aux jeunes actifs à la recherche du colocataire idéal, en fonction de différents critères : modes de vie, langues, année d'étude.
          </div>
          <div class="mb-6">
            J'ai rejoint le projet en Avril 2016 au moment où l'équipe était en train de se former. Ainsi j'ai pu participer à la <span class="font-avenir-medium">conception technique </span> et à l'<span class="font-avenir-medium">intégration visuelle </span> du nouveau site. Les fonctionnalités techniques principales étaient un <span class="font-avenir-medium">chat entre utilisateurs </span>, un <span class="font-avenir-medium"> algorithme de match </span> afin de proposer les profils qui correspondent le plus au nôtre et <span class="font-avenir-medium">une carte permettant d'afficher les logements disponibles </span>.
          </div>
          <div class="mb-6">
            Nous avons choisi avec l'équipe de démarrer avec des technologies peu connues mais maintenues par la communauté : <span class="font-avenir-medium">Laravel </span>en back et <span class="font-avenir-medium">Vue.js</span> en front. Les serveurs étaient hébergés dans un premier temps sur <span class="font-avenir-medium"> OVH </span> puis sur <span class="font-avenir-medium"> AWS </span>. La gestion des serveurs et des sites se faisait via <span class="font-avenir-medium"> Laravel Forge </span>.
          </div>
          <div class="font-avenir-medium">
            <a href="https://bubbleflat.com" target="_blank" class="underline" style="color:#f07382">Voir le site</a>
          </div>
        </div>
      </article-experience>
      <article-experience
        title="Bubbleflat"
        subtitle="Développeur fullstack - Avril 2016 à Juin 2017"
        image="/img/pages-experiences/wecom4u.png"
        :reverse="true"
      >
        <div>
          <div class="mb-6">
            Bubbleflat est un outil de mise en relation destiné aux étudiants et aux jeunes actifs à la recherche du colocataire idéal, en fonction de différents critères : modes de vie, langues, année d'étude.
          </div>
          <div class="mb-6">
            J'ai rejoint le projet en Avril 2016 au moment où l'équipe était en train de se former. Ainsi j'ai pu participer à la <span class="font-avenir-medium">conception technique </span> et à l'<span class="font-avenir-medium">intégration visuelle </span> du nouveau site. Les fonctionnalités techniques principales étaient un <span class="font-avenir-medium">chat entre utilisateurs </span>, un <span class="font-avenir-medium"> algorithme de match </span> afin de proposer les profils qui correspondent le plus au nôtre et <span class="font-avenir-medium">une carte permettant d'afficher les logements disponibles </span>.
          </div>
          <div class="mb-6">
            Nous avons choisi avec l'équipe de démarrer avec des technologies peu connues mais maintenues par la communauté : <span class="font-avenir-medium">Laravel </span>en back et <span class="font-avenir-medium">Vue.js</span> en front. Les serveurs étaient hébergés dans un premier temps sur <span class="font-avenir-medium"> OVH </span> puis sur <span class="font-avenir-medium"> AWS </span>. La gestion des serveurs et des sites se faisait via <span class="font-avenir-medium"> Laravel Forge </span>.
          </div>
          <div class="font-avenir-medium">
            <a href="https://bubbleflat.com" target="_blank" class="underline" style="color:#f07382">Voir le site</a>
          </div>
        </div>
      </article-experience>
      <article-experience
        title="Bubbleflat"
        subtitle="Développeur fullstack - Avril 2016 à Juin 2017"
        image="/img/pages-experiences/bubbleflat3.png"
      >
        <div>
          <div class="mb-6">
            Bubbleflat est un outil de mise en relation destiné aux étudiants et aux jeunes actifs à la recherche du colocataire idéal, en fonction de différents critères : modes de vie, langues, année d'étude.
          </div>
          <div class="mb-6">
            J'ai rejoint le projet en Avril 2016 au moment où l'équipe était en train de se former. Ainsi j'ai pu participer à la <span class="font-avenir-medium">conception technique </span> et à l'<span class="font-avenir-medium">intégration visuelle </span> du nouveau site. Les fonctionnalités techniques principales étaient un <span class="font-avenir-medium">chat entre utilisateurs </span>, un <span class="font-avenir-medium"> algorithme de match </span> afin de proposer les profils qui correspondent le plus au nôtre et <span class="font-avenir-medium">une carte permettant d'afficher les logements disponibles </span>.
          </div>
          <div class="mb-6">
            Nous avons choisi avec l'équipe de démarrer avec des technologies peu connues mais maintenues par la communauté : <span class="font-avenir-medium">Laravel </span>en back et <span class="font-avenir-medium">Vue.js</span> en front. Les serveurs étaient hébergés dans un premier temps sur <span class="font-avenir-medium"> OVH </span> puis sur <span class="font-avenir-medium"> AWS </span>. La gestion des serveurs et des sites se faisait via <span class="font-avenir-medium"> Laravel Forge </span>.
          </div>
          <div class="font-avenir-medium">
            <a href="https://bubbleflat.com" target="_blank" class="underline" style="color:#f07382">Voir le site</a>
          </div>
        </div>
      </article-experience>


    </main>
</template>

<script>
    import ArticleExperience from "../components/mes-experiences/ArticleExperience";
    export default {
        name: "mes-experiences",
      components: {ArticleExperience},

      head: {
          script: [
            {src:'/js/fullpage.min.js'}
          ],
        link: [
          { rel: 'stylesheet', href: '/js/fullpage.min.css' }
        ]
      },
        methods: {

        },


        mounted() {
          this.$bus.$emit('displayTextUnderImage', true)

          setTimeout( () => {
            new fullpage('.mes-experiences');
          },1000)

        }
    }
</script>

<style scoped>

</style>
