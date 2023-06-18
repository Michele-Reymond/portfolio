<script setup>
  import ProgJSON from '../assets/json/prog.json'
</script>

<template>
    <section id="prog-container" class="flex items-center">
      <div class="mix-blend-multiply h-full mr-[42px]">
        <Vue3Lottie :animationData="ProgJSON" :height="`100%`" />
      </div>
      <div class="w-[50%]">
        <h1 class="wrap-h1">Programmation</h1>
        <p class="mb-[82px] pl-[42px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div class="flex h-[360px] mb-6">
          <div class="mb-[82px] w-full mr-3">
            <div id="website-links" class="flex flex-col mb-6">
              <h2>42</h2>
              <a class="border-top-line" href="https://github.com/Michele-Reymond/minirt">Raytracing</a>
              <a class="border-top-line" href="https://github.com/Michele-Reymond/42-04-minishell">Recoder un shell</a>
              <a class="border-top-line"  href="https://github.com/Michele-Reymond/42-04-philosopher">Multithreading avec mutex</a>
              <a class="border-top-line"  href="https://github.com/Michele-Reymond/42-03-pipex">Recoder un pipe</a>
              <a class="border-top-line"  href="https://github.com/Michele-Reymond/42-03-pushswap">Algo de tri</a>
              <a class="border-top-line"  href="https://github.com/Michele-Reymond/42-03-Solong">Jeu</a>
            </div>
            <div id="website-links" class="flex flex-col">
              <h2>webdesign</h2>
              <a class="border-top-line" href="https://up-to-you.ch/">* Up to you</a>
              <a class="border-top-line" href="https://www.rfsa.ch/">* RFSA</a>
              <a class="border-top-line"  href="https://tobee-nutrition.ch/">To bee nutrition</a>
            </div>
          </div>
          <div class="mb-[82px] w-full mr-3">
            <div id="website-links" class="flex flex-col  mb-6">
              <h2>développement web</h2>
              <a class="border-top-line" href="https://www.texorio.ch/">* Texorio</a>
              <a class="border-top-line" href="https://www.sophiewietlisbach.ch/">Sophie Wietlisbach</a>
              <a class="border-top-line"  href="https://www.cactus-sports.ch/">Cactus sports</a>
              <a class="border-top-line" href="https://www.laurebarras.com/">Laure Barras</a>
              <a class="border-top-line" href="https://bs-architectes.ch/">* Bs architectes</a>
            </div>
            <div id="website-links" class="flex flex-col">
              <h2>Game jams</h2>
              <a class="border-top-line" href="https://aliend.itch.io/scream-or-die">UPsi Jam 3.0</a>
              <a class="border-top-line" href="https://davifah.itch.io/guiding-light">Swiss Game Academy 2022</a>
            </div>
          </div>
        </div>
        <p class="text-sm">* réalisé en tant qu'employée chez Up to you</p>
      </div>
    </section>
</template>

<style scoped>
  #prog-container {
    background: #FF7A00;
    height: 100vh;
    width: 100vw;
    position: absolute;
  }

  #website-links a:hover {
    margin-bottom: 5px;
  }
</style>