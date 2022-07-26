"use strict";(self["webpackChunkvue_homework"]=self["webpackChunkvue_homework"]||[]).push([[203],{3421:function(t,s,a){var e=a(4301),i=a(6265),o=a.n(i),n=a(6294);const c=(0,n.Z)();s["Z"]=(0,e.Q_)("cartStore",{state:()=>({cart:{},total:null,cartqty:null}),actions:{addToCart(t,s=1){const a="https://vue3-course-api.hexschool.io/api/youyu-api/cart";c.cartLodaingItem=t,c.isLoading=!1;const e={product_id:t,qty:s};o().post(a,{data:e}).then((t=>{c.pushMessage({title:"加入購物車"}),c.cartLodaingItem="",console.log(t),this.getCart()}))},getCart(){const t="https://vue3-course-api.hexschool.io/api/youyu-api/cart";c.isLoading=!0,o().get(t).then((t=>{this.cart=t.data.data,c.isLoading=!1,this.total=this.cart.total,this.cartqty=this.cart.carts.length,console.log(this.cartqty)}))},updateCart(t){const s=`https://vue3-course-api.hexschool.io/api/youyu-api/cart/${t.id}`;c.isLoading=!0,c.cartLodaingItem=t.id;const a={product_id:t.product_id,qty:t.qty};o().put(s,{data:a}).then((t=>{console.log(t),this.getCart(),c.pushMessage({title:"更新購物車資訊",content:t.data.message}),c.cartLodaingItem="",c.isLoading=!1}))},delcart(t){c.cartLodaingItem=t;const s=`https://vue3-course-api.hexschool.io/api/youyu-api/cart/${t}`;c.isLoading=!0,o()["delete"](s).then((t=>{console.log(t),c.pushMessage({title:"移除購物車品項",content:t.data.message}),c.cartLodaingItem="",this.getCart(),c.isLoading=!1}))}}})},6294:function(t,s,a){var e=a(4301);s["Z"]=(0,e.Q_)("statusStores",{state:()=>({isLoading:!1,cartLodaingItem:"",messages:[]}),actions:{pushMessage(t){const{title:s,content:a,style:e="success"}=t;this.messages.push({style:e,title:s,content:a})}}})},1260:function(t,s,a){a.r(s),a.d(s,{default:function(){return ct}});var e=a(3396),i=a(7139),o=a(9242),n=a.p+"img/shopping-cart.2f66b3d8.png";const c=(0,e._)("div",{class:"banner"},[(0,e._)("div",{class:"position-absolute top-50 start-50 translate-middle"},[(0,e._)("h3",{class:"text-white text-center lh-base productTitle animate__animated animate__fadeInDown animate__delay-1s"},[(0,e.Uk)(" 質感與美感都兼備的家具 "),(0,e._)("br"),(0,e.Uk)(" 就在這裡！ ")])])],-1),r={style:{"border-radius":"50%"},class:"btn btn-primary test shopping",type:"button","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight","aria-controls":"offcanvasRight"},l={class:"position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger",style:{"font-size":"1em"}},d=(0,e._)("div",{class:"cart"},[(0,e._)("img",{style:{width:"40px",height:"40px"},class:"m-2",src:n,alt:""})],-1),u={class:"offcanvas offcanvas-end",tabindex:"-1",id:"offcanvasRight","aria-labelledby":"offcanvasRightLabel",ref:"Offcanvas"},p=(0,e._)("div",{class:"offcanvas-header"},[(0,e._)("h5",{id:"offcanvasRightLabel"},"購物清單"),(0,e._)("button",{type:"button",class:"btn-close text-reset","data-bs-dismiss":"offcanvas","aria-label":"Close"})],-1),g={class:"offcanvas-body"},h=["src"],_={class:"cart-info ms-3"},m={class:"fs-5 m-0"},v={class:"input-group input-group-sm pt-2",style:{width:"140px"}},b=["onUpdate:modelValue","disabled","onChange"],f={class:"input-group-text"},y={class:"pt-2 fs-5"},w={class:"mt-4"},x=["onClick"],C=(0,e._)("i",{class:"bi bi-trash3"},null,-1),k=[C],L={class:"row"},q={class:"text-end"},z={class:"text-danger me-4 mt-2",style:{"font-size":"24px"}},Z={class:"container mb-5"},D=(0,e._)("div",{class:"title text-center animate__animated animate__fadeInDown animate__delay-0.5s mb-4"},[(0,e._)("h3",{class:""},"商品列表"),(0,e._)("div",{class:"line mx-auto"})],-1),I={class:"row"},M={class:"productbox"},$={class:"position-relative"},P=["onClick"],R={class:"p-2"},T={class:"text-secondary fs-4 text-center pb-3"},U={key:0},j={key:1,style:{color:"#d9794d","font-size":"1rem"}},F={class:"d-flex justify-content-between"},N={style:{color:"#d9794d","font-size":"1.25rem"}},W={class:"d-flex justify-content-between pt-3"},H=["onClick"],Q=["onClick","disabled"],V={key:0,class:"spinner-border text-danger spinner-border-sm",role:"status"},Y=(0,e._)("span",{class:"visually-hidden"},"Loading...",-1),K=[Y],O=(0,e._)("i",{class:"bi bi-cart-plus-fill"},null,-1);function S(t,s,a,n,C,Y){const S=(0,e.up)("LoadingView"),A=(0,e.up)("Nav"),B=(0,e.up)("From"),E=(0,e.up)("Footer");return(0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e.Wm)(S,{active:t.isLoading},null,8,["active"]),(0,e.Wm)(A),c,(0,e._)("section",null,[(0,e._)("button",r,[(0,e._)("span",l,(0,i.zw)(t.cartqty),1),d]),(0,e._)("div",u,[p,(0,e._)("div",g,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.cart.carts,(s=>((0,e.wg)(),(0,e.iD)("div",{class:"cart d-flex justify-content-evenly",key:s.id},[(0,e._)("img",{class:"pb-3",src:s.product.imageUrl,alt:""},null,8,h),(0,e._)("div",_,[(0,e._)("p",m,(0,i.zw)(s.product.title),1),(0,e._)("div",v,[(0,e.wy)((0,e._)("input",{min:"1",type:"number",class:"form-control","onUpdate:modelValue":t=>s.qty=t,disabled:C.status.loadingitem===s.id,onChange:a=>t.updateCart(s)},null,40,b),[[o.nr,s.qty,void 0,{number:!0}]]),(0,e._)("div",f,"/ "+(0,i.zw)(s.product.unit),1)]),(0,e._)("p",y,"NT$"+(0,i.zw)(s.product.price),1)]),(0,e._)("div",w,[(0,e._)("button",{type:"button",class:"btn btn-danger",style:{"margin-top":"10px"},onClick:a=>t.delcart(s.id)},k,8,x)])])))),128)),(0,e._)("div",L,[(0,e._)("div",q,[(0,e._)("span",z,"總計:"+(0,i.zw)(t.total),1),(0,e._)("button",{type:"button",class:"btn btn-warning","data-bs-toggle":"offcanvas","data-bs-target":"#offcanvasRight",onClick:s[0]||(s[0]=(...t)=>Y.hideCart&&Y.hideCart(...t))},"前往購物車")])])])],512),(0,e._)("div",Z,[D,(0,e._)("div",I,[((0,e.wg)(!0),(0,e.iD)(e.HY,null,(0,e.Ko)(t.sortproducts,(s=>((0,e.wg)(),(0,e.iD)("div",{class:"col-xl-3 col-lg-4 col-sm-6 col-6 p-3 px-xl-3 px-2 gy-5",key:s.id},[(0,e._)("div",M,[(0,e._)("div",$,[(0,e._)("a",{href:"",onClick:(0,o.iM)((t=>Y.getProduct(s.id)),["prevent"])},[(0,e._)("div",{class:"chiar position-relative",style:(0,i.j5)({backgroundImage:`url(${s.imageUrl})`})},null,4)],8,P),(0,e._)("div",R,[(0,e._)("div",T,(0,i.zw)(s.title),1),s.price?(0,e.kq)("",!0):((0,e.wg)(),(0,e.iD)("p",U,(0,i.zw)(s.origin_price),1)),s.price?((0,e.wg)(),(0,e.iD)("del",j,"原價 "+(0,i.zw)(s.origin_price)+" 元",1)):(0,e.kq)("",!0),(0,e._)("div",F,[(0,e._)("div",N," NT$"+(0,i.zw)(s.price),1)]),(0,e._)("div",W,[(0,e._)("button",{type:"button",onClick:t=>Y.getProduct(s.id),class:"btn btn-warning"}," 商品資訊 ",8,H),(0,e._)("button",{type:"button",class:"btn btn-outline-warning",onClick:a=>t.addToCart(s.id),disabled:this.status.loadingitem===s.id},[this.status.loadingitem===s.id?((0,e.wg)(),(0,e.iD)("div",V,K)):(0,e.kq)("",!0),O],8,Q)])])])])])))),128))])])]),(0,e.Wm)(B),(0,e.Wm)(E)],64)}var A=a(6696),B=a(2221),E=a(1547),G=a(4301),J=a(6265),X=a.n(J),tt=a(6294);const st=(0,tt.Z)();var at=(0,G.Q_)("productsList",{state:()=>({products:[]}),getters:{sortproducts:t=>t.products.sort(((t,s)=>t.price-s.price))},actions:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/youyu-api/products/all";st.isLoading=!0,X().get(t).then((t=>{this.products=t.data.products,st.isLoading=!1}))},showOffcanvasMenu(){this.showMenu?this.showMenu=!1:this.showMenu=!0}}}),et=a(3421),it={data(){return{showMenu:!1,status:{loadingitem:""}}},inject:["emitter"],components:{Nav:A.Z,From:B.Z,Footer:E.Z},computed:{...(0,G.rn)(at,["sortproducts"]),...(0,G.rn)(tt.Z,["isLoading"]),...(0,G.rn)(et.Z,["cart","total","cartqty"])},methods:{...(0,G.nv)(at,["getProducts"]),...(0,G.nv)(et.Z,["addToCart","getCart","delcart","updateCart"]),hideCart(){this.$router.push("/user/shopcart")},getProduct(t){this.$router.push(`/user/product/${t}`)}},created(){this.getProducts(),this.getCart()}},ot=a(89);const nt=(0,ot.Z)(it,[["render",S]]);var ct=nt}}]);
//# sourceMappingURL=203.7217299b.js.map