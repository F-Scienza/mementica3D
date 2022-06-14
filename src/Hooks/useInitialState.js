import { useState } from 'react'
import initialState from '../initialState'

const useInitialState = ()=>{
    const [state, setState] = useState( initialState )
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
    const createBuyer = buyer =>{
        setState({
            ...state,
            buyer: buyer
            }
        )
    }

    return{
        addToCart,
        removeFromCart,
        createBuyer,
        state
    }
}

export default useInitialState