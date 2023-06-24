<script setup>
import Me from './components/Me.vue'
import Illu from './components/Illu.vue'
import Prog from './components/Prog.vue'
import Motion from './components/Motion.vue'

import { ref } from 'vue'

const meShow = ref(false)
const meHover = ref(false)

const illuShow = ref(false)
const illuHover = ref(false)

const progShow = ref(false)
const progHover = ref(false)

const motionShow = ref(false)
const motionHover = ref(false)
</script>

<template>
  <main>
    <!-- Main text -->
    <div class="flex justify-center items-center min-h-screen absolute">
      <div class="flex flex-col justify-center items-center">
        <h1>Hello!</h1>
        <h1 class="h-[79px]">Moi c'est 
        <a class="home-link" id="michele" href="#" @click="meShow = !meShow" @mouseover="meHover = true" @mouseout="meHover = false">Michèle</a>.</h1>
        <h1>Je fais du 
          <a class="home-link" id="motion" href="#" @click="motionShow = !motionShow" @mouseover="motionHover = true" @mouseout="motionHover = false">motion</a>, de 
          <a id="illu" class="home-link" href="#" @click="illuShow = !illuShow" @mouseover="illuHover = true" @mouseout="illuHover = false">l'illu</a>
           et de la 
           <a id="prog" class="home-link" href="#" @click="progShow = !progShow" @mouseover="progHover = true" @mouseout="progHover = false">prog</a>.
        </h1>
      </div>
    </div>

    <!-- CV -->
    <Transition name="me-texture">
        <div id="texture-cv" v-if="meHover"></div>
    </Transition>
    <transition name="show-me">
      <div v-if="meShow">
        <div class="cross" @click="meShow = !meShow"></div>
        <Me/>
      </div>
    </transition>

    <!-- Illu -->
    <Transition name="illu-texture">
        <div id="texture-illu" v-if="illuHover"></div>
    </Transition>
    <transition name="show-illu">
      <div v-if="illuShow">
        <div class="cross black-cross" @click="illuShow = !illuShow"></div>
        <Illu/>
      </div>
    </transition>

    <!-- Prog -->
    <Transition name="prog-texture">
        <div id="texture-prog" v-if="progHover"></div>
    </Transition>
    <transition name="show-prog">
      <div v-if="progShow">
        <div class="cross black-cross" @click="progShow = !progShow"></div>
        <Prog/>
      </div>
    </transition>

    <!-- Motion -->
    <Transition name="motion-texture">
        <div id="texture-motion" v-if="motionHover"></div>
    </Transition>
    <transition name="show-motion">
      <div v-if="motionShow">
        <div class="cross" @click="motionShow = !motionShow"></div>
        <Motion/>
      </div>
    </transition>

  </main>
</template>

<style scoped>
  /* Animation for the CV */
  .show-me-enter-active,
  .show-me-leave-active {
      transform: translateY(0);
      transition: all .8s ease;
  }
  .show-me-enter-from,
  .show-me-leave-to {
      transform: translateY(100vh);
  }

  .me-texture-enter-active,
  .me-texture-leave-active {
    transition: opacity 0.5s ease;
  }
  .me-texture-enter-from,
  .me-texture-leave-to {
    opacity: 0;
  }


  /* Animation for illustration */
  .show-illu-enter-active,
  .show-illu-leave-active {
      transform: translateX(0);
      transition: all .8s ease;
  }
  .show-illu-enter-from,
  .show-illu-leave-to {
      transform: translateX(100vw);
  }

  .illu-texture-enter-active,
  .illu-texture-leave-active {
    transition: opacity 0.5s ease;
  }
  .illu-texture-enter-from,
  .illu-texture-leave-to {
    opacity: 0;
  }


    /* Animation for programmation */
    .show-prog-enter-active,
  .show-prog-leave-active {
      transform: translateY(0);
      transition: all .8s ease;
  }
  .show-prog-enter-from,
  .show-prog-leave-to {
      transform: translateY(-100vh);
  }

  .prog-texture-enter-active,
  .prog-texture-leave-active {
    transition: opacity 0.5s ease;
  }
  .prog-texture-enter-from,
  .prog-texture-leave-to {
    opacity: 0;
  }

    /* Animation for motion design */
    .show-motion-enter-active,
  .show-motion-leave-active {
      transform: translateX(0);
      transition: all .8s ease;
  }
  .show-motion-enter-from,
  .show-motion-leave-to {
      transform: translateX(-100vw);
  }

  .motion-texture-enter-active,
  .motion-texture-leave-active {
    transition: opacity 0.5s ease;
  }
  .motion-texture-enter-from,
  .motion-texture-leave-to {
    opacity: 0;
  }

  .home-link {
    text-decoration: none;
    color: black;
    transition: all .4s ease;
  }

  #michele {
    display: inline-block;
    width: 272px;
  }

  #michele:hover {
    font-family: Ahsing;
    text-transform: lowercase;
    letter-spacing: 3px;
  }

  #motion:hover {
    color: #7000FF;
    text-decoration: dotted underline;
    text-decoration-thickness: 8px;
    text-underline-offset: 8px;
  }

  #illu:hover {
    color: #FB98DF;
    text-decoration: wavy underline;
    text-decoration-thickness: 8px;
    text-underline-offset: 12px;
  }
  
  #prog:hover {
    background-color: #FF7A00;
  }

  #texture-cv {
    background: url(assets/img/texture-black.png);
    width: 100%;
    background-position: bottom;
    background-size: cover;
    mix-blend-mode: multiply;
    height: 50vh;
    position: absolute;
    bottom: 0;
    transition: all .5s ease;
    z-index: -1;
  }

  #texture-illu {
    background: url(assets/img/texture-pink.png);
    width: 100%;
    background-position: right;
    background-size: 30%;
    background-repeat: no-repeat;
    mix-blend-mode: multiply;
    height: 100%;
    position: absolute;
    bottom: 0;
    transition: all .5s ease;
    z-index: -1;
  }

  #texture-prog {
    background: url(assets/img/texture-orange.png);
    width: 100%;
    background-position: top;
    background-size: contain;
    background-repeat: no-repeat;
    mix-blend-mode: multiply;
    height: 50vh;
    position: absolute;
    top: 0;
    transition: all .5s ease;
    z-index: -1;
  }

  #texture-motion {
    background: url(assets/img/texture-purple.png);
    width: 100%;
    background-position: left;
    background-size: 30%;
    background-repeat: no-repeat;
    mix-blend-mode: multiply;
    height: 100%;
    position: absolute;
    bottom: 0;
    transition: all .5s ease;
    z-index: -1;
  }
</style>

<!-- gradient grainy
https://css-tricks.com/grainy-gradients/ 
https://www.fxhash.xyz/article/beginner%27s-guide-to-learning-p5.js-for-generative-art 
https://bbbootstrap.com/snippets/bubble-background-animation-11329969 -->
