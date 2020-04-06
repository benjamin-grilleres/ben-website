<template>
    <div class="portfolio pt-10">
      <div class="flex justify-center items-center">
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
    </div>
</template>

<script>
  import Projects from '~/helpers/projects.js'
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
            this.projects = this.allProjects.filter( p => p.company === filter)
            let queryParams = {};
            if ( filter !== 'Tous' ) {
              queryParams = {f: filter};
            }
            this.$router.push({query: queryParams})
          }
        },

        mounted() {
          this.$bus.$emit('displayTextUnderImage', true)
        }
    }
</script>

<style scoped>

</style>
