import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export function getProducts(){
return async(dispatch) => {
   const api = await axios.get('https://api.escuelajs.co/api/v1/products')
   dispatch({type:GET_PRODUCTS, payload: api.data})
}
}



