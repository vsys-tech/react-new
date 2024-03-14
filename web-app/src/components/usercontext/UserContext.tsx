import React, {createContext, useState} from "react";


type UserContextProviderProps ={
    children : React.ReactNode
}

type ContextUser = {
    name : string ,
    email : string
}

type ContextUserType = {
    user : ContextUser | null;
    setUser : React.Dispatch<React.SetStateAction<ContextUser | null>>;
}


export const UserContext = createContext<ContextUserType | null>(null);

export const UserContextProvider = ({children}: UserContextProviderProps) =>{
    const [user, setUser] = useState<ContextUser | null>(null);
    return (
        <>
            <UserContext.Provider value={{ user, setUser}}>
                {children}
            </UserContext.Provider>
        </>
    );

}