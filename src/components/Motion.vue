<script setup>
  import MotionJSON from '../assets/json/motion.json'
</script>

<template>
    <section id="motion-container" class="flex min-h-screen m-mobile-column">
      <div class="mix-blend-lighten w-[33%] fixed mobile-motion-video">
        <Vue3Lottie :animationData="MotionJSON" :height="`100vh`" :width="`fit-content`" />
      </div>
      <div class="w-[90%] pl-[38%] text-white flex flex-col justify-center mobile-motion-texte">
        <h1 class="wrap-h1">Motion design</h1>
        <p class="mb-[82px] pl-[42px]">Si j’ai appris les bases de l’animation en bachelor, c’est lors de mon poste de graphiste digitale chez Up to you que j’ai réellement pu me perfectionner dans cet art. Donner vie à des formes, du texte et des illustrations me fascine et je suis toujours avide de découvrir de nouvelles techniques d’animation.</p>
        <a class="gen-link" href="mailto:hello@michelereymond.ch">> showreel sur demande</a>
      </div>
    </section>
</template>

<style scoped>
  #motion-container {
    background: #7000FF;
    height: fit-content;
    width: 100vw;
    position: absolute;
  }

  #motion-container div {
    margin: 0;
  }

  @media screen and (max-width: 650px) {
    #motion-container {
      position: relative;
      padding-bottom: 42px;
    }

    #motion-container div {
    width: 100%;
    height: 100%;
  }

    .mobile-motion-texte {
      width: 100%;
      padding: 0 22px;
      padding-top: 22px;
    }

    .mobile-motion-video {
      width: 100%;
      position: relative;
      max-width: 100%;
      height: 100%;
      min-height: unset;
      margin-right: 0;
    }
  }
</style>