import { createContext, ReactNode, useState } from "react";

type UserContextProps = {
  children: ReactNode;
};

type UserContextType = {
  token: string;
  setToken: (newState: any) => void;
};

const initialValue = {
  token: "",
  setToken: () => {},
};


if((localStorage.getItem("userToken"))){
  initialValue.token = JSON.parse(localStorage.getItem("userToken") || "")
}

export const UserContext = createContext<UserContextType>(initialValue);

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [token, setToken] = useState(initialValue.token);

  return (
    <UserContext.Provider value={{ token, setToken }}>
      {children}
    </UserContext.Provider>
  );
};
