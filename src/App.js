
import './App.css';
import {RouterProvider} from 'react-router-dom';
import router from './Component/Routes/Routes';
import { createContext, useState } from 'react';



export const ThemeContext = createContext(null);
function App() {

  const [theme, setTheme] = useState("light");
  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }
  return (

    <ThemeContext.Provider value={{theme, toggleTheme}}>
     <div className="App"  id={theme}>
      <div className='switch'>
        
       
      <RouterProvider router={router}></RouterProvider>
      
      </div>

    </div>
   </ThemeContext.Provider>
  );
}

export default App;



