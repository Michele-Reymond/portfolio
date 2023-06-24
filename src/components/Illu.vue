<script setup>
</script>

<template>
    <section id="illu-container" class="flex min-h-screen">
      <div class="mix-blend-multiply mr-[42px] min-h-screen max-w-[42%] h-screen truncate">
        <video autoplay muted loop id="myVideo">
          <source src="../assets/video/illustration.mp4" type="video/mp4">
        </video>
      </div>
      <div class="w-[50%] flex flex-col justify-center">
        <h1 class="wrap-h1">Illustration</h1>
        <p class="mb-[82px] pl-[42px]">Depuis 2017 je réalise des mandats d’illustration pour des clients ou je développe des projets personnels. J’ai participé à plusieurs expositions collectives et j’ai réalisé plusieurs fresques murales.</p>
        <a class="gen-link purple" href="https://www.behance.net/michelereymond">Découvrir mes réalisations sur Behance</a>
        <a class="gen-link purple" href="https://www.instagram.com/michele.reymond/">Ou sur Instagram</a>
      </div>
    </section>
</template>

<style scoped>
  #illu-container {
    background: #FB98DF;
    height: fit-content;
    width: 100vw;
    position: absolute;
  }

  video {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>