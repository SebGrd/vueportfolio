<template>
  <header class="site-header" id="header">
    <a href="/" class="site-header__title"><b>Sébastien Gaudard</b></a>
    <nav class="site-header__nav">
      <ul class="site-header__nav__list">
        <li class="site-header__nav__list__item">
          <router-link class="site-header__nav__list__item__link" to="/">🏠</router-link>
        </li>
        <li class="site-header__nav__list__item">
          <router-link class="site-header__nav__list__item__link" to="/experience">Experience</router-link>
        </li>
        <li class="site-header__nav__list__item">
          <router-link class="site-header__nav__list__item__link" to="/skills">Skills</router-link>
        </li>
        <li class="site-header__nav__list__item">
          <router-link class="site-header__nav__list__item__link" to="/schools">Schools</router-link>
        </li>
        <li class="site-header__nav__list__item">
          <router-link class="site-header__nav__list__item__link" to="/projects">Projects</router-link>
        </li>
        <li class="site-header__nav__list__item">
          <router-link class="site-header__nav__list__item__link" to="/contact">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped lang="scss">
//router-link-active = also parents
.router-link-exact-active{
  color: yellow;
}
</style>