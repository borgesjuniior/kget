import React, { createContext, ReactNode, useState } from 'react';


interface UserProviderProps { //
  children: ReactNode;
}

interface UserProps {
  userInfo: string;
  setInfo: (data) => void;
}

export const UserContext = createContext({} as UserProps);


export const UserProvider: React.FC<UserProviderProps> = ({children}) => {
    const [ userInfo, setUserInfo ] = useState();

    function setInfo(data) {
      setUserInfo(data)
    }

    return (
        <UserContext.Provider value={{ userInfo, setInfo }}>
          {children}
        </UserContext.Provider>
    )
;}