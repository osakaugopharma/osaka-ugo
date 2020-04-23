<template>
  <div class="container-fluid p-0">
    <!-- <Header v-on:show-overlay-navigation="openNav" /> -->
    <Overlay />
    <div class="container p-0">
      <h2>About Us</h2>
      <br />
      <p>
        We at Osaka Ugo Pharmaceuticals believe that health is wealth and good health is
        essential for human wellbeing. We are comitted to making sure that our products get
        to our customers
      </p>
    </div>

    <div class="container margin">
      <div class="row">
        <div class="col-6 start">
          <h5>Meet the CEO</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident quia possimus laboriosam quod exercitationem optio minima libero, et architecto!</p>
        </div>
        <div class="col-6 picture-container-wrapper">
          <div class="picture-container"></div>
        </div>
      </div>
    </div>

    <div class="container-fluid margin">
      <h2 class="margin-bottom">Our Certifications</h2>
      <div class="row">
        <div class="col-sm-4 col-4">
          <font-awesome-icon icon="map-marker-alt" style="color: #000000; font-size: 24px" />
          <p class="category-paragraph">Anambra, Ekwulobia</p>
        </div>
        <div class="col-sm-4 col-4">
          <font-awesome-icon icon="envelope" style="color: #000000; font-size: 24px" />
          <p class="category-paragraph">example@gmail.com</p>
        </div>
        <div class="col-sm-4 col-4">
          <font-awesome-icon icon="mobile-alt" style="color: #000000; font-size: 24px" />
          <p class="category-paragraph">0900-000-0000</p>
        </div>
      </div>
    </div>

    <div class="container our-vision">
      <h2>Our Vision</h2>
      <br />
      <p>
        We at Osaka Ugo Pharmaceuticals believe that health is wealth and good health is
        essential for human wellbeing. We are comitted to making sure that our products get
        to our customers
      </p>
    </div>

    <Footer />
  </div>
</template>

<script>
// import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Overlay from '../components/layout/Overlay';
export default {
    name: "AboutUs",
    components: {
        // Header,
        Footer,
        Overlay,
    },
}
</script>

<style scoped>
h2 {
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  margin-top: 2em;
}

h5 {
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
  margin-bottom: 1em;
}
p {
  line-height: 3em;
  font-size: 15px;
}

.shop-now {
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  color: #fff;
  margin-bottom: 5em;
}

.background {
  background-color: #e5faf1;
  padding-top: 5.5em;
  text-align: center;
}

.start {
  text-align: left;
}

.category-paragraph {
  font-size: 13px;
}

.picture-container {
  border: 1px solid #000;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  margin: 0 auto;
}
.picture-container-wrapper {
  padding-top: 4rem;
}

.margin {
  margin-top: 4em;
}

.margin-bottom {
  margin-bottom: 2em;
}

.our-vision {
  margin-bottom: 5rem;
  margin-top: 4rem;
}

.our-vision h2 {
  margin-top: 4rem;
}

@media (max-width: 575.98px) {
  .picture-container {
    border: 1px solid #000;
    width: 150px;
    height: 150px;
    border-radius: 75px;
    margin: 0 auto;
  }
}
/* 
.background h2{
    border-bottom: 2px dashed #000;
    width: 9em;
} */
</style>