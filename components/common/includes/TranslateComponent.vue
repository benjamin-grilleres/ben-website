<template>
    <div>
      <!--<nuxt-link
        v-for="locale in availableLocales"
        :key="locale.code"
        :to="switchLocalePath(locale.code)"
      >

        <img
          :src="locale.icon"
          width="40px"
        >
      </nuxt-link>-->
      <a
        v-for="locale in availableLocales"
        :key="locale.code"
        :href="switchLocalePath(locale.code)"
      >

        <img
          :src="locale.icon"
          width="40px"
        >
      </a>
    </div>
</template>

<script>
    export default {
        name: "TranslateComponent",

        computed: {
          availableLocales () {
            return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)
          }
        },

        data() {
            return {
              langs: {
                FR_FR: '/icons/icon-france.png',
                EN_EN: '/icons/icon-gb.png'
              }
            }
        },

        methods: {
          setLocale(code) {
            this.$i18n.setLocale(code);
          }
        },

        mounted() {

        }
    }
</script>

<style scoped>

</style>
