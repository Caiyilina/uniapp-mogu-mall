"use strict";const e=require("../common/vendor.js");let t;t="http://localhost:3000";const s=new class{request(t,s,r){return new Promise(((o,u)=>{e.index.request({url:"http://localhost:3000"+t,timeout:1e4,method:s,data:r,sslVerify:!1,success:e=>{o(e.data)},fail:u})}))}get(e,t){return this.request(e,"GET",t)}post(e,t){return this.request(e,"POST",t)}};exports.request=s;
