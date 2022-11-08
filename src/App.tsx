
import './App.css';
import Menu from './Utils/Menu';
//import IndiceGeneros from './Generos/IndiceGeneros'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import Home from './Home';
import rutas from './routeConfig';
import configurarValidaciones from './validaciones';


configurarValidaciones()
function App() {

  return (
  
  
  <BrowserRouter>
  
    <Menu />
    <div className='container'>
   <Routes>

   {/* <Route path="/" element={<Home />}/>
   
  
   <Route path="/generos" element={<IndiceGeneros />}/> */}

   {rutas.map(ruta=> <Route key={ruta.path} path={ruta.path} element={<ruta.componente />} />)}
  
 
 
   </Routes>
   </div>
   </BrowserRouter>
  );
}

export default App;
