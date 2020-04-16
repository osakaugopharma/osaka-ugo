<template>
    <div class="container-fluid">
        <Header />
        <h2>Payment Successful</h2>

        <div class="container">
            <div>
             <font-awesome-icon icon="check" style="color: #000000; font-size: 52px" />
            </div>
        </div>
    </div>
        
</template>

<script>
import Header from '../components/layout/Header'
export default {
    name: "PaymentSuccess",
    components:{
        Header,
    }
}
</script>

<style scoped>
    .picture-container{
        width: 150px;
        height: 150px;
        border: 1px solid #000;
        border-radius: 75px;
    }
</style>