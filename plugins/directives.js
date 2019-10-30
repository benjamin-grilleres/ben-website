import Vue from 'vue'
import $ from 'jquery'
Vue.directive('bckg-img', {
    bind(el, binding, vnode) {
        el.style['background-image'] = `url(${binding.value})`
    }
})

Vue.directive('scroll-to', {
    bind(el, binding, vnode) {
        el.addEventListener('click', (e) => {
            let offsetTop = $(binding.value).offset().top;
            $('html, body').animate({scrollTop: offsetTop - 100});
        })
    }
})
