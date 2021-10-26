<template>
    <main class="mes-experiences">
      <article-experience
        :title="$t('jobs.wecom.title')"
        :subtitle="$t('jobs.wecom.subtitle')"
        image="/img/pages-experiences/wecom4u.png"
        class="mb-10"
      >
        <div>
          <div class="mb-6" v-html="$t('jobs.wecom.paragraph_1')">
          </div>
          <div class="mb-6"  v-html="$t('jobs.wecom.paragraph_2')">
          </div>
          <div class="mb-6"  v-html="$t('jobs.wecom.paragraph_3')">
          </div>
          <div class="mb-6 font-avenir-medium"  v-html="$t('jobs.wecom.paragraph_4')">
          </div>
          <div class="font-avenir-medium">
            <nuxt-link :to="localePath('projects') + '?f=Wecom4u'" class="btn-black">
              <ArrowLeft class="with-arrow"></ArrowLeft>
              {{ $t('jobs.wecom.call_to_action')}}
            </nuxt-link>
          </div>
        </div>
      </article-experience>
      <article-experience
        :title="$t('jobs.tmic.title')"
        :subtitle="$t('jobs.tmic.subtitle')"
        image="/img/pages-experiences/tmic.png"
        :reverse="true"
        class="mb-6"
      >
        <div>
          <div class="mb-6" v-html="$t('jobs.tmic.paragraph_1')">
          </div>
          <div class="mb-6" v-html="$t('jobs.tmic.paragraph_2')">
          </div>
          <div class="mb-6" v-html="$t('jobs.tmic.paragraph_3')">
          </div>
          <div class="font-avenir-medium">
            <nuxt-link :to="localePath('projects') + '?f=Tmic'" class="btn-purple">
              <ArrowLeft class="with-arrow"></ArrowLeft>
              {{ $t('jobs.tmic.call_to_action')}}
            </nuxt-link>
          </div>
        </div>
      </article-experience>
      <article-experience
        :title="$t('jobs.bubbleflat.title')"
        :subtitle="$t('jobs.bubbleflat.subtitle')"
        image="/img/pages-experiences/bubbleflat.jpg"
        class="mb-6"
      >
        <div>
          <div class="mb-6" v-html="$t('jobs.bubbleflat.paragraph_1')">
          </div>
          <div class="mb-6" v-html="$t('jobs.bubbleflat.paragraph_2')">
          </div>
          <div class="mb-6" v-html="$t('jobs.bubbleflat.paragraph_3')">
          </div>
          <div class="font-avenir-medium">
            <a href="https://bubbleflat.com" target="_blank" class="underline" style="color:#f07382">{{ $t('jobs.bubbleflat.call_to_action') }}</a>
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

      head () {
        return {
          title: 'Benjamin Grilleres - Mes expériences',
          link: [
            { rel: 'stylesheet', href: '/js/fullpage.min.css' }
          ]
        }
      },
        methods: {
          buildFullpage() {
            new fullpage('.mes-experiences', {
              navigation: true,
              scrollingSpeed: 450,
              licenseKey: 'tGxfRCR^e6',
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
            // if ( window.innerWidth > 767 ) {
            //   fullpage_api.destroy('all');
            //   this.buildFullpage();
            // } else {
            //   fullpage_api.destroy('all');
            //   this.setAnimatedElements()
            // }
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
        //fullpage_api.destroy('all');

        if ( window.innerWidth < 767 ) {
          this.$store.commit('animations/setFullPageLoaded', true)
          this.setAnimatedElements()
        } else {
          this.buildFullpage();
          if ( !this.$store.state.animations.fullPageLoaded ) {
            this.$store.commit('animations/setFullPageLoaded', true)
          }
        }

        window.addEventListener('resize',this.buildFullpageOnResize)

      },

      destroyed() {
        window.removeEventListener('resize',this.buildFullpageOnResize)
        fullpage_api.destroy('all');
      }
    }
</script>

<style scoped>

</style>
