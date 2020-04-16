<template>
    <div class="loading-page-component text-2xl md:text-4xl font-avenir-bold">
      <div class="flex items-end">
            <div class="content-loading text-center"></div>
      </div>

    </div>
</template>

<script>
  import Typed from 'typed.js';

  const sentences = [
    ['Vous savez, moi je ne crois pas qu’il y ait de bonne ou de mauvaise situation'],
    ["L'innovation, c'est une situation qu'on choisit parce qu'on a une passion brûlante pour quelque chose."],
    ["Dans le monde il y a 10 types de personnes, ceux qui comprennent le binaire, et les autres."],
    ["La gastronomie est l'art d'utiliser la nourriture pour créer le bonheur."],
    ["Un homme doit vivre de façon à pouvoir dire chaque soir, je n’ai pas perdu ma journée."],
  ]

  let randomSentence = Math.floor(Math.random() * Math.floor(sentences.length - 1))

    export default {
        name: "LoadingPageComponent",

        data() {
            return {
              options: {
                strings: sentences[randomSentence],
                typeSpeed: 25,
                showCursor: false,
                onComplete: this.sendEventAfterTypingComplete
              }
            }
        },

      methods: {

        sendEventAfterTypingComplete() {
          setTimeout( () => {
            this.$emit('typingComplete');
          }, 1000)

        }
      },

      mounted() {
        if ( process.env.NODE_ENV !== 'production' ) {
          this.sendEventAfterTypingComplete()
        } else {
          new Typed('.content-loading', this.options);
          document.body.classList.add('loading');
        }
      }
    }
</script>

<style scoped lang="scss">
  .content-loading {
    width: 768px;
    margin-left: auto;
    margin-right: auto;

    @media screen and (max-width: 768px) {
      width: 95%;
    }

    @media screen and (max-width: 576px) {
      width: 100%;
    }
  }
</style>
