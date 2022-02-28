<template>
    <div v-if="toggleModal" class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50">
        <div class="relative mx-auto w-auto max-w-2xl">
            <div class="p-5 bg-white w-full rounded shadow-2xl flex flex-col">
                <h2 class="text-2xl font-bold">Hello</h2>
                <form class="p-5 grid grid-cols-2 gap-2" @submit.prevent="postProducts">
                    <div>
                        <label for="product-id" class="mr-2">Id</label>
                        <input name="id" type="text" class="border-2 outline-none w-full p-1" v-model="toggleProduct.product_type_id">
                    </div>
                    <div>
                        <label for="product-name" class="mr-2">Name</label>
                        <input name="name" type="text" class="border-2 outline-none w-full p-1" v-model="toggleProduct.name_uz">
                    </div>
                    <div>
                        <label for="product-price" class="mr-2">Price</label>
                        <input name="cost" type="text" class="border-2 outline-none w-full p-1" v-model="toggleProduct.cost">
                    </div>
                    <div>
                        <label for="product-price" class="mr-2">Address</label>
                        <input name="cost" type="text" class="border-2 outline-none w-full p-1" v-model="toggleProduct.address">
                    </div>
                </form>
                <div class="flex justify-around">
                    <button
                    class=" rounded  bg-green-500 text-white px-6 mt-1 py-2 w-3/12 m-auto mb-3"
                    @click="toggleModal = !toggleModal"
                    >Yo'q</button>
                    <button
                    class=" rounded  bg-green-500 text-white px-6 mt-1 py-2 w-3/12 m-auto mb-3"
                    @click="editProduct(toggleProduct.id)"
                    >Xa</button>
                </div>
            </div>
        </div>
    </div>
    <tr>
        <td class="border border-slate-700">{{ product.product_type_id }}</td>
        <td class="border border-slate-700">{{ product.name_uz }}</td>
        <td class="border border-slate-700">{{ product.cost }}</td>
        <td class="border border-slate-700">{{ product.address }}</td>
        <td class="flex justify-center border border-slate-700">
            <button class="mr-3" @click="deleteProduct(product.id)">
                <img :src="deleteImg" alt="delete image" width="24" height="24">
            </button>
            <button class="mr-3" @click="toggleEditProduct(product)">
                <img :src="editImg" alt="edit image" width="24" height="24">
            </button>
            <button>
                <img :src="showImg" alt="delete image" width="24" height="24">
            </button>
        </td></tr>

    </template>
    <script>
        import EventServices from '../../services/EventServices'
        import Delete from '../assets/Delete.svg'
        import Edit from '../assets/Edit.svg'
        import Show from '../assets/Show.svg'
        export default {
            name:"ProductListItem",
            props:["product"],
            data(){
                return{
                    toggleModal:false,
                    deleteImg:Delete,
                    editImg:Edit,
                    showImg:Show,
                    toggleProduct:[]
                }
            },
            methods:{
                deleteProduct(id){
                    EventServices.deleteProduct(id).then(window.location.reload())
                },
                toggleEditProduct(product){
                    this.toggleModal = !this.toggleModal
                    this.toggleProduct = product
                },
                editProduct(id){
                    EventServices.editProduct(id, {
                        id:this.product.id,
                        product_type_id:this.toggleProduct.product_type_id,
                        name_uz:this.toggleProduct.name_uz,
                        cost:this.toggleProduct.cost,
                        address:this.toggleProduct.address,
                        created_date:1646035643000
                    }).then(res => {
                        console.log(res.data)
                    })
                    this.toggleModal = !this.toggleModal
                }
            },
        }
    </script>

    <style scoped>

    </style>