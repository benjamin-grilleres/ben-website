import Vue from "vue";

Vue.mixin({
  methods: {
    goBack() {
      this.$router.go(-1);
    },

    loadScript(src) {
      let script = document.createElement("script");
      script.src = src;
      document.body.append(script);
    },
  },
});
