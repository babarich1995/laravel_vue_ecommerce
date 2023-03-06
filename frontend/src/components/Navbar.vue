<template>

 <nav class="fixed top-0   z-40 w-full  flex flex-wrap items-center justify-between py-3 bg-gray-100 text-gray-500 hover:text-gray-700 focus:text-gray-700 shadow-sm">
        <div class="w-full flex flex-wrap items-center justify-between px-6">
          
              <button @click="emit('toggle-sidebar')"
               class="flex items-center sm:text-center sm:block xl:hidden lg:hidden  rounded 
               transition-colors w-8 h-8  text-primary hover:bg-black/8">
               <Bars3Icon class="h-12 w-6"/>
               
               
              </button>
              <a @click="goHome()" class="cursor-pointer">
                <div class="flex">
                    <ShoppingCartIcon class="w-12 h-10 text-emerald-600"/>
                    <h3 class="text-2xl text-gray-900 font-semibold">BabaShop</h3>
                </div>
                
              </a>
                
             
                
        
              
         
 
           
         
                 <div class="hidden right-0 md:block ml-10">
               <div class="flex items-center md:ml-6">
             
              <!-- Profile dropdown -->
              <Menu as="div" class="flex justify-between">
             <div class="relative">
              
            

             </div>
                <div>
                  <MenuButton class="flex max-w-sm items-center rounded-full  text-sm focus:outline-none">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            

                     <small class="ml-2 text-gray-900">John Doe</small>
                <ChevronDownIcon
                  class="h-3 w-3 ml-2 text-violet-200 hover:text-violet-100"
                  aria-hidden="true"
                />
                  </MenuButton>
                </div>
                <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute right-0 mt-10 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div class="px-1 py-1">
                      <MenuItem  v-slot="{ active }">
                      <a  :class="[active ? 'bg-gray-100' :
                       '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Sign Out</a>
                    </MenuItem>
                    </div>
                    
                  </MenuItems>
                </transition>
              </Menu>
            </div>
          </div>    
            </div>
            
          
           
             
          
       
        </nav>

 
</template>

<script setup>
import {computed, ref, onMounted, watch} from "vue";
import {Bars3Icon, LockClosedIcon, BellIcon, XMarkIcon, UserIcon,
ShoppingCartIcon} from '@heroicons/vue/24/outline';
import {Menu, MenuButton, MenuItems, MenuItem} from '@headlessui/vue';
import {ChevronDownIcon} from '@heroicons/vue/24/solid';
import {useRoute,useRouter, RouterLink} from 'vue-router';


const navigation = [
    { name: "Dashboard", to: { name: "Dashboard" } },
  ]



  const router = useRouter();
  const emit = defineEmits(['toggle-sidebar'])
  const currentRouteName = computed(() => {
      return useRoute().name
    })

   
    
function goHome(){
    
    router.push({name:"Dashboard"})
}


</script>

