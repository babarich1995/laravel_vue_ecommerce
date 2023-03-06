import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import AuthLayout from "../layouts/AuthLayout.vue"
import AppLayout from "../layouts/AppLayout.vue"
import Login from "../views/auth/Login.vue";
import Register from "../views/auth/Register.vue";
import ForgotPassword from "../views/auth/ForgotPassword.vue";
import { useAuthStore } from "../store/authStore";

const routes = [
    {
        path:'/',
        redirect:'/dashboard',
        name:'Dashboard',
        component:AppLayout,
        meta:{requiresAuth:true},
        children:[
          { path: "/dashboard", name:'Dashboard', component: Dashboard}
           
        ]
      },

      {
        path:'/auth',
        redirect:'/login',
        name:'Auth',
        component: AuthLayout,
        meta:{isGuest:true},
        children: [
          {
            path:'/login',
            name:'Login',
            component:Login
          } ,{
            path: "/register",
            name:"Register",
            component:Register
        },
         {
            path: "/forgot_password",
            name:"Forgot Password",
            component:ForgotPassword
        },
         
        ]
      },

    

];

const router = createRouter({
    history:createWebHistory(),
    routes
})


router.beforeEach((to,from,next)=>{
    const store = useAuthStore();
    if(to.meta.requiresAuth && !store.user.token){
        next({name:'Login'})
    }else if(store.user.token && (to.meta.isGuest)){
        next({name:'Dashboard'})
    }else {
        next()
    }
})
export default  router
