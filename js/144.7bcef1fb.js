"use strict";(self["webpackChunkvue_homework"]=self["webpackChunkvue_homework"]||[]).push([[144],{8144:function(s,e,t){t.r(e),t.d(e,{default:function(){return y}});var n=t(3396),o=t(9242);const r=(0,n._)("div",{class:"container"},null,-1),a={class:"container mt-5"},i={class:"col-md-6"},l=(0,n._)("h1",{class:"h3 mb-3 font-weight-normal"},"請先登入",-1),u={class:"mb-2"},c=(0,n._)("label",{for:"inputEmail",class:"sr-only"},"請輸入電子郵件",-1),d={class:"mb-2"},p=(0,n._)("label",{for:"inputPassword",class:"sr-only"},"請輸入密碼",-1),m=(0,n._)("div",{class:"text-end mt-4"},[(0,n._)("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," 登入 ")],-1),h=(0,n._)("p",null,"a0979534311@gmail.com",-1),w=(0,n._)("p",null,"a24751243",-1);function _(s,e,t,_,b,f){const v=(0,n.up)("Toast");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n.Wm)(v),r,(0,n._)("div",a,[(0,n._)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,o.iM)(((...s)=>f.signIn&&f.signIn(...s)),["prevent"]))},[(0,n._)("div",i,[l,(0,n._)("div",u,[c,(0,n.wy)((0,n._)("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address",required:"",autofocus:"","onUpdate:modelValue":e[0]||(e[0]=s=>b.user.username=s)},null,512),[[o.nr,b.user.username]])]),(0,n._)("div",d,[p,(0,n.wy)((0,n._)("input",{type:"password",id:"inputPassword",class:"form-control",placeholder:"Password",required:"","onUpdate:modelValue":e[1]||(e[1]=s=>b.user.password=s)},null,512),[[o.nr,b.user.password]])]),m])],32),h,w])],64)}var b=t(5820),f=t(4364),v={data(){return{user:{username:"",password:""}}},components:{Toast:f.Z},provide(){return{emitter:b.Z}},inject:["emitter"],methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(this.isLoading=!0,s.data.success){const{token:e,expired:t}=s.data;document.cookie=`testToken = ${e}; expired = ${new Date(t)}`,console.log(s),this.$router.push("/dashboard/products")}}))}}},g=t(89);const k=(0,g.Z)(v,[["render",_]]);var y=k}}]);
//# sourceMappingURL=144.7bcef1fb.js.map