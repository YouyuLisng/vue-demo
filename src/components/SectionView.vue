<template>
  <div class="container-lg">
    <section class="mb-5">
      <div class="title text-center animate__animated animate__fadeInDown animate__delay-0.5s">
        <h3 class="">New Arrival</h3>
        <div class="line mx-auto"></div>
      </div>
      <div class="row mt-3">
        <div class="col-12 col-md-4 mt-4 g-0 animate__animated animate__fadeInLeft animate__delay-1s" >
          <div class="arrwrap">
            <a href="">
              <div class="arrimg">
              </div>
            </a>
          </div>
          <div class="arrtext">
            <div class="arrinner position-relative">
              <h4 class="text-center mb-3">桌子</h4>
              <p class="text-left mb-4">
                依照你的需求，挑選可調整桌面高度、活動桌板的書桌或工作桌，讓你讀書、工作都更有效率。
              </p>
              <button
                type="button"
                class="
                  btn btn-outline-warning
                  position-absolute
                  bottom-0
                  start-50
                  translate-middle
                "
              >
                View-More
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-4 g-0 d-flex flex-column animate__animated animate__fadeInUp animate__delay-2s">
          <div class="arrwrap order-md-2">
            <a href="">
              <div class="sofa"></div>
            </a>
          </div>
          <div class="arrtext order-md-1">
            <div class="arrinner position-relative">
              <h4 class="text-center mb-3">沙發</h4>
              <p class="text-left mb-4">
                不管是窩在沙發上看電視或是準備晚餐的溫馨過程，點盞燈都可以讓氣氛更舒適，空間更明亮！
              </p>
              <button
                type="button"
                class="
                  btn btn-outline-warning
                  position-absolute
                  bottom-0
                  start-50
                  translate-middle
                "
              >
                View-More
              </button>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-4 mt-4 g-0 animate__animated animate__fadeInRight animate__delay-3s">
          <div class="arrwrap">
            <a href="">
              <div class="chair"></div>
            </a>
          </div>
          <div class="arrtext">
            <div class="arrinner position-relative">
              <h4 class="text-center mb-3">椅子</h4>
              <p class="text-left mb-4">
                我們知道你有時只想抓本書，享受一個人的時光，因此提供多功能性的椅子，久坐依然舒適。
              </p>
              <button
                type="button"
                class="
                  btn btn-outline-warning
                  position-absolute
                  bottom-0
                  start-50
                  translate-middle
                "
              >
                View-More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
.title h3 {
  margin-top: 3em;
  font-family: Marcellus SC, serif;
}
.line {
  width: 130px;
  height: 5px;
  background-color: darkgoldenrod;
}
.arrwrap {
  width: 100%;
  overflow: hidden;
}
.sofa{
  background-image: url(../images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 280px;
  cursor: pointer;
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.arrimg {
  background-image: url(../images/denys-striyeshyn-wJ7yGwz2-00-unsplash.jpg);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 280px;
  cursor: pointer;
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.chair{
  background-image: url(../images/mitch-moondae-zXFtsdi9dIc-unsplash.jpg);
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 280px;
  cursor: pointer;
  transform: scale(1, 1);
  transition: all 1s ease-out;
}
.chair:hover{
  transform: scale(1.2, 1.2);
}
.arrimg:hover {
  transform: scale(1.2, 1.2);
}
.sofa:hover{
  transform: scale(1.2, 1.2);
}
.arrinner {
  width: 100%;
  height: 250px;
  border: 3px solid #fff;
  padding: 2em;
}
.arrtext {
  width: 100%;
  background-color: #d7f9f1;
  padding: 15px;
}
@media (min-width: 768px) {
  .order-md-2 {
    order: 2;
  }
  .order-md-1 {
    order: 2;
  }
}
</style>
<script>
import 'animate.css'
export default {
  data () {
    return {
      arrival: [
        {
          title: '桌子',
          text: '依照你的需求，挑選可調整桌面高度、活動桌板的書桌或工作桌，讓你讀書、工作都更有效率。',
          images: '../images/denys-striyeshyn-wJ7yGwz2-00-unsplash.jpg'
        },
        {
          title: '沙發',
          text: '不管是窩在沙發上看電視或是準備晚餐的溫馨過程，點盞燈都可以讓氣氛更舒適，空間更明亮！',
          images: '..//images/phillip-goldsberry-fZuleEfeA1Q-unsplash.jpg'
        },
        {
          title: '椅子',
          text: '我們知道你有時只想抓本書，享受一個人的時光，因此提供多功能性的椅子，久坐依然舒適。',
          images: '../images/mitch-moondae-zXFtsdi9dIc-unsplash.jpg'
        }
      ]
    }
  }
}
</script>
