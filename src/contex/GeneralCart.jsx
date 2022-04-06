import { createContext,useReducer } from "react";
import * as actions from './actions'

export const CartContext = createContext([])
const initialState = []

const cartReducer = (state,action) =>{

    switch(action.type){
        case actions.ADDTOCAR:
            // i can check if the product exist alredy if exist maybe i just modify that product and return the state
            // if the product doesnt exist just like the next line
            return [...state,action.payload]
        case actions.REMOVEPRODUCT:
            return state.filter(product => product.id !== action.payload)
        default:
            return state
    }
}
const CardProvider = ({children}) =>{
    const [allProductsInCart,dispacher] = useReducer(cartReducer,initialState)
    const data = {
        dispacher:dispacher,
        allProductsInCart:allProductsInCart
    }
    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}
export default CardProvider