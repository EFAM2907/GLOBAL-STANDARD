import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_CATEGORY = 'GET_CATEGORY'

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

   export function getCategory(){
      return (dispatch) =>{
         fetch('https://api.escuelajs.co/api/v1/products')
         .then(res => res.json())
         .then(data =>{
         
            let cate = []
            
            if(data.category.name != undefined){
               cate = data.category.name
            }
            console.log('esto es cate',cate)
            dispatch({type:GET_CATEGORY, payload: cate })
         }
         
         )
      }
   }

