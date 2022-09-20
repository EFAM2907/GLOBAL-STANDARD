import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_BY_NAME = 'GET_BY_NAME';
export const GET_CATEGORY = 'GET_CATEGORY'
export const SEARCH_CATEGORY = 'SEARCH_CATEGORY'


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
            const category = data.map(e => e.category.name)
            let uniqueCategory = [...new Set(category)]
            
            dispatch({type:GET_CATEGORY, payload: uniqueCategory })
         }
         
         )
      }
   }

   export function searchByCategory(string){
      return  (dispatch) => {
        dispatch({type:SEARCH_CATEGORY, payload: string})
      }
   }

