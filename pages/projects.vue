<template>
    <div class="portfolio">
      <h1 class="title-h1 text-center py-16">{{ $t('projects.title')}}</h1>
      <div>
        <div
          v-for="(project,key2) in projects"
          :key="'project-' + project.title"
          :style="project.color ? 'background:' + project.color : 'background-image: url(' + project.background +')'"
        >
          <div class="container py-10 sm:py-20">
            <div class="row justify-center items-center"
                 :class="{'flex-row-reverse':key2 % 2 === 0}">
              <div class="col-sm-9 col-md-6" data-fct="opacityAndLeft">
                <a v-if="project.external_url" :href="project.external_url" target="_blank">
                  <img :src="project.img" alt="" width="100%" class="image-url">
                </a>
                <img v-else :src="project.img" alt="" width="100%">
              </div>
              <div class="col-md-6" data-fct="opacityAndRight">
                <h2 class="title-h1-portfolio mb-12 text-white text-center md:text-left mt-6 md:mt-0">{{ project.title }}</h2>
                <p v-html="$t('projects.' + project.slug)" class="text-lg mb-10 text-white text-center md:text-left">
                </p>
                <div class="flex flex-wrap justify-center md:justify-start">
                  <div
                    v-for="(techno) in project.technos"
                    :key="'project-' + project.title + 'techno-' +techno"
                    class="mr-3 mb-3 bg-white py-2 px-4 text-black"
                  >#{{ techno }}</div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  import Animate from '~/plugins/animations/animate.js'
    export default {
        name: "portfolio",

        head () {
          return {
            title: 'Benjamin Grilleres - Mes projets réalisés',
            meta: [
              { hid: 'description', name: 'description', content: 'Liste des projets réalisés au cours de mes différentes expériences.' },
            ]
          }
        },

        async asyncData({$content}) {
          const projects = await $content().sortBy('date', 'desc').fetch()
          return {
            projects
          }
        },

        methods: {
          loadingComplete() {
            Animate.initClass(this.$el, window)
          }
        },

        mounted() {
          this.$bus.$emit('displayTextUnderImage', true)

          if ( this.$store.state.animations.loadingPage )
            this.$bus.$on('loadingComplete',this.loadingComplete)
          else
            this.loadingComplete();
        },

        destroyed() {
          this.$bus.$off('loadingComplete');
        }
    }
</script>

<style scoped>

</style>
