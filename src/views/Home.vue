<template>
  <div id="app">
    <Overlay />
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
import Carousel from '../components/layout/Carousel';
import Overlay from '../components/layout/Overlay';
import About from '../components/layout/About';
import Categories from '../components/layout/Categories';
import FeaturedProducts from '../components/layout/FeaturedProducts';
import FeaturedProductContentOne from '../components/layout/FeaturedProductContentOne';
import Footer from '../components/layout/Footer';

export default {
  name: "home",
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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100&display=swap');
#app {
  font-family: Roboto-Regular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
  letter-spacing: 0.01rem;
  font-size: 1em;
}

</style>
