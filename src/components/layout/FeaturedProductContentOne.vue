<template>
  <div class="container">
    <nav aria-label="breadcrumb" class="margin">
      <ol class="breadcrumb" style="background-color: #5cdb95; color: #ffffff">
        <li class="breadcrumb-item active" aria-current="page" style="color: #ffffff;font-size: 17px;">Multivitamins</li>
      </ol>
    </nav>

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
  </div>
</template>


<script>
export default {
  name: "FeaturedProductContentOne"
};
</script>

<style scoped>
.container {
  padding-top: 7em;
  margin-bottom: 6em;
}

h2 {
  margin-bottom: 2em;
}

.margin {
  margin-bottom: 7em;
}

div.row div {
  margin-bottom: 3em;
}

.shop-now{
  border: 1px solid #5cdb95;
  background-color: #fff;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  color: #000;
  outline: none;
  font-size: 18px;
  /* margin-top: 5em; */
}

.category-paragraph{
    margin-top: 0.5em;
    font-size: 15px;
    /* font-family: Roboto Light; */
}

.price{
  font-size: 14px;
  /* font-family: Roboto Thin; */
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

.drug-backdrop{
  height: 150px;
  width: 150px;
  margin: 0 auto;
  margin-bottom: 0 !important;
}

/* @media (min-width: 768px) {
  div.row div{
    width: 250px !important;
  }
} */
</style>