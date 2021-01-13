<template>
  <header class="site-header" id="header">
    <a href="/" class="site-header__title"><b>Sébastien Gaudard</b></a>
    <nav class="site-header__nav">
      <ul class="site-header__nav__list">
        <li class="site-header__nav__list__item" v-for="(route, index) in this.$router.options.routes" :key="index">
          <router-link class="site-header__nav__list__item__link" :to="route.path">{{ route.name }}</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
}
</script>

<style scoped lang="scss">
//router-link-active = also parents
.router-link-exact-active {
  color: yellow;
}
</style>