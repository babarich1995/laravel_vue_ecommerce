import { defineStore } from 'pinia';
import axiosClient from '../axios';

export const useAuthStore = defineStore('auth',{
    state: () => ({
      
            user:{},
            token:localStorage.getItem('TOKEN')
          
          
    }),
    actions: {
      async login(data){
        const { data: data_1 } = await axiosClient.post('/login', data);
            let token = data_1.token;
            let user = data_1.user
            this.user = user;
            this.token = token;
            localStorage.setItem('USER', JSON.stringify(user))
            if(token) {
                localStorage.setItem('TOKEN', token);
            } else {
                localStorage.removeItem('TOKEN');
            }
            return data_1;
      },
      async logout(){
        const response = await axiosClient.post('/logout');
          this.token = null;
          this.user ={};
          localStorage.removeItem('TOKEN')
          localStorage.removeItem('USER');
          return response;
      }
    }
});