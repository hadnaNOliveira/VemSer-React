import { createContext, useState } from "react";

const NYContext = createContext();

function NYContextProvider({children}) {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  return(
    <NYContext.Provider value={{list, setList, loading, setLoading}}>
      {children}
    </NYContext.Provider>
  )
}

export { NYContext, NYContextProvider };