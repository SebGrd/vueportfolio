<template>
  <header :class="{'site-header': true, 'scrolled': this.scrolled}" id="header">
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
  data() {
    return {
      scrolled: false,
    };
  },
  methods: {
    isScrolled() {
      this.scrolled = window.scrollY > 100
    }
  },
  created() {
    window.addEventListener('scroll', this.isScrolled)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.isScrolled);
  }
}
</script>

<style scoped lang="scss">
.site-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 15px 50px;
  z-index: 5;
  box-shadow: 0 2px 4px transparent;
  transition: all 400ms ease-in-out;

  &.scrolled {
    background-color: white;
    box-shadow: 0 2px 4px #8080803b;
  }

  &__title {
    margin: 0;
    font-weight: 700;
    font-size: 38px;
    text-decoration: none;
    color: var(--text-dark);
  }

  &__nav {
    &__list {
      display: flex;
      margin: 0;
      padding: 0;
      list-style: none;

      &__item {
        margin-left: 25px;

        &:first-child {
          margin-left: 0;
        }

        &__link {
          position: relative;
          color: var(--text-dark);
          text-decoration: none;

          &:hover {
            &:before, &:after {
              opacity: 1;
            }

            &:before {
              left: -10px;
            }

            &:after {
              right: -10px;
            }
          }

          &:before, &:after {
            position: absolute;
            top: 0;
            font-size: 20px;
            line-height: 1;
            opacity: 0;
            pointer-events: none;
            transition: all 150ms ease-in-out;
          }

          &:before {
            content: '[';
            left: -2px;

          }

          &:after {
            content: ']';
            right: -2px;
          }
        }
      }
    }
  }
}

//router-link-active = also parents
.router-link-exact-active {
  color: rebeccapurple;
}
</style>