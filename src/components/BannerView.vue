<template>
    <div class="banner">
       <div class="mask"></div>
       <div class="position-absolute top-50 start-50 translate-middle ">
         <h3 class="text-white text-center lh-base animate__animated animate__fadeInDown animate__delay-1s">假日，不必去遠方度假<br>在家即可享受假期的放鬆</h3>
         <router-link type="button" class="btn btn-warning position-absolute top-100 start-50 translate-middle mt-5 animate__animated animate__zoomIn animate__delay-1s" to="/user/cart">選購去</router-link>
       </div>
    </div>
</template>

<style>
.banner{
    background-image:url(../images/roberto-nickson-bwIqQ5qQhXs-unsplash.jpg) ;
    background-position: center center;
    background-size: cover;
    height: 100vh;
    position: relative;
}
.mask{
    position: absolute;
    height: 100%;
    right: 0;
    left: 0;
    background-color: rgb(0,0,0,0.3);
}
</style>
