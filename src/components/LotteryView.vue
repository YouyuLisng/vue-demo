<template>
  <div class="container-fulid">
    <div class="lottery lottery-pic position-relative mb-3">
       <div class="position-absolute top-50 start-50 translate-middle" style="z-index:1;">
         <h3 class="text-white text-center lh-base animate__animated animate__fadeInDown animate__delay-1s">還沒取得優惠價格嗎？快來抽獎吧！</h3>
         <button type="button" class="btn btn-warning position-absolute top-100 start-50 translate-middle mt-5 animate__animated animate__zoomIn animate__delay-1s">快去抽獎</button>
       </div>
    </div>
  </div>
</template>

<style>
.lottery {
  height: 400px;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
}
.lottery-pic {
  background-image: url(../images/francesca-tosolini-tDVvS8eOMig-unsplash.jpg);
}
.lottery::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    background-color: rgb(0,0,0,0.4);
}
</style>
