<template>
  <div class="container">
    <h2>Featured Products</h2>
    <nav aria-label="breadcrumb" class="margin">
      <ol class="breadcrumb" style="background-color: #5cdb95; color: #ffffff">
        <li class="breadcrumb-item active" aria-current="page" style="color: #ffffff">Anti-Malaria</li>
      </ol>
    </nav>

    
    <div class="row">
      <div class="col-6 col-sm-6 col-lg-4">
       <div class="drug-backdrop">

       </div>
         <!-- <img src="../../assets/amartem-forte-softgel.jpg" alt="amartem-forte-softgel"> -->
        <p class="category-paragraph">Amatem Forte Softgel</p>
        <p class="price">₦0.00</p>
      </div>
      <div class="col-6 col-sm-6 col-lg-4">
           <img src="../../assets/coartem-80-480.jpg" alt="amartem-forte-softgel">
        <p class="category-paragraph">Amatem Forte Softgel</p>
        <p class="category-paragraph">₦0.00</p>
      </div>

      <div class="col-6 col-sm-6 col-lg-4">
        <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
        <p class="category-paragraph">Anti-Malaria</p>
      </div>
      <div class="col-6 col-sm-6 col-lg-4">
        <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
        <p class="category-paragraph">Anti-Malaria</p>
      </div>

      <div class="col-6 col-sm-6 col-lg-4">
        <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
        <p class="category-paragraph">Anti-Malaria</p>
      </div>
      <div class="col-6 col-sm-6 col-lg-4">
        <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
        <p class="category-paragraph">Anti-Malaria</p>
      </div>
    </div>
    <button class="shop-now">Shop now</button>
  </div>

     <!-- <div>
      <div class="row row-gap">
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
      </div>

      <div class="row row-gap">
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
      </div>

      <div class="row row-gap">
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
        <div class="col-sm">
             <font-awesome-icon icon="syringe" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anti-Malaria</p>
        </div>
      </div>

      <button class="shop-now">SHOP NOW</button>
  </div> -->
  
</template>

<script>
export default {
    name: "FeaturedProducts"
};
</script>

<style scoped>
.container{
  padding-top: 7em;
}

h2{
  margin-bottom: 2em;
}

.category-paragraph{
    margin-top: 1em;
    font-size: 14px;
    /* font-weight: 500; */
}

/* .price{
  margin-top
} */

.margin{
  margin-bottom: 7em;
}

div.row div {
  margin-bottom: 5em;
}


.shop-now{
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
 padding: 0.5rem 2rem;
  color: #fff;
  outline: none;
  /* margin-top: 5em; */
}

.drug-backdrop{
  height: 150px;
  width: 150px;
  background: url(../../assets/amartem-forte-softgel.jpg);
}
</style>