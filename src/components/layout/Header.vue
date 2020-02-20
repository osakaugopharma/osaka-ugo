<template>
  <header id="header" class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="../../assets/OU6.png" alt="logo" width="200" height="70" class="mt-2">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          
           <li class="nav-item dropdown mr-3">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >PRODUCTS</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="#">CONTACT</a>
          </li>
         
           <li class="nav-item mr-3">
            <a class="nav-link" href="#">ABOUT</a>
          </li>
         
          <li class="nav-item dropdown mr-5">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >LOGIN</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Create Account</a>
              <a class="dropdown-item" href="#">Sign In</a>
              <!-- <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a> -->
            </div>
          </li>
           <li class="nav-item mr-4">
            <a class="nav-link" href="#"><font-awesome-icon icon="search" style="color: #5cdb95" /></a>
          </li>
           <li class="nav-item">
            <a class="nav-link" href="#"><font-awesome-icon icon="shopping-cart" style="color: #5cdb95" /></a>
          </li>
        
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>

export default {
  name: "header",
  
};
</script>

<style scoped>
nav{
  font-family: Karla;
  font-weight: 700;
  font-size: 16px;
}


/* .header {
  text-align: center;
  padding: 10px;
} */

/* .header a {
  color: #fff;
  padding-right: 5px;
} */
</style>


  <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div> -->
    <!-- <div class="alert alert-success alert-dismissible fade show" role="alert">
      With Bootstrap!
      <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
      
    </div> -->