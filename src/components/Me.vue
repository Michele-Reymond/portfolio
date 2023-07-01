<script setup>
</script>

<template>
    <section id="me">
        <div class="p-[42px] flex items-center pr-[200px] m-mobile-column m-mobile-contact">
          <img src="../assets/img/logo.png" alt="Logo" class="w-[100px] h-[100px] mr-6 rounded-full">
          <!-- <div> -->
            <div class="mr-8">
              <p>Michèle Reymond</p>
              <p>Rue du Maupas 11, Lausanne</p>
            </div>
            <div>
              <p>078 737 20 19</p>
              <a class="gen-link" href="mailto:hello@michelereymond.ch">hello@michelereymond.ch</a>
            </div>
          </div>
        <!-- </div> -->
        <div id="cv" class="p-[42px] flex justify-between m-mobile-column">
          <div class="mr-[62px]">
            <h2>Formation</h2>
            <div id="formation">
              <h3>Programmation informatique</h3>
              <p>
                Octobre 2021 à aujourd’hui<br>
                42 Lausanne
              </p>
              <h3>Bootcamp Fullstack</h3>
              <p>
                2020 - 2 mois<br>
                Le Wagon à Lausanne
              </p>
              <h3>Erasmus</h3>
              <p>
                2015 - 6 mois<br>
                ESA Saint-Luc à Liège, Belgique
              </p>
              <h3>Bachelor</h3>
              <p>
                2013-2016<br>
                Communication visuelle<br>
                Haute école d’art de Berne
              </p>
              <h3>Propédeutique</h3>
              <p>
                2012-2013<br>
                CFP en Art Appliqué à Genève
              </p>
              <h3>Maturité</h3>
              <p>
                2006-2012<br>
                Lycée-collège de la Planta à Sion
              </p>
            </div>
          </div>
          <div class="mr-[62px]">
            <h2>Expérience</h2>
            <div id="experience">
              <h3>Assistante de cours</h3>
              <p>
                Aide aux élèves sur Ruby on Rails<br>
                Le Wagon<br>
                25 - 26 mai 2023<br>
                12 - 16 juin 2023<br>
                Renens
              </p>
              <h3>Indépendante</h3>
              <p>
                Graphisme, illustration, <br>
                motion design et web<br>
                Depuis juin 2017 à aujourd’hui
              </p>
              <h3>Developeuse wordpress</h3>
              <p>
                20%, novembre 2021 à janvier 2023<br>
                Up to you<br>
                Fribourg
              </p>
              <h3>Graphiste</h3>
              <p>
                Graphisme, motion design et web design<br>
                80%, avril 2018 à mai 2021<br>
                Up to you<br>
                Fribourg
              </p>
              <h3>Stage community manager</h3>
              <p>
                70%, octobre 2017 à mars 2018<br>
                Up to you<br>
                Fribourg
              </p>
              <h3>Graphiste</h3>
              <p>
                Stage 80%, Juillet à décembre 2017<br>
                80%, janvier à juin 2017<br>
                karakter graphic design<br>
                Fribourg
              </p>
            </div>
          </div>
          <div class="w-1/2">
            <div>
              <div id="savoir-faire" class="mb-9">
                  <h2>Savoir-faire</h2>
                  <div>
                    <h3>Programmation</h3>
                    <p>
                      C, C++, Ruby<br>
                      HTML5, CSS3, Javascript, Typescript<br>
                      Vue.js, Pinia, Wordpress, Rails, Tailwind<br>
                      Git and Github, Shell command line, VsCode, Docker<br>
                      Unity
                    </p>
                  </div>
                  <div>
                    <h3>Design</h3>
                    <p>
                      Graphisme, motion design, illustration, ui/ux<br>
                      Adobe illustrator, Adobe InDesign, Adobe Photoshop, Adobe After Effect, Sketch, Figma
                    </p>
                  </div>
                  <div>
                    <h3>+</h3>
                    <p>
                      MacOs<br>
                      Notion, Trello<br>
                      Scrum<br>
                      Français: langue maternelle<br>
                      Allemand et anglais: bon oral et écrit<br>
                      Suisse allemand: compréhension de base
                    </p>
                  </div>
                </div>
              <div id="realisations">
                  <div>
                    <h2>Collectif</h2>
                    <p>
                      Fondatrice du collectif <a class="gen-link" href="https://www.instagram.com/collectif_include/">;nclude</a> qui à pour but d'encourager les femmes dans la tech.<br>
                      Co-fondatrice du collectif artistique <a class="gen-link" href="https://www.maisonnoctua.ch/">Maison Noctua</a> à Fribourg.
                    </p>
                  </div>
                </div>
            </div>
          </div>
        </div>
    </section>
</template>

<style scoped>
  #me {
    color: white;
    background-color: black;
    position: absolute;
    width: 100%;
  }

  #cv p {
    margin-bottom: 12px;
    color: gray;
  }

  @media screen and (max-width: 650px) {
    #me {
      position: relative;
    }

    #cv div {
      margin-right: 0;
      margin-bottom: 22px;
      width: 100%;
    }

    .m-mobile-contact {
      padding: 0;
      padding-top: 42px;
    }
    
    .m-mobile-contact img {
      margin-right: 0;
      margin-bottom: 42px;
    }

    .m-mobile-contact div {
      align-self: flex-start;
      width: 100%;
      padding-left: 42px;
      margin-bottom: 22px;
    }
  }
</style>