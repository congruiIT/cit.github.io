(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c951a"],{5944:function(e,r,t){"use strict";t.r(r);var n=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("router-view",{attrs:{record:e.record,inited:e.inited},on:{refresh:e.getRecord}})},c=[],a=(t("96cf"),t("1da1")),o=t("fa7d"),i=t("82b2"),u={name:"Record",data:function(){return{inited:!1,record:[]}},created:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.getRecord();case 2:case"end":return r.stop()}}),r)})))()},methods:{getRecord:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function r(){var t;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.inited=!1,r.next=3,Object(o["a"])("".concat(i["b"],"/json/record.json"));case 3:t=r.sent,t[0]&&(e.record=JSON.parse(t[1])),e.inited=!0;case 6:case"end":return r.stop()}}),r)})))()}}},s=u,d=t("2877"),f=Object(d["a"])(s,n,c,!1,null,"30353e9e",null);r["default"]=f.exports}}]);