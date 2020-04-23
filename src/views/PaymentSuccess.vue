<template>
  <div class="container-fluid">
    <Overlay />
    <h2>Payment Successful</h2>

    <div class="wrapper icon">
      <div class="picture-container">
          
        <font-awesome-icon icon="check" style="color: #5cdb95; font-size: 52px; margin-top: 3rem;" />
      </div>
    </div>

    <div class="container button-group">
        <div>
            <button>Back to shop
                <span class="text-right">
                     <font-awesome-icon icon="caret-right" style="color: #ffffff; font-size: 15px; margin-left: 17rem" />
                </span>
               
            </button>
        </div>
    </div>
  </div>
</template>

<script>
import Overlay from "../components/layout/Overlay";
export default {
  name: "PaymentSuccess",
  components: {
    Overlay,
  }
};
</script>

<style scoped>
h2 {
    margin-top: 1em;
  margin-bottom: 1.5em;
  font-size: 1.5em;
  font-weight: bold;
  color: #000;
}

.wrapper{
    width: 30%;
    margin: auto;
}
.picture-container{
    width: 150px;
    height: 150px;
    border-radius: 75px;
    background-color: #e5faf1;
}
.icon{
    margin-top: 6em;
}

button{
  border: none;
  background-color: #5cdb95;
  border-radius: 3px;
  padding: 0.5rem 1.5rem;
  color: rgb(255, 255, 255);
  margin-top: 3rem;
  font-size: 18px;
  width: 100%;
  text-align: left;
}

.button-group{
    margin-top: 3em;
}
</style>