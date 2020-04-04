<template>
    <main class="mes-experiences">
      <article-experience
        title="Bubbleflat"
        subtitle="Développeur fullstack - Avril 2017 à Juin 2018"
        image="/img/pages-experiences/bubbleflat.jpg"
        class="mb-6"
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
        title="Tmic Ellipses"
        subtitle="Responsable Pôle Web - Juillet 2018 à Février 2019"
        image="/img/pages-experiences/tmic.png"
        :reverse="true"
        class="mb-6"
      >
        <div>
          <div class="mb-6">
            TMIC Ellipses est un éditeur de logiciel dédié aux librairies. Couplé à cette offre, TMIC propose à ses clients des sites web permettant de vendre les livres de la librairie.
          </div>
          <div class="mb-6">
            Je suis intervenu chez TMIC en tant que responsable du pôle Web. J'ai été le garant de l'intégralité des tâches liées au projet : rédaction du cahier des charges, discussion avec le client, développement, déploiement et maintenance du site.
          </div>
          <div class="mb-6">
            Il existait à mon arrivée une trentaine de sites, développés sous <span class="font-avenir-medium">Thélia 1 </span>, un framework e-commerce PHP dont la dernière version date de 2013. La difficulté a été de gérer les nombreux retours des sites existants, tout en essayant de développer les nouveaux sites, avec les technologies existantes. Après ces 8 mois passés chez TMIC, j'ai <span class="font-avenir-medium">développé un site réutilisable et personnalisable </span>, ce qui permet de gagner en temps et en efficacité, <span class="font-avenir-medium">résolu de nombreux bugs </span> et <span class="font-avenir-medium"> amélioré la relation avec les clients </span>.
          </div>
          <div class="font-avenir-medium">
            <a href="https://tmic-ellipses.com" target="_blank" class="btn-purple">
              <ArrowLeft class="with-arrow"></ArrowLeft>
              Voir les différents projets réalisés
            </a>
          </div>
        </div>
      </article-experience>
      <article-experience
        title="Wecom4u"
        subtitle="Lead développeur - Mars 2019 à Mars 2020"
        image="/img/pages-experiences/wecom4u.png"
        class="mb-10"
      >
        <div>
          <div class="mb-6">
            Wecom4u est une agence de conseil en création, stratégie et design de marque basée à Toulouse.
          </div>
          <div class="mb-6">
            Les besoins en sites web et applications étant de plus en demandés, l'agence a ouvert un pôle web afin de répondre à ces problématiques. J'ai donc intégré une équipe de 2 développeurs juniors et un product designer.
          </div>
          <div class="mb-6">
            Tout était à faire, j'ai proposé les technologies que je maîtrisais et qui permettaient de répondre aux besoins des clients : <span class="font-avenir-medium">Laravel</span> en back en tant qu'API, consommé par un front en <span class="font-avenir-medium">Vue.js</span>, plus précisément avec une surcouche à Vue.js, <span class="font-avenir-medium">Nuxt.js</span>, qui permet d'une part un cadre de développement mais aussi un focus sur la logique métier de l'application.
          </div>
          <div class="mb-6 font-avenir-medium">
            En quelques mots, je retiens de cette expérience que ma véritable passion outre le développement, c'est le partage des connaissances avec d'autres développeurs et le fait d'échanger avec eux pour apprendre toujours plus.
          </div>
          <div class="font-avenir-medium">
            <a href="https://bubbleflat.com" target="_blank" class="btn-black">
              <ArrowLeft class="with-arrow"></ArrowLeft>
              Voir les différents projets réalisés
            </a>
          </div>
        </div>
      </article-experience>


    </main>
</template>

<script>
    import ArticleExperience from "../components/mes-experiences/ArticleExperience";
    import ArrowLeft from '@/static/icons/right.svg?inline'
    import Animate from '~/plugins/animations/animate.js'
    export default {
        name: "mes-experiences",
      components: {ArticleExperience, ArrowLeft},

      head: {
          script: [
            {src:'/js/fullpage.min.js'}
          ],
        link: [
          { rel: 'stylesheet', href: '/js/fullpage.min.css' }
        ]
      },
        methods: {
          buildFullpage() {
            new fullpage('.mes-experiences', {
              navigation: true,
              scrollingSpeed: 450,
              responsiveSlides: true,
              onLeave: (origin, destination, direction) => {
                if ( !this.destination) {
                  this.destination = destination;
                  setTimeout( () => {
                    this.destination = null;
                  }, 800)
                } else {
                  return false;
                }

              },
              afterLoad: (origin, destination, direction) => {
                let $originElement = origin.item;
                let $destinationElement = destination.item;

                let $animatedElements = $originElement.querySelectorAll('.animation');
                $animatedElements.forEach( $animatedEl => {
                  $animatedEl.classList.remove('active');
                })

                let $animatedDestinationElements = $destinationElement.querySelectorAll('.animation');
                $animatedDestinationElements.forEach( $animatedEl => {
                  $animatedEl.classList.add('active');
                })
              },
            });
          },
          buildFullpageOnResize() {
            if ( window.innerWidth > 767 ) {
              this.buildFullpage();
            } else {
              fullpage_api.destroy('all');
              this.setAnimatedElements()
            }
          },

          setAnimatedElements() {
            let $animatedElements = this.$el.querySelectorAll('.animation')
            $animatedElements.forEach( $item => {
              $item.classList.add('active');
            })
          }
        },

      data() {
          return {
            loading: false,
            destination: null
          }
      },

      mounted() {
        Animate.initClass(this.$el, window)
        this.$bus.$emit('displayTextUnderImage', true)

        if ( window.innerWidth < 767 ) {
          this.$store.commit('animations/setFullPageLoaded', true)
          this.setAnimatedElements()
        } else {
          if ( !this.$store.state.animations.fullPageLoaded ) {
            setTimeout( this.buildFullpage,1000)
            this.$store.commit('animations/setFullPageLoaded', true)
          } else {
            this.buildFullpage();
          }
        }

        setTimeout( () => {
          window.addEventListener('resize',this.buildFullpageOnResize)
        }, 1000)


      },

      destroyed() {
        fullpage_api.destroy('all');
        window.removeEventListener('resize',this.buildFullpageOnResize)
      }
    }
</script>

<style scoped>

</style>
