
import PeliculaIndividual from './PeliculaIndividual'
import { pelicula } from './peliculas.model'
import css from './ListadoPeliculas.module.css'
//import Cargando from '../Utils/Cargando'
import ListadoGenerico from '../Utils/ListadoGenerico'

const ListadoPeliculas = (props: listadoPeliculasProps ) => {

return (
    <ListadoGenerico listado={props.peliculas}>
        <div className={css.div}>
            {
                props.peliculas?.map(pelicula=>
                    <PeliculaIndividual key={pelicula.id} pelicula={pelicula}
                    />)
            }
        </div>
    </ListadoGenerico>

)
// if(!props.peliculas){
//     return <><Cargando /></>
// }
// else if( props.peliculas.length === 0){
//     return <>No hay peliculas para mostrar</>
// }
// else {
//     return (
//         <div className={css.div}>
//         {props.peliculas.map(pelicula=><PeliculaIndividual key={pelicula.id} 
//                                                         pelicula={pelicula}
//                                         />)}
//         </div>
//         )
//     }


}
interface listadoPeliculasProps{
    peliculas?: pelicula[]
}
export default ListadoPeliculas