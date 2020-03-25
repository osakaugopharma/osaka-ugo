<template>
  <div id="carousel" class="mt-2 p-0 container-fluid">
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active container-fluid p-0 one">
          <!-- <img src="../../assets/carousel.jpg" class="d-block w-100 img-fluid" alt /> -->

          <div class="carousel-caption text-left mb-xs-3 mb-sm-1 mb-md-5 mb-lg-5 pb-5">
            <h1>
              Pharmaceuticals<br>made
              easy
            </h1>
            <!-- <br /> -->

            <p>
              Osaka Ugo Pharmaceuticals delivers quality products<br>
              and services to your doorstep.
            </p>
          <br>
            <button class="shop-now">Shop now</button>
          </div>
        </div>
        <div class="carousel-item two">
          <!-- Added "img-fluid class to make images responsive" -->
          <!-- <img src="../../assets/pills.jpg" class="d-block w-100 img-fluid" alt /> -->

          <div class="carousel-caption text-left mb-xs-3 mb-sm-3 mb-md-5 mb-lg-5 mb-xs-5 pb-5">
            <h1 class="white-text">A new system for buying <br>medication online</h1>
            <!-- <br /> -->
            <p class="white-text">
              We use the latest technological tools to make medication
              easier and safer
            </p>
            <br />
            <button class="shop-now">Shop now</button>
          </div>
        </div>

        <div class="carousel-item three">
          <!-- <img src="../../assets/payment.jpg" class="d-block w-100 img-fluid" alt /> -->

          <div class="carousel-caption text-left mb-xs-3 mb-sm-3 mb-md-5 mb-lg-5 mb-xs-5 pb-5">
            <h1 class="white-text">
              Pay online easily and <br>
              efficiently
            </h1>
            <!-- <br /> -->
            <p class="white-text">
              Pay for your purchase securely online.
            </p>
            <br />
            <button class="shop-now">Shop now</button>
          </div>
        </div>
      </div>
      <!-- <a
        class="carousel-control-prev"
        href="#carouselExampleControls"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carouselExampleControls"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#carousel{
  /* Fix overlay and carousel problem */
  z-index: -1;
  position: relative;
}

/* .carousel-item {
  height: 36em;
}

 */
 .carousel-caption{
  /* padding-bottom: 30em; */
  margin-left: -2em;
}

.carousel-item.one {
  background: url("../../assets/carousel.jpg");
  background-size: cover;
}

.carousel-item.two {
  background: url("../../assets/pills.jpg");
  background-size: cover;
}

.carousel-item.three {
  background: url("../../assets/payment.jpg");
  background-size: cover;
}



.shop-now {
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  color: rgb(255, 255, 255);
  /* text-shadow: 0px 0px 1px #000000; */
}

.white-text {
  color: #fff;
}

@media (max-width:575.98px) {
  .carousel-caption h1{
 
  letter-spacing: 0.02rem;
  font-size: 1.5em;
}

.carousel-item {
  height: 24em;
}
.carousel-caption{
  width: 28em;
}

.carousel-caption p{
  width: 24em;
  
}
}

@media (min-width: 576px) {
  .carousel-caption h1{

  letter-spacing: 0.02rem;
  font-size: 1.96em;
}

.carousel-item {
  height: 24em;
}
}

@media (min-width: 576px) {
  .carousel-caption h1{
  
  letter-spacing: 0.02rem;
  font-size: 1.96em;
}

.carousel-item {
  height: 24em;
}
}

@media (min-width: 768px) {
    .carousel-caption h1{
  font-weight: bold;
  letter-spacing: 0.02rem;
  font-size: 2em;
}

.carousel-item {
  height: 30em;
}
}

@media (min-width: 992px) {
    .carousel-caption h1{
  font-weight: bold;
  letter-spacing: 0.02rem;
  font-size: 3em;
}

.carousel-item {
  height: 36em;
}
}
</style>

