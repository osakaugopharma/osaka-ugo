<template>
  <div>
    <div class="container-fluid footer">
      <div class="row">
        <div class="col-sm">
            <h5><b>Get In Touch</b></h5>
            <p>youremail@gmail.com</p>
            <p>0000-0000-0000</p>
        </div>
        <div class="col-sm">
          <h5><b>About Us</b></h5>
          <p>Our Mission</p>
            <p>Terms And Conditions</p>
            <p>Privacy Policy</p>
        </div>
        <div class="col-sm">
            <h5><b>Social Media</b></h5>
            <div class="row">
                <div class="col-sm-2">
                    <!-- Solved Fontawesome brand icon problem -->
                     <font-awesome-icon :icon="['fab', 'facebook-f']" style="color: #fff; font-size: 18px" />
                </div>
                 <div class="col-sm-2">
                    
                     <font-awesome-icon :icon="['fab', 'twitter']" style="color: #fff; font-size: 18px" />
                </div>
                 <div class="col-sm-2">
               
                     <font-awesome-icon :icon="['fab', 'instagram']" style="color: #fff; font-size: 18px" />
                </div>
                 <div class="col-sm-2">
                   
                     <font-awesome-icon :icon="['fab', 'whatsapp']" style="color: #fff; font-size: 18px" />
                </div>
            </div>
        </div>
      </div>
     
          <p class="footer-note container">©2020 Osaka Ugo Pharmacy, Nigeria. All Rights Reserved.</p>
    
    </div>
    
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.container-fluid{
    background-color: #5cdb95;
    color: #fff;
    padding: 5em 0 1em 9em;
}

/* .container p{
} */


.footer-note{
    padding-top: 6em;
}

h5{
    padding-bottom: 1.5em;
}

.col-sm p{
    padding-bottom:0.5rem;
}

.col-sm{
    text-align: left;
}
</style>