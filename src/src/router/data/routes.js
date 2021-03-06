import Login from '@pages/Login'
import PovertyConqueror from '@pages/PovertyConqueror'
import Repository from '@pages/Repository'
import Repository02 from '@pages/Repository02'
import Forum from '@pages/Forum'
import home from '@pages/home'
import Errorpage from '@pages/ErrorPage'
const routes = [
  {
    path: '/',
    component: Login,
    meta: {needLogin: false}
  },
  {
    path: '/Login',
    component: Login,
    meta: {needLogin: false}
  },
  {
    path: '/home',
    component: home,
    meta: {needLogin: true},
    children: [
      {
        path: '/home/',
        redirect: '/home/PovertyConqueror'
      },
      {
        path: '/home/PovertyConqueror',
        component: PovertyConqueror,
        meta: {needLogin: true}
      },
      {
        path: '/home/Repository',
        component: Repository02,
        meta: {needLogin: true}
      },
      {
        path: '/home/Repository02',
        component: Repository,
        meta: {needLogin: true}
      },
      {
        path: '/home/Forum',
        component: Forum,
        meta: {needLogin: true}
      },
      {
        path: '/home/*',
        component: Errorpage,
        meta: {needLogin: false}
      }
    ]
  },
  {
    path: '*',
    component: Errorpage,
    meta: {needLogin: false}
  } 
]

export default routes;
