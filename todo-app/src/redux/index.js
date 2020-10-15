import React, { createContext, useContext, useReducer } from "react"

const StoreContext = createContext()

export const StoreProvider = ({ reducer, initialState, children }) => {
    return (
        <StoreContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StoreContext.Provider>
    )
}

export const useStoreContext = () => useContext(StoreContext)

/** Merge reducer */
export const combineReducers = (reducers) => {
    return (state, action) => {
        const result = {}
        Object.entries(reducers).forEach(([storeName, reduceFunc]) => {
            result[storeName] = reduceFunc(state[storeName], action)
        })

        return result
    }
}
