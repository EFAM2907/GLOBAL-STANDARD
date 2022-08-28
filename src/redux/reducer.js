import{ 
    GET_PRODUCTS
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

        default: {
           return state; }
    }
}

export default rootReducer