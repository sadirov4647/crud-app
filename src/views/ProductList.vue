<template>
  <table class="w-full border-separate border border-slate-500 table-fixed ">
    <thead>
      <tr>
        <th class="border border-slate-600 ">Product ID</th>
        <th class="border border-slate-600 ">Product Name</th>
        <th class="border border-slate-600 ">Product Cost</th>
        <th class="border border-slate-600 ">Address</th>
        <th class="border border-slate-600 ">Created Date</th>
      </tr>
    </thead>
    <tbody>
      <ProductListItem :product="product" v-for="(product, id) in products" :key="id"/>
    </tbody>
  </table>
  <section class="mt-4">
    <button class="bg-blue-400  mr-2 text-white p-1 rounded hover:bg-gray-100  hover:text-blue-400 " :disabled="page === 1" @click="page--">Oldingi</button>
    <button class="bg-blue-400 text-white p-1 rounded hover:bg-gray-100  hover:text-blue-400 " :disabled="products.length == 0" @click="page++">Keyingi</button>
  </section>
</template>

<script>

  import ProductListItem from '../components/ProductListItem.vue'
  import EventServices from '../../services/EventServices'
  import axios from 'axios'
  export default {
    name:"ProductList",
    data(){
      return{
        products:[],
        perPage: 4,
        page: 1,
      }
    },
    components:{
      ProductListItem
    },
    computed: {
      pagination() {
        return {
          perPage: 4,
          page: (this.page - 1) * this.perPage + 1,
        };
      },
    },
    watch: {
      pagination: {
        deep: true,
        immediate: true,
        handler: 'fetchProduct',
      },
    },
    methods: {
      async fetchProduct() {
        const { page, perPage } = this.pagination;
        const response = await axios.get('http://94.158.54.194:9092/api/product', {
          params: { page, perPage },
        });
        this.products = response.data;
        console.log(response.data)
      },
    },
  }
</script>
