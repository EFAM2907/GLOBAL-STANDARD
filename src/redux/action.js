import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_BY_NAME = 'GET_BY_NAME';


export function getProducts(){
return async(dispatch) => {
   const api = await axios.get('https://api.escuelajs.co/api/v1/products')
   dispatch({type:GET_PRODUCTS, payload: api.data})
}
}

export function getByName(name){
   return async(dispatch) => {
      const api = await axios.get('https://api.escuelajs.co/api/v1/products')
  console.log('desde name', name)
    const filter = api.data.filter(e => e.title.toLowerCase().includes(name.toLowerCase()))

      dispatch({type:GET_BY_NAME, payload: filter})
   }
   }


