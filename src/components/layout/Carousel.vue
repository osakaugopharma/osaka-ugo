<template>
  <div id="carousel" class="mt-2">
    <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../../assets/carousel.jpg" class="d-block w-100" alt />
          <div class="carousel-caption">
            <h2>
              Pharmaceuticals Made
              <br />Easy
            </h2>
            <br />
            <p>
              Osaka Ugo Pharmaceuticals delivers quality products<br>
              and services to your doorstep
            </p>
            <br>
            <button class="shop-now">SHOP NOW</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/pills.jpg" class="d-block w-100" alt />
          <div class="carousel-caption">
            <h2 class="white-text">
              A New System For Buying 
              <br />Medication Online
            </h2>
              <br />
            <p class="white-text">
              Osaka Ugo Pharmaceuticals delivers quality products<br>
              and services to your doorstep
            </p>
            <br>
            <button class="shop-now">SHOP NOW</button>
          </div>
        </div>
        <div class="carousel-item">
          <img src="../../assets/payment.jpg" class="d-block w-100" alt />
          <div class="carousel-caption">
            <h2 class="white-text">
              Pay Online Easily and
              <br />Efficiently
            </h2>
              <br />
            <p class="white-text">
              Osaka Ugo Pharmaceuticals delivers quality products<br>
              and services to your doorstep
            </p>
            <br>
            <button class="shop-now">SHOP NOW</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.carousel-item {
  height: 570px;
  display: absolute !important;
}

.carousel-caption {
  text-align: justify;
  width: 60%;
  left: 64%;
  position: absolute;
  bottom: 12rem;
  color: #000;
  
  max-height: 300px;
  z-index: 0;
}

.carousel-caption h2 {
  line-height: 3rem;
  word-spacing: 0.5rem;
}

.carousel-caption p {
  line-height: 2rem;
}

.shop-now{
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  color: #fff;
}

.white-text{
  color: #fff;
}
</style>