(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d6b4132"],{4802:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),e._m(1),e._m(2),a("div",{staticClass:"formSty",attrs:{id:"formSty"}},[e._l(e.fromData,(function(t){return a("div",{key:t.index},[a("label",{class:["iconfont",t.icon,"icons"],attrs:{for:""}}),"checkbox"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],class:t.btn?"getCodeinputs":"inputs",attrs:{disabled:t.enable,placeholder:t.placeholder,type:"checkbox"},domProps:{checked:Array.isArray(t.value)?e._i(t.value,null)>-1:t.value},on:{change:function(a){var n=t.value,i=a.target,o=!!i.checked;if(Array.isArray(n)){var s=null,l=e._i(n,s);i.checked?l<0&&e.$set(t,"value",n.concat([s])):l>-1&&e.$set(t,"value",n.slice(0,l).concat(n.slice(l+1)))}else e.$set(t,"value",o)}}}):"radio"===t.type?a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],class:t.btn?"getCodeinputs":"inputs",attrs:{disabled:t.enable,placeholder:t.placeholder,type:"radio"},domProps:{checked:e._q(t.value,null)},on:{change:function(a){return e.$set(t,"value",null)}}}):a("input",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"item.value"}],class:t.btn?"getCodeinputs":"inputs",attrs:{disabled:t.enable,placeholder:t.placeholder,type:t.type},domProps:{value:t.value},on:{input:function(a){a.target.composing||e.$set(t,"value",a.target.value)}}}),t.btn?a("button",{attrs:{disabled:e.enable},on:{click:function(t){return e.getCode()}}},[e._v(e._s(e.verification_Info))]):e._e()])})),a("van-button",{staticClass:"registerBtn",attrs:{block:""},on:{click:function(t){return e.register()}}},[e._v("注册")])],2),e._m(3),a("div",{staticClass:"tabBtn"},[a("van-button",{staticClass:"btn",on:{click:function(t){return e.goRegister()}}},[e._v("注册")]),a("van-button",{staticClass:"btn",on:{click:function(){e.$router.push("/login")}}},[e._v("登录")])],1)])},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{staticClass:"titleImg",attrs:{src:"https://gve.oss-cn-beijing.aliyuncs.com/2020/02/17/1581947632898.jpg",alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("video",{staticClass:"video",staticStyle:{width:"100%","object-fit":"fill",height:"200px"},attrs:{controls:"controls",autoplay:"autoplay",loop:"loop",preload:"auto","webkit-playsinline":"true",playsinline:"true","x5-video-player-type":"h5-page","x5-video-player-fullscreen":"true","x-webkit-airplay":"allow","x5-video-orientation":"portraint"}},[a("source",{attrs:{src:"https://jstang.xyz/网站首页永不放棄片段.mp4"}})])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("img",{staticClass:"titleImg",attrs:{src:"https://gve.oss-cn-beijing.aliyuncs.com/2020/02/17/1581947607680.jpg",alt:""}})])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"bottomInfo"},[a("div",[a("p",[e._v("创业导师")]),a("div",[a("p",[e._v("微信号码:13333333333")]),a("p",[e._v("手机号码:1x333333333")])])])])}],o={data:function(){return{fromData:[{index:1,icon:"icon-contextphone",value:null,placeholder:"您的手机号",type:"text",btn:!1,enable:!1},{index:2,icon:"icon-yanzhengma",value:null,placeholder:"您的手机验证码",type:"text",btn:!0,enable:!1},{index:3,icon:"icon-beforetype-",value:null,placeholder:"密码",type:"password",btn:!1,enable:!1},{index:4,icon:"icon-beforetype-",value:null,placeholder:"确认密码",type:"password",btn:!1,enable:!1},{index:5,icon:"icon-beforetype-",value:null,placeholder:"推荐码",type:"text",btn:!1,enable:!0}],num:300,verification_Info:"获取验证码",enable:!1}},created:function(){this.$route.query.code&&(this.fromData[4].value=this.$route.query.code)},methods:{getCode:function(){var e=this;if(this.fromData[0].value){var t=this.phoneFun(this.fromData[0].value);if(!t)return this.$Notify({type:"danger",message:"手机号格式不正确!"}),!1;var a={phone:this.fromData[0].value,sendType:"con_smstype_register"};this.$axios.register("ym/public/member-send-verifycode",a).then((function(t){console.log(t),200===t.status&&0===t.data.code?(e.$Notify({type:"success",message:"验证码发送成功!"}),e.enable=!0,e.countDown()):200===t.status&&1===t.data.code&&t.data.data.residueSecond>0&&(e.enable=!0,e.num=t.data.data.residueSecond,e.countDown(),e.$Notify({type:"warning",message:"验证码还在有效期!"}))}))}else this.$Notify({type:"danger",message:"请输入手机号!"})},register:function(){var e=this,t=this.fromData;if(console.log(t),t[0].value)if(console.log(1),t[2].value===t[3].value)if(t[3].value){var a={phone:t[0].value,password:t[2].value,rePassword:t[3].value,phoneCode:t[1].value,referralCode:t[4].value};console.log(a),this.$axios.register("ym/public/member-register",a).then((function(t){console.log(t),200===t.status&&0===t.data.code?(e.$Notify({type:"success",message:"注册成功"}),e.$router.push("/login")):e.$Notify({type:"danger",message:t.data.msg})}))}else this.$Notify({type:"danger",message:"推荐码不能为空！"});else this.$Notify({type:"danger",message:"密码输入不一致"});else this.$Notify({type:"danger",message:"请输入手机号"})},phoneFun:function(e){var t=/^[1][3,4,5,7,8,9][0-9]{9}$/;return!!t.test(e)},countDown:function(){var e=setTimeout(this.countDown,1e3);this.num=this.num-1,this.verification_Info=this.num+"秒后再试",0===this.num&&(this.num=300,this.enable=!1,this.verification_Info="获取验证码",clearTimeout(e))},goRegister:function(){document.getElementById("formSty").scrollIntoView()}}},s=o,l=(a("cef4"),a("2877")),r=Object(l["a"])(s,n,i,!1,null,"065c8a5c",null);t["default"]=r.exports},cef4:function(e,t,a){"use strict";var n=a("d965"),i=a.n(n);i.a},d965:function(e,t,a){}}]);
//# sourceMappingURL=chunk-5d6b4132.e9c7d83e.js.map