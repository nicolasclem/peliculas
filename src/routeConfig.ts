import Home from './Home'
import IndiceGeneros from './Generos/IndiceGeneros';
import CrearGenero from './Generos/CrearGenero';
import EditarGenero from './Generos/EditarGenero';
import CrearActor from './Actores/CrearActor';
import EditarActor from './Actores/EditarActor';
import IndiceActores from './Actores/IndiceActores';
import CrearCine from './Cines/CrearCine';
import EditarCine from './Cines/EditarCine';
import IndiceCines from './Cines/IndiceCines';
import CrearPelicula from './Peliculas/CrearPelicula';
import EditarPelicula from './Peliculas/EditarPelicula';
import FiltrarPelicula from './Peliculas/FiltrarPelicula';
import RedireccionarHome from './Utils/RedireccionarHome';
const rutas =[
    
    {path:"/generos/crear" ,componente:CrearGenero },
    {path:"/generos/editar/:id" ,componente:EditarGenero },
    {path:"/generos" ,componente:IndiceGeneros },
    
    {path:"/actores/crear" ,componente:CrearActor },
    {path:"/actores/editar/:id" ,componente:EditarActor },
    {path:"/actores" ,componente:IndiceActores },
    
    {path:"/cines/crear" ,componente:CrearCine },
    {path:"/cines/editar/:id" ,componente:EditarCine },
    {path:"/cines" ,componente:IndiceCines },
    
    {path:"/peliculas/crear" ,componente:CrearPelicula },
    {path:"/peliculas/editar/:id" ,componente:EditarPelicula },
    {path:"/peliculas/filtrar" ,componente:FiltrarPelicula },

    {path:"/", componente:Home },
    {path:"*", componente:RedireccionarHome },
]

export default rutas;