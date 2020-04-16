<template>
  <div>
    <div class="container-fluid footer">
      <div class="row">
        <div class="col-12 col-md-7 col-lg-4">
          <h5>
            <b>Get In Touch</b>
          </h5>
          <p>youremail@gmail.com</p>
          <p>0000-0000-0000</p>
        </div>
        <div class="col-12 col-md-5 col-lg-4">
          <h5>
            <b>About Us</b>
          </h5>
          <p>Our Mission</p>
          <p>Terms And Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <div class="col-12 col-md-8 col-lg-4 social-media">
          <div>
            <h5>
              <b>Social Media</b>
            </h5>
            <div class="row justify-content-center">
              <div class="col-2">
                <!-- Solved Fontawesome brand icon problem -->
                <font-awesome-icon
                  :icon="['fab', 'facebook-f']"
                  style="color: #fff; font-size: 20px"
                />
              </div>
              <div class="col-2">
                <font-awesome-icon :icon="['fab', 'twitter']" style="color: #fff; font-size: 20px" />
              </div>
              <div class="col-2">
                <font-awesome-icon
                  :icon="['fab', 'instagram']"
                  style="color: #fff; font-size: 20px"
                />
              </div>
              <div class="col-2">
                <font-awesome-icon
                  :icon="['fab', 'whatsapp']"
                  style="color: #fff; font-size: 20px"
                />
              </div>
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
.container-fluid {
  background-color: #5cdb95;
  color: #fff;
  padding-top: 5em;
}

/* .container p{
} */

/* .social-media div{
  text-align: center;
} */

.footer-note {
  /* padding-top: 1em; */
  padding-bottom: 3em;
  font-size: 13px;
  line-height: 2em;
  font-family: Roboto Light;
}

h5 {
  padding-bottom: 0.5em;
}

.social-media h5 {
  padding-bottom: 1em;
}

.social-media {
  padding-bottom: 0;
  height: 5em !important;
}

/* .col-sm p{
    padding-bottom:0.5rem;
}

.col-sm{
    text-align: left;
} */

div.row div {
  margin-bottom: 3.5em;
}

div.row div p{
  font-family: Roboto Light;
}

/* div.row{
  padding-left: 1em;
} */

@media (min-width: 768px) {
  div.row div {
    text-align: left;
  }

  .social-media div.row {
    padding: 0 !important;
    justify-content: start !important;
  }

  div.row{
  padding-left: 2em;
}
}

@media (min-width: 992px) {
  div.row div {
    text-align: left;
  }

  .social-media div.row {
    padding: 0 !important;
    justify-content: start !important;
  }

  div.row{
  padding-left: 10em;
}
}
</style>