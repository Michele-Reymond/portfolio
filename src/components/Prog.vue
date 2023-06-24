<script setup>
  import ProgJSON from '../assets/json/prog.json'
</script>

<template>
    <section id="prog-container" class="flex min-h-screen">
      <div class="mix-blend-multiply mr-[42px] min-h-screen max-w-[42%] truncate">
        <Vue3Lottie :animationData="ProgJSON" />
      </div>
      <div class="w-[50%] flex flex-col justify-center">
        <h1 class="wrap-h1">Programmation</h1>
        <p class="mb-[82px] pl-[42px]">Après plusieurs année à exercer comme graphiste et à collaborer avec des développeurs, je me rend compte que c’est un métier qui m’attire. <br>

Si lors de mon bachelor j’ai eu quelques cours de code et de web, en 2020 je décide de me former plus sérieusement au développement web et je fais le bootcamp du Wagon où j’y apprend Ruby et Rails. <br>

Je continue mon parcours dans le web en réalisant des thèmes Wordpress customisé et en 2021 je tente le concours d’entrée de 42 sur un mois et au terme duquel je suis sélectionnée. <br>

Lors de ma formation j’apprend la programmation en C et l’orienté objet en C++ avec des projets passionnants tels que la création d’une librairie, d’un jeu, d’un algorithme de tri, d’un shell, d’un programme de raytracing, d’un serveur web, mais également la mise en place d’une machine virtuelle, la théorie sur les réseaux et l’utilisation de Docker. <br>

En 2023 je fonde je collectif ;nclude qui à pour but d’encourager les femmes dans la tech.</p>
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
    height: fit-content;
    width: 100vw;
    position: absolute;
  }

  #website-links a:hover {
    margin-bottom: 5px;
  }
</style>