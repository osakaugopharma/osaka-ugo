<template>
    <div class="container-fluid background">
        <h2>
           A little bit about us
        </h2>
        <!-- <br> -->
        <p>
            We at Osaka Ugo Pharmaceuticals believe that health is wealth and good health is 
            essential for human wellbeing. We are comitted to making sure that our products get
            to our customers 
        </p>
         <button class="shop-now">Read more</button>
    </div>
</template>

<script>
export default {
    name: "About"
}
</script>

<style scoped>


h2{
    font-size: 1.5em;
    font-family: Roboto;
    font-weight: bold;
    margin-bottom: 0.8em;
     color: #000;
}

p{
    line-height: 36px;
    font-size: 17px;
}

.shop-now{
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  color: #fff;
  margin-bottom: 4em;
  margin-top: 1rem;
  font-size: 18px;
}

.background{
    background-color: #e5faf1;
    padding-top: 5em;
    text-align: center;
    /* font-family: Karla; */
}
/* 
.background h2{
    border-bottom: 2px dashed #000;
    width: 9em;
} */

</style>