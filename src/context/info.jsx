import { createContext } from "react";

const CarneContext = createContext();

export const CarneProvider = ({children}) => {
    return (
        <CarneContext.Provider>
            {children}
        </CarneContext.Provider>
    )
}