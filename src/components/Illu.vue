<script setup>
</script>

<template>
    <section id="illu-container" class="flex min-h-screen m-mobile-column">
      <div class="w-[33%] mix-blend-multiply fixed h-full illu-mobile-video">
        <video autoplay loop muted playsinline id="myVideo">
          <source src="../assets/video/illustration.mp4" type="video/mp4">
        </video>
      </div>
      <div class="w-[90%] pl-[38%] flex flex-col justify-center pb-9 illu-mobile-text">
        <h1 class="wrap-h1">Illustration</h1>
        <p class="mb-[62px] pl-[42px]">Depuis 2017 je réalise des mandats d’illustration pour des clients et je développe des projets personnels. Que ce soit pour un projet commerciale ou éditoriale je suis toujours heureuse d’inventer de nouvelles formes et combinaisons de couleurs. J’ai également participé à plusieurs expositions collectives et j’ai réalisé plusieurs fresques murales.</p>
        <h2>Découvrir mes réalisations</h2>
        <a class="gen-link purple" href="https://www.behance.net/michelereymond">> Behance</a>
        <a class="gen-link purple mb-6" href="https://www.instagram.com/michele.reymond/">> Instagram</a>
        <div class="">
            <div class="mb-[82px] w-full mr-3">
              <div id="website-links" class="flex flex-col mb-6">
                <h2>Expositions</h2>
                  <p>
                    Tea Room festival - Fribourg - 28 au 30 avril 2023<br>
                    #0 | chouette! - Maison Noctua à Fribourg - 12 septembre 2020<br>
                    Kreatür - L’étagère à Lausanne - 10 au 31 janvier 2020<br>
                    Social Thursday’s! - Impact Hub à Lausanne - 19 avril 2018
                  </p>
              </div>
              <div id="website-links" class="flex flex-col">
                <h2>Fresques</h2>
                <p>
                  RTS_C - Réalisation d’une fresque filmée - Fribourg - 28 juillet 2021<br>
                  Pollen festival - Fresque sur vitrine - Sion - 4 juillet 2021<br>
                  Up to you - Fresque décoratives pour des bureaux - Fribourg - Novembre 2020<br>
                  Vision Art Festival - Fresque murale - Crans-Montana - Août 2020<br>
                  Urban Art Velodrome - Fresque au sol - Genève - Juillet 2020<br>
                  Vision Art Festival - 1er  prix du concours - Crans-Montana - 27 juillet 2019<br>
                  Grève des femmes Fribourg - Fresque sur papier - 8 juin 2019<br>
                  
                </p>
              </div>
            </div>
          </div>
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

  @media screen and (max-width: 650px) {
    #illu-container {
      position: relative;
      padding-bottom: 42px;
    }

    .illu-mobile-text {
      width: 100%;
      padding: 0 20px;
    }

    .illu-mobile-video {
      max-width: 100%;
      width: 100%;
      position: relative;
      min-height: unset;
      margin: 0;
      margin-bottom: 22px;
    }

    .illu-mobile-video video {
      height: 40vh;
      width: 100%;
    }
  }

  video {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>