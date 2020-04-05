<template>
  <div class="container-fluid">
    <Header />

    <div class="custom-container">
      <nav aria-label="breadcrumb" class="margin">
        <ol class="breadcrumb" style="background-color: #5cdb95; color: #ffffff">
          <li class="breadcrumb-item active" aria-current="page" style="color: #ffffff">Multivitamins</li>
        </ol>
      </nav>
    </div>

    <div class="row row-gap">
      <div class="col-6 col-sm-6 col-lg-4">
       <div class="drug-backdrop img-one"></div>
        <p class="category-paragraph">Nature's Benefit Men Mega Multi Dietary Supplement</p>
        <p class="price">₦0.00</p>
      </div>
     
     <div class="col-6 col-sm-6 col-lg-4">
       <div class="drug-backdrop img-two"></div>
        <p class="category-paragraph">Immunocal</p>
        <p class="price">₦0.00</p>
      </div>

      <div class="col-6 col-sm-6 col-lg-4">
       <div class="drug-backdrop img-three"></div>
        <p class="category-paragraph">Lycoset Capsule</p>
        <p class="price">₦0.00</p>
      </div>
      
      <div class="col-6 col-sm-6 col-lg-4">
       <div class="drug-backdrop img-four"></div>
        <p class="category-paragraph">Mason Biotin 800 MCG</p>
        <p class="price">₦0.00</p>
      </div>

     <div class="col-6 col-sm-6 col-lg-4">
       <div class="drug-backdrop img-five"></div>
        <p class="category-paragraph">Alphabetic Plus</p>
        <p class="price">₦0.00</p>
      </div>
    </div>
    <button class="shop-now">View more</button>
    <Footer />
  </div>
   
</template>

<script>
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
export default {
  name: "AntiMalaria",
  components: {
    Header,
    Footer
  }
  //  methods:{
  //     showPlusIcon(){
  //       document.getElementsByClassName("add-to-cart-plus").style.transition = "display 0.2s";
  //     }
  //   }
};
</script>

<style scoped>

nav {
  margin-top: 3em;
}

.custom-container {
  width: 95%;
  margin: 0 auto;
}

h2 {
  margin-bottom: 2em;
}

.category-paragraph {
  margin-top: 1.5em;
  font-size: 14px;
  /* font-weight: 500; */
}

.add-to-cart-plus {
  color: #777373;
  font-size: 24px;
  position: absolute;
  z-index: 1;
  display: none;
}

.price {
  font-size: 14px;
}

.margin {
  margin-bottom: 7em;
}

div.row div {
  margin-bottom: 5em;
  transition: opacity 0.2s ease-in;
}

div.row div:hover {
  opacity: 0.5;
}

/* div.row div p:hover{
  opacity: 1;
} */

/* div.row div:hover {
  
} */

.shop-now {
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  color: #fff;
  outline: none;
  margin-bottom: 5em;
}

.drug-backdrop {
  height: 150px;
  width: 150px;
  margin: 0 auto;
  margin-bottom: 0 !important;
}

.img-one{
  background: url("../../assets/nature-benefit-mega.jpg");
  /* background-position: left; */
  background-repeat: no-repeat;
}

.img-two{
  background: url("../../assets/immunocal.jpg")
}

.img-three{
   background: url("../../assets/lycoset.jpg")
}

.img-four{
   background: url("../../assets/masons-biotin-800.jpg")
}

.img-five{
   background: url("../../assets/alphabetic.jpg")
}
</style>