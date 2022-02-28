import axios from  'axios'

export const apiClient = axios.create({
    baseURL:'http://94.158.54.194:9092',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    getProducts(){
        return apiClient.get(`/api/product`)
    },
    postProduct(){
        return apiClient.post(`/api/product`)
    },
    deleteProduct(id){
        return apiClient.delete(`/api/product/${id}`)
    },
    editProduct(id, data){
        return apiClient.put(`/api/product/?id=${id}`, data)
    }
}