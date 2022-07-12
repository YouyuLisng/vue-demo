<template>
  <div class="container">
    <section>
      <div
        class="
          title
          text-center
          animate__animated animate__fadeInDown animate__delay-0.5s
        "
      >
        <h3 class="">Hot Sale</h3>
        <div class="line mx-auto"></div>
      </div>
      <div class="row mb-5">
        <div class="col-12 col-md-4 mt-4">
          <div class="salepic chiar position-relative">
            <div class="p-3 saleText">
                <h3 class="text-center text-white">軟爛沙發</h3>
                <p class="text-center p-2 text-white">適合沒有骨頭！軟爛的人類 <br> 躺在特別舒服的沙發上 <br> 看著劇或者讀一本書 <br> 都是不錯的選擇</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-4">
          <div class="salepic tablepic position-relative">
            <div class="p-3 saleText">
                <h3 class="text-center text-white">工作桌子</h3>
                <p class="text-center p-2 text-white">適合隨時隨地都想工作的人類！<br> 在家也能舒服地完成工作 <br> 提升工作效率！ <br>事半功倍！</p>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-4">
          <div class="salepic safa position-relative">
            <div class="p-4 saleText">
                <h3 class="text-center text-white">暢銷椅子</h3>
                <p class="text-center p-2 text-white">適合大多數的人 <br>溫暖舒適整潔又好看 <br> 椅墊質感柔軟 <br>賦予實用與美觀的結合</p>
            </div>
          </div>
        </div>
      </div>
      <div class="position-relative border-top mt-5 mb-5">
        <button type="button" class="btn btn-warning position-absolute start-50 translate-middle">購買商品！</button>
      </div>
    </section>
  </div>
</template>

<style>
.chiar{
  background-image: url(../images/pic/沙發/000000000014323082-gallery-01-20220316175145344.jpeg);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 280px;
  cursor: pointer;
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.tablepic{
  background-image: url(../images/hannah-busing-nME9TubZtSo-unsplash.jpg);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 280px;
  cursor: pointer;
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.safa{
  background-image: url(../images/kam-idris-_HqHX3LBN18-unsplash.jpg);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 280px;
  cursor: pointer;
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.saleText{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 90%;
    height: 90%;
    background-color: rgb(233,155,122,0.6);
    opacity: 0;
    transition: all 1s;
}
.salepic:hover .saleText{
    opacity: 1;
}
</style>
