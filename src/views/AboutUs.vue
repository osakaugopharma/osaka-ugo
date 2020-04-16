<template>
    <div class="container-fluid">
        <Header />
        <div class="container">
            <h2>
           About Us
        </h2>
        <br>
        <p>
            We at Osaka Ugo Pharmaceuticals believe that health is wealth and good health is 
            essential for human wellbeing. We are comitted to making sure that our products get
            to our customers 
        </p>
        </div>

        <div class="container margin">
            <div class="row">
                <div class="col-6 start">
                    <h5>Meet the CEO</h5>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident quia possimus laboriosam quod exercitationem optio minima libero, et architecto!
                    </p>
                </div>
                 <div class="col-6">
                    <div class="picture-container">

                    </div>
                </div>
            </div>
        </div>

        <div class="container margin">
            <h2 class="margin-bottom">Our Certifications</h2>
        <div class="row">
        <div class="col-sm-4 col-4">
             <font-awesome-icon icon="map-marker-alt" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">Anambra, Ekwulobia</p>
        </div>
        <div class="col-sm-4 col-4">
             <font-awesome-icon icon="envelope" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">example@gmail.com</p>
        </div>
        <div class="col-sm-4 col-4">
             <font-awesome-icon icon="mobile-alt" style="color: #000000; font-size: 24px" />
             <p class="category-paragraph">0900-000-0000</p>
        </div>
      
        </div>
    </div>

    <div class="container margin">
            <h2>
           About Us
        </h2>
        <br>
        <p>
            We at Osaka Ugo Pharmaceuticals believe that health is wealth and good health is 
            essential for human wellbeing. We are comitted to making sure that our products get
            to our customers 
        </p>
        </div>

        <Footer />
        
      
    </div>
</template>

<script>
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
export default {
    name: "AboutUs",
    components: {
        Header,
        Footer,
    }
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

.start{
    text-align: left;
}

.picture-container{
    border: 1px solid #000;
    width: 300px;
    height: 300px;
    border-radius: 150px;
    margin: 0 auto;
}

.margin{
    margin-top: 10em;
}

.margin-bottom{
    margin-bottom: 5em;
}
/* 
.background h2{
    border-bottom: 2px dashed #000;
    width: 9em;
} */

</style>