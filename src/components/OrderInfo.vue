<template>
    <div class="mx-auto col-10">
        <div>
            <p class="text-center fs-3" style="font-family: Marcellus SC, serif;">運送資訊</p>
        </div>
      <FormView class="row gy-3 p-md-2 formcontrol mb-3" v-slot="{ errors }" @submit="createOrder" >
        <div class="col-12">
          <FieldView type="text" name="姓氏" class="form-control" id="validationCustom03" :class="{ 'is-invalid': errors['姓氏'] }" rules="required" v-model="form.user.name" placeholder="FristName"></FieldView>
          <error-message name="姓氏" class="invalid-feedback"></error-message>
        </div>
         <div class="col-12">
          <FieldView type="email" name="email" class="form-control" id="validationCustom02" :class="{ 'is-invalid': errors['email'] }" rules="email|required" v-model="form.user.email" placeholder="Emali"></FieldView>
          <error-message name="email" class="invalid-feedback"></error-message>
        </div>
         <div class="col-12">
          <FieldView type="text" name="電話" class="form-control" id="validationCustom04" :class="{ 'is-invalid': errors['電話'] }" :rules="isPhone" v-model="form.user.tel" placeholder="Phone"></FieldView>
          <error-message name="電話" class="invalid-feedback"></error-message>
        </div>
        <div class="col-12">
          <FieldView type="text" name="地址" class="form-control" id="validationCustom04" :class="{ 'is-invalid': errors['地址'] }" rules="required" v-model="form.user.address" placeholder="address"></FieldView>
          <error-message name="地址" class="invalid-feedback"></error-message>
        </div>
        <span>
             <FieldView name="訊息" class="col-12 ps-2 pb-5" :class="{ 'is-invalid': errors['訊息'] }" rules="required" placeholder="Message 訊息" v-model="form.user.Message"></FieldView>
             <error-message name="訊息" class="invalid-feedback"></error-message>
        </span>
        <div class="text-end">
            <button type="submit" class="btn btn-warning">送出訂單</button>
        </div>
      </FormView>
    </div>
</template>

<script>
export default {
  data () {
    return {
      orderId: '',
      form: {
        user: {
          name: '',
          Lastname: '',
          tel: '',
          address: '',
          email: '',
          Message: ''
        }
      }
    }
  },
  methods: {
    isPhone (value) {
      const phoneNumber = /^(09)[0-9]{8}$/
      return phoneNumber.test(value) ? true : '需要正確的電話號碼'
    },
    createOrder () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      this.$http.post(url, { data: order })
        .then((res) => {
          console.log(res.data.orderId)
          this.orderId = res.dataId
          this.$router.push('/user/checkout/:orderId')
        })
    }
  }
}
</script>
