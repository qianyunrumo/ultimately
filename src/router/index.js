import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import layout from "../views/layout/Layout.vue";

Vue.use(VueRouter);

const routes = [
  {
    path:'',
    name:'layout',
    component:layout,
    children:[
      {
        path: "/",
        name: "Home",
        component: Home
      },
      {
        path: '/goods/admin/create',
        name: 'goodsAdminCreate',
        component:() => import('../views/goodsAdminCreate/GoodsAdminCreate.vue') ,
        meta:{
          title:"新增商品"
        }
      },
      {
        path: '/goods/admin/list',
        name: 'goodsAdminList',
        component:() => import('../views/goodsadminlist/GoodsAdminList.vue') ,
        meta:{
          title:"商品列表"
        }
      },
      {
        path: '/goods/admin/brand',
        name: 'goodsAdminbrand',
        component:() => import('../views/goodsAdminBrand/GoodsAdminBrand.vue') ,
        meta:{
          title:"商品品牌"
        }
      },
      {
        path: '/goods/opinion/comment',
        name: 'goodsOpinionComment',
        component:()=>import('../views/goodsOpinionComment/GoodsOpinionComment.vue'),
        meta:{
          title:"商品评价"
        }
      },
      {
        path: '/goods/opinion/consult',
        name: 'goodsOpinionConsult',
        component:()=>import('../views/goodsOpinionConsult/GoodsOpinionConsult.vue'),
        meta:{
          title:"商品咨询"
        }
      },
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
