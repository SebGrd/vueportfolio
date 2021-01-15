<template>
  <main class="home">
    <section class="home__wallpaper">
      <h1 class="home__wallpaper__title">Développeur web</h1>
      <svg class="home__wallpaper__waves" viewBox="0 0 100 23">
        <path fill="#ffffff" opacity="0.5" d="M0 30 V15 Q30 3 60 15 V30z"></path>
        <path fill="#ffffff" d="M0 30 V12 Q30 17 55 12 T100 11 V30z"></path>
      </svg>
    </section>
    <section class="home__section">
      <article>
        <h1 class="home__section__title">Qui suis-je ?</h1>
        <p>Je m'appelle <b>Sébastien</b>, j'ai 20 ans et je suis actuellement étudiant à l'ESGI et en alternance en tant
          que <b>Developpeur Front-end</b> chez <a
              href="/experiences#harfanglab">Harfanglab</a>.</p>
        <a class="btn" href="https://www.linkedin.com/in/s%C3%A9bastien-gaudard-a36697180/" target="_blank">LinkedIn</a>
        <img class="img-resp" src="/images/code-page.png" alt="illustration code informatique"/>
      </article>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped lang="scss">
.home {
  .home__wallpaper {
    position: relative;
    height: 100vh;
    min-height: 500px;
    background-image: url(/images/background-home.jpg);
    background-size: cover;
    background-position: bottom;

    &__title {
      position: absolute;
      top: 30%;
      left: 10vw;
      font-size: 90px;
      font-weight: 600;
      color: white;
      line-height: 1;
    }

    &__waves {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }
}
</style>

