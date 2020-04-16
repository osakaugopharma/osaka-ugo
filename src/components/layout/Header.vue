<template>
  <header id="header" class="container-fluid">
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">
        <img src="../../assets/OU6.png" alt="logo" width="150" height="50" class="mt-2" />
      </a>

      <button class="toggler" @click="$emit('show-overlay-navigation')">
        <div class="ham"></div>
        <div class="ham"></div>
        <div class="ham"></div>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item dropdown mr-2">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Products</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item"><router-link to="/products/AntiMalaria">Anti-Malaria</router-link></a>
              <a class="dropdown-item"><router-link to="/products/Multivitamins">Multivitamins</router-link></a>
              <a class="dropdown-item">Equipments</a>
              <a class="dropdown-item">Contraceptives</a>
              <a class="dropdown-item">Antibiotics</a>
              <a class="dropdown-item">Eye Drugs</a>
              <a class="dropdown-item">Ulcer and Gastro Drugs</a>
              <a class="dropdown-item">Analgesics</a>
              <a class="dropdown-item">Anti-Hypertensives</a>
            </div>
          </li>
          <li class="nav-item mr-2">
            <a class="nav-link"><router-link to="/ContactUs">Contact Us</router-link></a>
          </li>

          <li class="nav-item mr-2">
            <a class="nav-link"><router-link to="/AboutUs">About</router-link></a>
          </li>

          <li class="nav-item dropdown mr-4">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Login</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item"><router-link to="/SignUp">Create account</router-link></a>
              <a class="dropdown-item"><router-link to="/SignIn">Sign in</router-link></a>
              <!-- <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>-->
            </div>
          </li>
          <li class="nav-item mr-3">
            <a class="nav-link" href="#">
              <font-awesome-icon icon="search" style="color: #5cdb95" />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <font-awesome-icon icon="shopping-cart" style="color: #5cdb95" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "header"
};

/* Open */
</script>

<style scoped>
nav {
  font-family: Roboto Medium;
  font-size: 16px;
}

.ham {
  background: rgb(68, 66, 66);
  width: 20px;
  height: 3px;
  margin-bottom: 0.2rem;
}

.toggler {
  background: none;
  border: none;
  outline: none;
}

@media (min-width: 992px) {
  .toggler {
    display: none;
  }
}

button.navbar-toggler {
  border: none;
  outline: none;
}

li a {
  letter-spacing: -0.05em;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1;
  /* -webkit-font-smoothing: antialiased; */
}
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