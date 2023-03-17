import { defineStore } from 'pinia';
import axiosClient from '../axios';

export const useNotifyStore = defineStore('notify',{
    state: () => ({
      notification:{
        show: false,
        type: 'success',
        message: ''
      }
        
          
    }),
    actions: {
        notify({message, type}){
            this.notification.show = true;
            this.notification.type = type;
            this.notification.message = message;
            setTimeout(() => {
              this.notification.show = false;
            }, 3000)

        }
    }
});