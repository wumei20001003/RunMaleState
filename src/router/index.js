import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
      path: '/',
      component:  () => import('@/views/home/home.vue')
    },
    {
      path: '/training',
      name:'training',
      component:  () => import('@/views/training/index.vue'),
    },
    {
      path: '/onlineItem',
      name:'onlineItem',
      component:  () => import('@/components/onlineItem.vue'),
    },
  {
    path: '/Newbie',
    name:'Newbie',
    component:  () => import('@/components/Newbie.vue'),
  },
  {
    path: '/healthCertificate',
    name:'healthCertificate',
    component:  () => import('@/views/healthCertificate/index.vue'),
  },
  {
    path: '/vehicleInformation',
    name:'vehicleInformation',
    component:  () => import('@/views/vehicleInformation/index.vue'),
  },
  {
    path: '/vehicleInformation/Choice',
    name:'Choice',
    component:  () => import('@/views/Choice/index.vue'),
  },
  {
    path: '/vehicleInformation/electricCars',
    name:'electricCars',
    component:  () => import('@/views/electricCars/index.vue'),
  },
  {
    path: '/vehicleInformation/motorcycle',
    name:'motorcycle',
    component:  () => import('@/views/motorcycle/index.vue'),
  },
  {
    path: '/vehicleInformation/information',
    name:'information',
    component:  () => import('@/views/information/index.vue'),
  },
  {
    path: '/vehicleInformation/Driving',
    name:'Driving',
    component:  () => import('@/views/Driving/index.vue'),
  },
  {
    path: '*',redirect: '/'
  } //防输错或者没找到页面路由错误，跳转到首页
]

const createRouter = () => new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: routes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
