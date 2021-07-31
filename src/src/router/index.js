import Vue from 'vue'
import Router from 'vue-router'
import routes from './data/routes.js'
// import store from '../store';

Vue.use(Router)

var router = new Router({
  // mode: 'history',
  base: _basepath_,
  routes: routes
})
router.beforeEach((to, from, next) => {
  //判断是否需要登录，若需要判断登录状态
  if (to.meta.needLogin) {
    if(localStorage.getItem('PovertyToken')) {
      next();
    } else {
      next('/');
    }
  } else {
    next();
  }
  // 防止无限循环
  // if (to.Path === '/') {
  //   next();
  // } else {
  //   next('/');
  // }
})
// router.afterEach((to) => {
//   console.log(1);
//   if (to.Path !== '/' || to.Path !== '/home' || to.Path !== '/error') {
//     Vue.$message.info("暂未开启该功能!");
//   }
// })

export default router
