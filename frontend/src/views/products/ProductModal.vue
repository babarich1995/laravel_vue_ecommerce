
<template>
  <TransitionRoot as="template" :show="show">
    <Dialog as="div" class="relative z-10" @close="show = false">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                       leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-70 transition-opacity"/>
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div class="flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0">
          <TransitionChild as="template" enter="ease-out duration-300"
                           enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                           enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                           leave-from="opacity-100 translate-y-0 sm:scale-100"
                           leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
            <DialogPanel
              class="relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-[700px] sm:w-full">
  
              <header class="py-3 px-4 flex justify-between items-center">
                <DialogTitle as="h3" class="text-lg leading-6 font-medium text-gray-900">
                  {{ product.id ? `Update product: "${props.product.title}"` : 'Create new Product' }}
                </DialogTitle>
                <button
                  @click="closeModal()"
                  class="w-8 h-8 flex items-center justify-center rounded-full transition-colors cursor-pointer hover:bg-[rgba(0,0,0,0.2)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </header>
              <form @submit.prevent="onSubmit">
                <div class="bg-white px-4 pt-5 pb-4">
                    <div>
                     <CustomInput class="mb-2" v-model="product.title" label="Product Title"/>   
                    </div>
                  <div>
                    <CustomInput type="file" class="mb-2" label="Product Image" @change="file => product.image = file"/>
                  </div>
                  <div>
                     <CustomInput type="textarea" class="mb-2" v-model="product.description" label="Description"/>
                  </div>
                 <div>
                    <CustomInput type="number" class="mb-2" v-model="product.price" label="Price" prepend="$"/>
                 </div>
                  <div>
                    <CustomInput type="checkbox" class="mb-2" v-model="product.published" label="Published"/>
                  </div>
                  
                </div>
                <footer class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <NButtonLoading :loading="loading" class="mt-3 w-full inline-flex justify-center  shadow-sm px-4 py-2  text-base font-medium text-gray-700 hover:bg-green-900 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                    Submit
                   </NButtonLoading>
                  <button type="button"
                          class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                          @click="closeModal" ref="cancelButtonRef">
                    Cancel
                  </button>
                </footer>
              </form>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {computed, onUpdated, ref} from 'vue'
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
import {ExclamationCircleIcon} from '@heroicons/vue/24/outline'
import CustomInput from "../../components/core/CustomInput.vue";
import NButtonLoading from "../../components/core/NButtonLoading.vue";
import Spinner from "../../components/core/Spinner.vue";
import { useProductStore } from '../../store/productStore';
import {useNotifyStore} from '../../store/notifyStore'

const product = ref({
  id: props.product.id,
  title: props.product.title,
  image: props.product.image,
  description: props.product.description,
  price: props.product.price,
  published: props.product.published
})


const store = useProductStore()
const notifyStore = useNotifyStore()
const loading = ref(false)

const props = defineProps({
  modelValue: Boolean,
  product: {
    required: true,
    type: Object,
  }
})

const emit = defineEmits(['update:modelValue', 'close'])

const show = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

onUpdated(() => {
  product.value = {
    id: props.product.id,
    title: props.product.title,
    image: props.product.image,
    description: props.product.description,
    price: props.product.price,
    published: props.product.published,
  }
})

function closeModal() {
  show.value = false
  emit('close')
}

function onSubmit() {
  loading.value = true
  if (product.value.id) {
    store.updateProduct(product.value)
      .then(response => {
        loading.value = false;
        if (response.status === 200) {
           notifyStore.notify({
             type: "success",
             message: "The product was successfully updated",
             });
          store.getProducts()
          closeModal()
        }
      })
  } else {
    store.createProduct(product.value)
      .then(response => {
        loading.value = false;
        if (response.status === 201) {
            notifyStore.notify({
             type: "success",
             message: "The product was successfully created",
             });
          store.getProducts()
          closeModal()
        }
      })
      .catch(err => {
        loading.value = false;
          notifyStore.notify({
             type: "error",
             message: "Sorry there is something wrong with your request",
             });
      })
  }
}
</script>
