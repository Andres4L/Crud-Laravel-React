
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MostrarUsuarios from './components/MostrarUsuarios';
import CrearUsuarios from './components/CrearUsuarios';
import EditarUsuarios from './components/EditarUsuarios';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/create' element={<MostrarUsuarios/>}/>
            <Route path='/registro' element={<CrearUsuarios/>}/> 
            
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
