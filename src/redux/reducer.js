import{ 
    GET_PRODUCTS,
    GET_BY_NAME
} from './action'



const initialState={
  AllProducts:[]
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

        default: {
           return state; }
    }
}

export default rootReducer