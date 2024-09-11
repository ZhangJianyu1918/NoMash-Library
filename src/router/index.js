import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../views/LoginView.vue'
import { isAuthenticated } from './authentication';
import FirebaseLoginView from '@/views/FirebaseLoginView.vue';
import FirebaseRegisterView from '@/views/FirebaseRegisterView.vue';
import FirebaseLogoutView from '@/views/FirebaseLogoutView.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  },
  {
    path: '/FirebaseLogin',
    name: 'FirebaseLogin',
    component: FirebaseLoginView
  },
  {
    path: '/FirebaseRegister',
    name: 'FirebaseRegister',
    component: FirebaseRegisterView
  },
  {
    path: '/FirebaseLogout',
    name: 'FirebaseLogout',
    component: FirebaseLogoutView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})



router.beforeEach((to, from, next) => {
  
    if (to.path === '/about' && !isAuthenticated.value) {
      next('/login'); // Redirect to login if not authenticated
    } else {
      next(); // Allow access
    }
  });

export default router