import{ 
    GET_PRODUCTS,
    GET_BY_NAME,
    GET_CATEGORY,
    SEARCH_CATEGORY
} from './action'



const initialState={
  AllProducts:[],
  AllCategories:[],
  products : []
}


const rootReducer = (state = initialState, action)=>{
    switch(action.type){
     
     case GET_PRODUCTS:{
        return{
            ...state,
            AllProducts: action.payload,
            products: action.payload
        }
     }
     
     case GET_BY_NAME:{
        return{
            AllProducts: action.payload
        }
     }

     case GET_CATEGORY:{
        // console.log('TODAS LAS CATEGORY',action.payload)
        return{
         ...state,
         AllCategories: action.payload
        }
     }
      
     case SEARCH_CATEGORY:{
        // console.log('estas es la action.payload', action.payload)
        const cate = state.products
                console.log('esto es cate', cate)

        const filtro = action.payload == ""? cate : cate.filter(e => 
            {
               return e.category.name?.includes(action.payload) })
        console.log('esto es el filtro', filtro)
        return{
            ...state,
           AllProducts: filtro
        }
     }

        default: {
           return state; }
    }
}

export default rootReducer