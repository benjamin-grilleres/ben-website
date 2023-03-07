import Vue from "vue";
Vue.directive("bckg-img", {
  bind(el, binding, vnode) {
    el.style["background-image"] = `url(${binding.value})`;
  },
});

Vue.directive("scroll-to", {
  bind(el, binding, vnode) {
    el.addEventListener("click", (e) => {
      document.querySelector(binding.value).scrollIntoView({
        behavior: "smooth",
      });
    });
  },
});
