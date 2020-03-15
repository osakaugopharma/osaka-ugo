<template>
  <div class="container">
    <h2>Featured Products</h2>
    <nav aria-label="breadcrumb" class="margin">
      <ol class="breadcrumb" style="background-color: #5cdb95; color: #ffffff">
        <li class="breadcrumb-item active" aria-current="page" style="color: #ffffff">Category 1</li>
      </ol>
    </nav>

     <div>
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
  </div>
  </div>
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

.margin{
  margin-bottom: 7em;
}

.row-gap{
    margin-top: 8em;
}

.shop-now{
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 1rem;
  color: #fff;
  outline: none;
  margin-top: 5em;
}
</style>