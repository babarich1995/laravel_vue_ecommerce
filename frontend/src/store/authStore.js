import { defineStore } from 'pinia';


export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        user:{
            data:{},
            token:1234
          },
          
    }),
    actions: {
      
     
    }
});