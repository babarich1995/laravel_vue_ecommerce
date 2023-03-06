<template>
 

    <div class="sidebar z-40 top-[4rem] mt-2 fixed  bottom-0 lg:left-0 p-2 
          w-[250px] overflow-y-auto text-center bg-side py-4 px-2">

        <div class="p-3  mt-3 flex items-center  duration-300 cursor-pointer hover:bg-blue-100 hover:text-black   text-white">
        

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>

          <span class="text-[15px] ml-4 text-gray-400">Dashboard</span>
       

      </div>
      <div class="p-3  mt-3 flex items-center  duration-300 cursor-pointer hover:bg-blue-100 hover:text-black   text-white">
       
        

          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
</svg>


           <span class="text-[15px] ml-4 text-gray-400">Customers</span>
     
       
       
      </div>
      <div class="p-3  mt-3 flex items-center  duration-300 cursor-pointer hover:bg-blue-100 hover:text-black   text-white">
      
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008z" />
            </svg>



          <span class="text-[15px] ml-4 text-gray-400 ">Products</span>
     

      </div>
      <div class="p-3  mt-3 flex items-center  duration-300 cursor-pointer hover:bg-blue-100 hover:text-black   text-white">
    
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>

          <span class="text-[15px] ml-4 text-gray-400 ">Orders</span>
       
      </div>
     

    

    
      

    </div>

  

  

</template>
<script>

export default {
  name: "index",
  data() {
    return {
      showLib: false,
    };
  },
  methods: {
    getRoute() {
      const routeArr = this.$route.path.split("/");
      return routeArr[1];
    },
    close(e) {
      if (!this.$el.contains(e.target)) {
        this.showLib = false;
      }
    },

  }
};
</script>

<style scoped>
.bg-side {
  background-color: #02386e;

}
</style>
