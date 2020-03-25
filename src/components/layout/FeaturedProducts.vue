<template>
  <div class="container">
    <h2>Featured Products</h2>
    <nav aria-label="breadcrumb" class="margin">
      <ol class="breadcrumb" style="background-color: #5cdb95; color: #ffffff">
        <li class="breadcrumb-item active" aria-current="page" style="color: #ffffff">Category 1</li>
      </ol>
    </nav>

    
    <div class="row">
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
    margin-top: 3.5em;
}

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
  padding: 0.5rem 1rem;
  color: #fff;
  outline: none;
  /* margin-top: 5em; */
}
</style>