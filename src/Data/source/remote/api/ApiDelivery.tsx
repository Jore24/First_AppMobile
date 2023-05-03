import axios from 'axios';


export const ApiDelivery = axios.create({
    baseURL: "http://192.168.1.26:3000/api",
    headers: {
        'Content-Type': 'application/json'
    }

})

export const ApiDeliveryForImage = axios.create({
    baseURL: "http://192.168.1.26:3000/api",
    headers: {
        'Content-type': 'multipart/form-data',
        'accept': 'application/json',
    }

})





