<template>
  <div>
    <Header v-on:show-overlay-navigation="openNav" />
    <div id="myNav" class="overlay">
      <div class="row">
        <div class="col-2">
           <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
         </div>
        <div class="col-8">
          <img src="../../assets/OU6.png" alt="logo" width="120" height="40" class="mt-4 mr-2" />
        </div>
         
         
          
      </div>
      <hr>
      <!-- Button to close the overlay navigation -->
     

      <!-- Overlay content -->
      <div class="overlay-content">
        <!-- <ul class="navbar-nav ml-auto">
         <li class="nav-item dropdown">
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
         <li class="nav-item">
            <a class="nav-link" href="#">CONTACT</a>
          </li>

          <li class="nav-item">
            <a class="nav-link" href="#">ABOUT</a>
          </li>

           <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >LOGIN</a>
            <div class="dropdown-menu dropdown-menu-bottom" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Create Account</a>
              <a class="dropdown-item" href="#">Sign In</a>
             
            </div>
          </li>
        </ul>-->

        <a href="#" @click.prevent="openDropdown($event)" id="products-link" class="dropbtn text-left">
          Products
          <font-awesome-icon icon="caret-down" style="color: #666" />
        </a>
        <div class="dropdown-content" id="products">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <a href="#" class="text-left">Contact</a>
        <a href="#" class="text-left">About</a>
        <a href="#" @click.prevent="openDropdown($event)" id="login-link" class="text-left">
          Login
          <font-awesome-icon icon="caret-down" style="color: #666" />
        </a>
        <div class="dropdown-content" id="login">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
        <div class="dropdown"></div>
        <!-- <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a> -->
      </div>
    </div>

    <!-- Use any element to open/show the overlay navigation menu -->
  </div>
</template>

<script>
import Header from "./Header";

export default {
  name: "Overlay",
  components: {
    Header,
  },

  methods: {
    openNav() {
      document.getElementById("myNav").style.height = "100%";
    },

    closeNav() {
      document.getElementById("myNav").style.height = "0%";
    },

    openDropdown(event) {
      if (event.target.id === "products-link") {
        document.getElementById("products").classList.toggle("show");
      }

      if (event.target.id === "login-link") {
        document.getElementById("login").classList.toggle("show");
      }

      // document.getElementById("login").classList.toggle("show");
    }
  }
};
</script>

<style scoped>
/* The Overlay (background) */
.overlay {
  /* Height & width depends on how you want to reveal the overlay (see JS below) */
  /* font-size: 2px !important; */
  height: 0;
  width: 100%;
  position: fixed; /* Stay in place */
  z-index: 2; /* Sit on top */
  left: 0;
  top: 0;
  background-color: rgb(255, 255, 255); /* Black w/opacity */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.5s; /* 0.5 second transition effect to slide in or slide down the overlay (height or width, depending on reveal) */
}

/* Position the content inside the overlay */
.overlay-content {
  position: relative;
  width: 70%; /* 100% width */
  margin-top: 30px; /* 30px top margin to avoid conflict with the close button on smaller screens */
}

/* The navigation links inside the overlay */
.overlay a {
  padding: 1rem 2rem;
  text-decoration: none;
  font-size: 18px;
  color: #000;
  display: block; /* Display block instead of inline */
  transition: 0.3s; /* Transition effects on hover (color) */
}

/* When you mouse over the navigation links, change their color */
.overlay a:hover,
.overlay a:focus {
  color: #000000;
}

/* Position the close button (top right corner) */
.overlay .closebtn {
  /* position: absolute;
  top: 20px;
  right: 45px; */
  font-size: 36px;
color: #000;
  /* width: 100px;
  margin: 0; */
}

.overlay li {
  list-style-type: none;
}

/* When the height of the screen is less than 450 pixels, change the font-size of the links and position the close button again, so they don't overlap */
@media screen and (max-height: 450px) {
  .overlay a {
    font-size: 10px;
  }
  .overlay .closebtn {
    font-size: 40px;
    top: 15px;
    right: 35px;
  }
}

.dropdown-content {
  display: none;
}

.show {
  display: block;
}
</style>