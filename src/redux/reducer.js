import{ 
    GET_PRODUCTS,
    GET_BY_NAME,
    GET_CATEGORY
} from './action'



const initialState={
  AllProducts:[],
  AllCategories:[]
}


const rootReducer = (state = initialState, action)=>{
    switch(action.type){
     
     case GET_PRODUCTS:{
        return{
            ...state,
            AllProducts: action.payload
        }
     }
     
     case GET_BY_NAME:{
        return{
            AllProducts: action.payload
        }
     }

     case GET_CATEGORY:{
        console.log('TODAS LAS CATEGORY',action.payload)
        return{
         ...state,
         AllCategories: action.payload
        }
     }
        default: {
           return state; }
    }
}

export default rootReducer