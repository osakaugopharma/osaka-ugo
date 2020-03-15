<template>
  <div id="app">
    <Overlay />
    <!-- <Header /> -->
    <Carousel />
    <About />
    <Categories />
    <FeaturedProducts />
    <FeaturedProductContentOne />
    <Footer />
  </div>
</template>


<script>
// import Header from './components/layout/Header';
import Carousel from './components/layout/Carousel';
import Overlay from './components/layout/Overlay';
import About from './components/layout/About';
import Categories from './components/layout/Categories';
import FeaturedProducts from './components/layout/FeaturedProducts';
import FeaturedProductContentOne from './components/layout/FeaturedProductContentOne';
import Footer from './components/layout/Footer';

export default {
  name: "app",
  components: {
    // Header,
    Carousel,
    Overlay,
    About,
    Categories,
    FeaturedProducts,
    FeaturedProductContentOne,
    Footer,
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
