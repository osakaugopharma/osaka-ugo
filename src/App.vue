<template>
  <div id="app">
    <Overlay />
    <!-- <Header /> -->
    <Carousel />
  </div>
</template>


<script>
// import Header from './components/layout/Header';
import Carousel from './components/layout/Carousel';
import Overlay from './components/layout/Overlay';

export default {
  name: "app",
  components: {
    // Header,
    Carousel,
    Overlay,
  }
}
</script>

<style>
#app {
  font-family: Karla;
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
