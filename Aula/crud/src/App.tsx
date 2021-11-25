import React from 'react';
import './App.css';
import Routers from "./routers";
import {AuthProvider} from "./context/AuthContext";


function App() {
  return (
    <AuthProvider>
      <Routers />
    </AuthProvider>
  );
}

export default App;
