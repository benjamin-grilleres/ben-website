<template>
  <a :href="projectLink" target="_blank">
    <div class="latest-project bckg-img" v-bckg-img="image">
    <div class="latest-project__bckg-opacity latest-project__absolute-element"></div>
    <div class="latest-project__content latest-project__absolute-element">
      <div class="latest-project__title-not-hovered"> 
        {{ titleNotHovered }}
      </div>
      <div class="latest-project__description">
        {{ description }}
      </div>
    </div >
  </div>
  </a>
  
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true
    },
    imagePosition: {
      type: String,
      default: ''
    },
    titleNotHovered: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    projectLink: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="postcss">
  .latest-project {
    @apply cursor-pointer h-[400px];

    &__content {
      @apply px-8 text-justify flex items-center justify-center;
    }

    &__absolute-element {
      @apply absolute h-full w-full top-0 left-0;
    }

    &__bckg-opacity {
      @apply transition-all duration-300 ease-in-out;
      background: rgba(255,255, 255, 0.65);
    }

    &__title-not-hovered {
      @apply font-avenir-bold text-3xl tracking-wider transition-all duration-300 ease-in-out;
    }

    &__description {
      @apply text-lg hidden transition-all duration-300 ease-in-out;
    }

    &:hover & {

      &__bckg-opacity {
        @apply bg-black;
      }

      &__content {
        @apply text-white;
      }

      &__title-not-hovered {
        @apply hidden;
      }
      &__description {
        @apply block;
      }
    }
  }
</style>