<template>
  <div class="flex items-center justify-between mb-3 mt-20">
    <h1 class="text-3xl font-semibold">Products</h1>
    <button type="button"
            @click="showAddNewModal()"
            class="py-2 px-4 border inline-flex border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
    <PlusCircleIcon class="w-6 h-6 mr-2"/>
      Add new Product
    </button>
  </div>
  <ProductsTable @clickEdit="editProduct"/>
  <ProductModal v-model="showProductModal" :product="productModel" @close="onModalClose"/>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {PlusCircleIcon} from "@heroicons/vue/24/outline"
import ProductModal from "./ProductModal.vue";
import ProductsTable from "./ProductsTable.vue";
import { useProductStore } from "../../store/productStore";

const DEFAULT_PRODUCT = {
  id: '',
  title: '',
  description: '',
  image: '',
  price: ''
}
const store = useProductStore()
const products = computed(() => store.products);

const productModel = ref({...DEFAULT_PRODUCT})
const showProductModal = ref(false);

function showAddNewModal() {
  showProductModal.value = true
}

function editProduct(p) {
  store.getProduct(p.id)
    .then(({data}) => {
      productModel.value = data
      showAddNewModal();
    })
}

function onModalClose() {
  productModel.value = {...DEFAULT_PRODUCT}
}
</script>

<style scoped>

</style>
