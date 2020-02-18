import Vue from 'vue'
import $ from 'jquery'

Vue.mixin({
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    scrollToError() {
      let firstError = $(this.$el).find('.error').first();
      if ( firstError.length ) {
        console.log(firstError)
        $('html, body').animate({ scrollTop: firstError.offset().top - 175}, 500);
      }

    },
  }
})

