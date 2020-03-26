import Vue from 'vue'

function loadScript(src) {
  let script = document.createElement('script');
  script.src = src;
  //script.async = false;
  document.body.append(script);
}

export default async ({ app, store })  => {

  if (!app.mixins) {
    app.mixins = []
  }

  app.mixins.push({
    mounted() {
      loadScript('/js/bezier-easing.min.js')
      loadScript('/js/TweenMax.min.js')
      loadScript('/js/demo.js')
    },
  })
}
