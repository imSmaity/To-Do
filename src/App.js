
import { createContext, useState } from 'react';
import './App.css';
import Home from './pages/Home';

export const listContext=createContext()
function App() {
  const [list,setList]=useState([])
  return (
    <div className="App">
      <listContext.Provider value={{list,setList}}>
        <Home/>
      </listContext.Provider>
    </div>
  );
}

export default App;
