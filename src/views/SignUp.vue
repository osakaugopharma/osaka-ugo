<template>
<div class="container-fluid">
    <Header />
     <header>
        <h2 class="header">Sign Up</h2>
        <p>Sign up to be able to purchase from us</p>
    </header>

    <section>
        <form>
            <label>Name</label><br>
            <input type="text">

            <br>

            <label>Email</label><br>
            <input type="email">

 <br>
            <label>Password</label><br>
            <input type="password">
        </form>
        <button class="shop-now">Sign Up</button>
    </section>

    <div class="container">
       <p>Already have an account? <router-link to="/SignIn">Sign in</router-link></p>
    </div>
    <Footer />
   
    
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