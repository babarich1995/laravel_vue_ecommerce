import { defineStore } from 'pinia';
import axiosClient from '../axios';

export const useProductStore = defineStore('product',{
    state: () => ({
      products:{
        loading: false,
        data: [],
        links: [],
        from: null,
        to: null,
        page: 1,
        limit: null,
        total: null
      }
        
          
    }),
    actions: {
        async getProducts({url = null, search = '', per_page, sort_field, sort_direction} = {}) {
            this.products.loading= true
            url = url || '/products'
            const params = {
              per_page: this.products.limit,
            }
            try {
                const response = await axiosClient.get(url, {
                    params: {
                        ...params,
                        search, per_page, sort_field, sort_direction
                    }
                });
                this.products.loading = false;
                let data = response.data;
                if (data) {
                    this.products = {
                        ...this.products,
                        data: data.data,
                        links: data.meta?.links,
                        page: data.meta.current_page,
                        limit: data.meta.per_page,
                        from: data.meta.from,
                        to: data.meta.to,
                        total: data.meta.total,
                    };
                }
            } catch {
                this.products.loading = false;
            }
          },

          createProduct(product) {
            if (product.image instanceof File) {
              const form = new FormData();
              form.append('title', product.title);
              form.append('image', product.image);
              form.append('description', product.description || '');
              form.append('published', product.published ? 1 : 0);
              form.append('price', product.price);
              product = form;
            }
            return axiosClient.post('/products', product)
          },


          updateProduct(product) {
            const id = product.id
            if (product.image instanceof File) {
              const form = new FormData();
              form.append('id', product.id);
              form.append('title', product.title);
              form.append('image', product.image);
              form.append('description', product.description || '');
              form.append('published', product.published ? 1 : 0);
              form.append('price', product.price);
              form.append('_method', 'PUT');
              product = form;
            } else {
              product._method = 'PUT'
            }
            return axiosClient.post(`/products/${id}`, product)
          },
          getProduct(id) {
            return axiosClient.get(`/products/${id}`)
          },
          deleteProduct(id) {
            return axiosClient.delete(`/products/${id}`)
          }
    }
});