<template>
  <div class="container-fluid p-0">
    <Overlay />
    <header>
      <h2 class="header">Contact Us</h2>
      <p>
        Get in touch with us through the form
        <br />and we will get back to you as soon as we can
      </p>
    </header>

    <section>
      <form>
        <label>Name</label>
        <br />
        <input type="text" />

        <br />

        <label>Email</label>
        <br />
        <input type="email" />

        <br />
        <label>Message</label>
        <br />
        <textarea></textarea>
      </form>
      <button class="shop-now">Send</button>
    </section>

    <div class="container">
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
    <Footer />
  </div>
</template>
    
<script>
import Overlay from "../components/layout/Overlay";
import Footer from "../components/layout/Footer";

export default {
  name: "ContactUs",
  components: {
    Overlay,
    Footer
  }
};
</script>

<style scoped>
.header {
  margin-top: 1em;
}

h2 {
  margin-bottom: 1.5em;
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
}

.category-paragraph {
  margin-top: 0.5em;
  font-size: 15px;
}

header p {
  text-align: center;
  margin-top: 1.5em;
  line-height: 1.5em;
  font-size: 15px;
}

form {
  width: 40%;
  text-align: left;
  margin: 1.5em auto 0 auto;
}

label {
  margin-top: 2em;
  font-size: 15px;
}

form input,
form textarea {
  width: 100%;
  border-width: 0 0 1px 0;
  border-color: rgb(116, 111, 111);
  outline: none;
}

.shop-now {
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  color: rgb(255, 255, 255);
  margin-top: 3rem;
  font-size: 18px;
}

section {
  margin-bottom: 6em;
}

.container {
  margin-bottom: 6em;
  background-color: #e5faf1;
  padding: 3rem 0;
}

@media (max-width: 575.98px) {
  form {
    width: 70%;
    text-align: left;
    margin: 1.5em auto 0 auto;
  }

  .category-paragraph {
    font-size: 13px;
    margin-top: 2em;
  }
}
</style>