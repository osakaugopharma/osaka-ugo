<template>
<div class="container-fluid">
    <Header />
     <header>
        <h2 class="header">Sign In</h2>
        <p>Welcome back!</p>
    </header>

    <section>
        <form>

            <label>Email</label><br>
            <input type="email">

 <br>
            <label>Password</label><br>
            <input type="password">
        </form>
        <button class="shop-now">Sign In</button>
    </section>

    <div class="container">
       <p><router-link to="#">Forgot your password?</router-link></p>
       
    </div>
    <Footer />
     <p><router-link to="/PaymentSuccess">Payment Successful</router-link></p>
   
    
</div>

</template>
    
<script>
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default {
 name: "ContactUs",
 components:{
     Header,
     Footer,
 }    
}
</script>

<style scoped>
 .header{
     margin-top: 1em;
 }

 .category-paragraph{
     margin-top: 3.5em;
 }

  header p{
     text-align: center;
     margin-top: 1.5em;
     line-height: 1.5em;
 }

 form{
     width: 40%;
     text-align: left;
     margin: 1.5em auto 0 auto;
 }

 label{
     margin-top: 2em;
 }

 form input{
     width: 100%;
     border-width: 0 0 1px 0;
     border-color: rgb(116, 111, 111);
     outline: none;
 }
 
 .shop-now{
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 2rem;
  color: #fff;
  outline: none;
  margin-top: 3em;
}

section{
    margin-bottom: 8em;
}

.container{
    margin-bottom: 4em;
}


</style>