<script setup>
  import MotionJSON from '../assets/json/motion.json'
</script>

<template>
    <section id="motion-container" class="flex min-h-screen">
      <div class="mix-blend-lighten mr-[42px] min-h-screen max-w-[42%] h-screen truncate">
        <Vue3Lottie :animationData="MotionJSON" :height="`100%`" />
      </div>
      <div class="w-[50%] text-white flex flex-col justify-center">
        <h1 class="wrap-h1">Motion design</h1>
        <p class="mb-[82px] pl-[42px]">Si j’ai appris les bases de l’animation en bachelor, c’est lors de mon poste de graphiste digitale chez Up to you que j’ai réellement pu me perfectionner dans cet art. Donner vie à des formes, du texte et des illustrations me fascine et je suis toujours avide de découvrir de nouvelles techniques d’animation.</p>
        <a class="gen-link" href="mailto:hello@michelereymond.ch">showreel sur demande</a>
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
</style>