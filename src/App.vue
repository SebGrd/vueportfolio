<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/experience">experience</router-link> |
      <router-link to="/skills">skills</router-link> |
      <router-link to="/schools">schools</router-link> |
      <router-link to="/projects">projects</router-link> |
      <router-link to="/contact">contact</router-link>
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
