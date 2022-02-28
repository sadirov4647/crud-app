<template>
  <h1 class="text-black-700 text-xl mb-4">Products</h1>
  <div class="border-2">
    <h4 class="p-4 bg-gray-100 text-left">Add a new product</h4>
    <p class="text-red-500 mt-2" v-if="empty">Iltimos inputlarni to'ldiring!</p>
    <form class="py-5 flex flex-row justify-between items-end" @submit.prevent="postProducts">
      <div>
        <label for="product-id" class="mr-2">Id</label>
        <input name="id" type="number" class="border-2 outline-none" v-model="id" required>
      </div>
      <div>
        <label for="product-name" class="mr-2">Name</label>
        <input name="name" type="text" class="border-2 outline-none" v-model="name" required>
      </div>
      <div>
        <label for="product-price" class="mr-2">Price</label>
        <input name="cost" type="number" class="border-2 outline-none" v-model="price" required>
      </div>
      <div>
        <label for="product-price" class="mr-2">Address</label>
        <input name="cost" type="text" class="border-2 outline-none" v-model="address" required>
      </div>
      <button type="submit" class="whitespace-nowrap px-4 text-white bg-blue-400 hover:bg-white hover:text-blue-400 border-2">Add</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
  import EventServices from '../../services/EventServices'
  export default {
    name: "AddProducts",
    data(){
      return{
        id:"",
        name:"",
        price:"",
        address:"",
        empty:false
      }
    },
    methods:{
      postProducts(){
        if(this.id == "" && this.name == "" && this.price == "" && this.address == ""){
          this.empty = !this.empty
          setTimeout(() => {
            this.empty = !this.empty
          },1000)
        }else{
          axios.post("http://94.158.54.194:9092/api/product", {
            product_type_id:this.id,
            name_uz:this.name,
            cost:this.price,
            address:this.address,
            created_date:new Date().getDate()
          }).then(res => {
            console.log(res.data)
          })
        }
      }
    }
  };
</script>
<style scoped>
</style>
