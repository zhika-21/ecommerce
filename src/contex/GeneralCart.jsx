import { createContext,useReducer } from "react";
import * as actions from './actions'

export const CartContext = createContext([])
const initialState = []

const cartReducer = (state,action) =>{

    switch(action.type){
        case actions.ADDTOCAR:
            return [...state,action.payload]
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