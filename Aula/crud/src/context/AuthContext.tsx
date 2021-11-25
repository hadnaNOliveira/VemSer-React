import React, {createContext, useState, useEffect} from "react";
import api from "../api";

const AuthContext = createContext({});

interface Values {
  usuario: string;
  senha: string;
}

//Todo separar a interface em 1 arquivo para parar de duplicar

const AuthProvider: React.FC<any> = ({ children }) => {
  
  useEffect(() => {
    console.log('teste')
  },[])

const handleLogin = async(user: Values) => {
  const {data} = await api.post('/auth', user);
}

  const [auth, setAuth] = useState(false);
  return (
    <AuthContext.Provider value={{ auth, handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}

export {AuthContext, AuthProvider};