import React, { createContext, useContext, useState, useEffect } from 'react';

export const stateContext = createContext();

const getFreshContext = () => {
     if (localStorage.getItem('context') === null)
        localStorage.setItem('context', JSON.stringify({
            participantId: 0,
            timeTaken: 0,
            selectedOptions: []
        }))
    return JSON.parse(localStorage.getItem('context'))
}


//permet de faire en sorte que les composants enfants accèdent effectivement aux données
export default function useStateContext() {
    const { context, setContext } = useContext(stateContext)
    return {
        context,
        setContext: obj => { 
            setContext({ ...context, ...obj }) },
        resetContext: ()=>{
            localStorage.removeItem('context')
            setContext(getFreshContext())
        }
    };
}

//permet de fournir des données aux composants enfants ( remplace les props )
export function ContextProvider ({children}) {
    const [context , setContext ] = useState(getFreshContext());

    useEffect(() => {
        localStorage.setItem('context', JSON.stringify(context))
    }, [context])
    
  return (
    <stateContext.Provider value={{context , setContext}}>
        {children}
    </stateContext.Provider>
  )
}
