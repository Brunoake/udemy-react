// Criar context
import { Children, createContext, useState } from "react";


export const CounterContext = createContext();

// Criar provider
export const CounterContextProvider = ({Children}) => {

    const [counter, setCounter] = useState(5);

    return (
        <CounterContext.Provider  value={{counter, setCounter}}>
            {Children}
        </CounterContext.Provider>
    );
};