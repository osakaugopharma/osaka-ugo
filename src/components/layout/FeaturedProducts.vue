<template>
  <div class="container">
    <h2>Featured Products</h2>
    <nav aria-label="breadcrumb" class="margin">
      <ol class="breadcrumb" style="background-color: #5cdb95; color: #ffffff">
        <li class="breadcrumb-item active" aria-current="page" style="color: #ffffff">Anti-Malaria</li>
      </ol>
    </nav>

    
    <div class="row justify-content-center">
      <!-- <div class="add-to-cart-overlay">
        <button class="add-to-cart">
          +
        </button>
      </div> -->
      
      <div class="col-6 col-sm-6 col-lg-4">
       <div class="drug-backdrop img-one"></div>
        <p class="category-paragraph">Amatem Forte Softgel</p>
        <p class="price">₦0.00</p>
        <font-awesome-icon class="add-to-cart-plus" icon="plus-circle"/>
      </div>

      <div class="col-6 col-sm-6 col-lg-4">
        <div class="drug-backdrop img-two"></div>
        <p class="category-paragraph">Coartem 80/400</p>
        <p class="price">₦0.00</p>
      </div>
           
      

      <div class="col-6 col-sm-6 col-lg-4">
        <div class="drug-backdrop img-three"></div>
        <p class="category-paragraph">P-Alaxin</p>
        <p class="price">₦0.00</p>
      </div>
      
      <div class="col-6 col-sm-6 col-lg-4">
        <div class="drug-backdrop img-four"></div>
        <p class="category-paragraph">Lonart-Ds</p>
        <p class="price">₦0.00</p>
      </div>

      <div class="col-6 col-sm-6 col-lg-4">
        <div class="drug-backdrop img-five"></div>
        <p class="category-paragraph">Lonart-Ds</p>
        <p class="price">₦0.00</p>
      </div>

      <div class="col-6 col-sm-6 col-lg-4">
        <div class="drug-backdrop img-six"></div>
        <p class="category-paragraph">Lonart-D-12</p>
        <p class="price">₦0.00</p>
      </div>
    </div>
    <router-link to="/products/AntiMalaria"><button class="shop-now">View more</button></router-link>
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
    name: "FeaturedProducts",

    // methods:{
    //   showPlusIcon(){
    //     document.getElementsByClassName("add-to-cart-plus").style.transition = "display 0.2s";
    //   }
    // }
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
    margin-top: 1.5em;
    font-size: 14px;
    /* font-weight: 500; */
}

.add-to-cart-plus{
   color: #777373;
   font-size: 24px;
   position: absolute;
   z-index: 1;
   display: none;
}

.price{
  font-size: 14px;
}

.margin{
  margin-bottom: 7em;
}

div.row div {
  margin-bottom: 5em;
  transition: opacity 0.2s ease-in;
}

div.row div:hover{
  opacity: 0.5;
}

/* div.row div p:hover{
  opacity: 1;
} */


/* div.row div:hover {
  
} */


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
  margin: 0 auto;
  margin-bottom: 0 !important;
 
}

.img-one{
  background: url("../../assets/amartem-forte-softgel.jpg");
  /* background-position: left; */
  background-repeat: no-repeat;
}

.img-two{
  background: url("../../assets/coartem-80-480.jpg")
}

.img-three{
   background: url("../../assets/p-alaxin.jpg")
}

.img-four{
   background: url("../../assets/lonart-ds.jpg")
}

.img-five{
   background: url("../../assets/lonart-dispersible.jpg")
}

.img-six{
   background: url("../../assets/coartem-d-12.jpg")
}
</style>