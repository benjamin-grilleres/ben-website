<template>
    <div class="portfolio">
     <!-- <div class="flex justify-center items-center fixed-filters">
        Trier les projets par entreprise :
        <div
          v-for="(filter,key) in filters"
          :key="'filter-' +key"
        >
          <input type="radio" class="hidden" :id="filter" :value="filter" v-model="filterActive"/>
          <label @click="filterProject(filter)" :for="filter" class="custom-btn-filter mx-3 cursor-pointer" :class="{'active': filterActive === filter}">{{ filter }}</label>
        </div>
      </div>-->
      <h1 class="title-h1 text-center py-16">Mes projets</h1>
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
                <p class="title-h1-portfolio mb-12 text-white text-center md:text-left mt-6 md:mt-0">{{ project.title }}</p>
                <p v-html="project.content" class="text-lg mb-10 text-white text-center md:text-left">
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
  import Projects from '~/helpers/projects.js'
  import Animate from '~/plugins/animations/animate.js'
    export default {
        name: "portfolio",

        asyncData({route}) {
          let filterActive = 'Tous'
          if ( route.query.f ) {
            filterActive = route.query.f
          }
          let projects = Projects;

          if ( filterActive !== 'Tous' )
            projects = projects.filter( p => p.company === filterActive)

          return {
            projects: projects,
            allProjects: [...Projects],
            filterActive: filterActive
          }
        },

        data() {
            return {
              filters: [
                'Tous',
                'Bubbleflat',
                'Tmic',
                'Wecom4u'
              ],
            }
        },

        methods: {
          filterProject(filter) {
            let projects = [...this.allProjects];

            let queryParams = {};
            if ( filter !== 'Tous' ) {
              queryParams = {f: filter};
              projects = this.allProjects.filter( p => p.company === filter)
            }
            this.projects = projects;
            this.$router.push({query: queryParams})

            setTimeout( () => {
              let $animatedElements = this.$el.querySelectorAll('[data-fct]')

              $animatedElements.forEach( $animatedEl => {
                  $animatedEl.classList.add('active');
              })
              window.scrollTo(0,0);

            },300)
          },
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
