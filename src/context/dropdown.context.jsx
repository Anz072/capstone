import { createContext, useState } from "react";

export const DropdownContext = createContext({
    opened: false,
    setOpened: () => {}
});

export const DropdownContextProvider = ({children}) =>{
    const [opened, setOpened] = useState(false);

    const value = {
        opened,
        setOpened
    };

    
    return <DropdownContext.Provider value={value}>{children}</DropdownContext.Provider>
} 