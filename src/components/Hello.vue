<script setup>
</script>

<template>
    <h1>Hello! Moi c'est <a class="home-link" id="michele" href="#">Michèle</a>.<br> Je fais du <a class="home-link" id="motion" href="#">motion</a>, de <a id="illu" class="home-link" href="#">l'illu</a> et de la <a id="prog" class="home-link" href="#">prog</a>.</h1>
</template>

<style scoped>
  h1  {
    width: 70%;
    font-family: Chillax;
    font-size: 64px;
    font-weight: 600;
    line-height: 89px;
    letter-spacing: 0.02em;
    text-align: center;
  }

  .home-link {
    text-decoration: none;
    color: black;
    transition: all .4s ease;
  }

  #michele:hover {
    color: white;
    text-decoration: underline;
    text-decoration-thickness: 12px;
  }

  #motion:hover {
    color: #7000FF;
    text-decoration: wavy underline;
    text-decoration-thickness: 8px;
  }

  #illu:hover {
    background-color: #FB98DF;
  }
  
  #prog:hover {
    color: #FF7A00;
    text-decoration: dotted underline;
    text-decoration-thickness: 8px;
    text-underline-offset: 18px;
  }
</style>
