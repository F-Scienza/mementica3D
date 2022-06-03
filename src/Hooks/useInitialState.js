import { useState } from 'react'
import initialState from '../initialState'

const useInitialState = ()=>{
    const [state, setState] = useState(initialState)
    
    // creo hooks

    const addToCart = (payload) =>{
        setState({
            ...state,
            cart: [...state.cart, payload]
        })
    }
    const removeFromCart = payload =>{
        setState({
            ...state,
            cart: state.cart.filter(items => items.id !== payload.id)
        })
    }
    const setBuyer = (buyerInfo) =>{
        setState({
            ...state,
            buyer: [...state.buyer, buyerInfo]
                /*    name: buyerInfo.fname,
                lastName: buyerInfo.lname,
                mail: buyerInfo.email,
                state: buyerInfo.state,
                city: buyerInfo.city, 
                adr: buyerInfo.adr,
                zip: buyerInfo.zip
                ],
                */  
        });
    }

    return{
        addToCart,
        removeFromCart,
        setBuyer,
        state
    }
}

export default useInitialState