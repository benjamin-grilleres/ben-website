<template>
    <div class="portfolio">
      <div class="flex justify-center items-center fixed-filters">
        Trier les projets par entreprise :
       <!-- <button class="custom-btn-filter mr-3">Bubbleflat</button>
        <button class="custom-btn-filter mr-3">TMIC</button>
        <button class="custom-btn-filter mr-3">Wecom4u</button>-->
        <div
          v-for="(filter,key) in filters"
          :key="'filter-' +key"
        >
          <input type="radio" class="hidden" :id="filter" :value="filter" v-model="filterActive"/>
          <label @click="filterProject(filter)" :for="filter" class="custom-btn-filter mx-3 cursor-pointer" :class="{'active': filterActive === filter}">{{ filter }}</label>
        </div>
      </div>
      <div class="pt-32">
        <div class="container">
          <div
            v-for="(project,key2) in projects"
            :key="'project-' + project.title"
            class="row justify-center mb-20"
            :class="{'flex-row-reverse':key2 % 2 === 0}"
          >
            <div class="col-sm-6" data-fct="opacityAndLeft">
              <img :src="project.img" alt="" width="100%">
            </div>
            <div class="col-sm-6" data-fct="opacityAndRight">
              <p class="title-h1-portfolio mb-12">{{ project.title }}</p>
              <p v-html="project.content" class="text-lg mb-10">
              </p>
              <div class="flex flex-wrap">
                <div
                  v-for="(techno) in project.technos"
                  :key="'project-' + project.title + 'techno-' +techno"
                  class="mr-3 mb-3 bg-dark-blue py-2 px-4 text-white "
                >#{{ techno }}</div>
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
