import {createRouter, createWebHistory} from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

const routes = [
    {
        path: "/dashboard",
        name:"Dashboard",
        component:Dashboard
    }, {
        path: "/login",
        name:"Login",
        component:Login
    },

];

const router = createRouter({
    history:createWebHistory(),
    routes
})


// router.beforeEach((to,from,next)=>{
//     if(to.meta.requiresAuth && !store.state.user.token){
//         next({name:'Login'})
//     }else if(store.state.user.token && (to.meta.isGuest)){
//         next({name:'Dashboard'})
//     }else {
//         next()
//     }
// })
export default  router
