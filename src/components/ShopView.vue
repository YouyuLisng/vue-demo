<template>
  <div class="text-center fs-3 pt-3 mt-5 ms-4" style="font-family: Marcellus SC, serif">
    結帳囉！
  </div>
  <div class="pt-5 container">
    <div class="position-relative m-4" style="margin-top: 56px">
      <div class="progress" style="height: 1px">
        <div
          class="progress-bar"
          role="progressbar"
          style="width: 100%"
          aria-valuenow="50"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <button
        type="button"
        class="
          position-absolute
          top-0
          start-0
          translate-middle
          btn btn-sm btn-primary
          rounded-pill
        "
        style="width: 4rem; height: 4rem"
      >
        <i class="bi bi-bag" style="font-size: 25px"></i>
      </button>
      <button
        type="button"
        class="
          position-absolute
          top-0
          start-50
          translate-middle
          btn btn-sm btn-primary
          rounded-pill
        "
        style="width: 4rem; height: 4rem"
      >
        <i class="bi bi-cart-check" style="font-size: 25px"></i>
      </button>
      <button
        type="button"
        class="
          position-absolute
          top-0
          start-100
          translate-middle
          btn btn-sm btn-danger
          rounded-pill
        "
        style="width: 4rem; height: 4rem"
      >
        <i class="bi bi-credit-card-2-back" style="font-size: 25px"></i>
      </button>
    </div>
  </div>
  <div class="container mx-auto pt-3">
    <div class="row">
        <div class="col-4 text-start fs-5">商品</div>
        <div class="col-4 text-center fs-5">購物車</div>
        <div class="col-4 text-end fs-5">結帳</div>
    </div>
  </div>
</template>
