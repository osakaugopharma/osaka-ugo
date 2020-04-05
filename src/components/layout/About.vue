<template>
    <div class="container-fluid background">
        <h2>
           A little bit about us
        </h2>
        <br>
        <p>
            We at Osaka Ugo Pharmaceuticals believe that health is wealth and good health is 
            essential for human wellbeing. We are comitted to making sure that our products get
            to our customers 
        </p>
        <br>
         <button class="shop-now">Read more</button>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style scoped>


p{
    line-height: 3em;
}

.shop-now{
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  color: #fff;
  margin-bottom: 5em;
}

.background{
    background-color: #e5faf1;
    padding-top: 5.5em;
    text-align: center;
}
/* 
.background h2{
    border-bottom: 2px dashed #000;
    width: 9em;
} */

</style>