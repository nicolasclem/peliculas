import { ReactElement, useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'

import { actorPeliculaDTO } from './actores.model';

const TypesaheadActores = (props: typeAheadActoresProps) => {
    
    const actores: actorPeliculaDTO[]=[
        {id:1,nombre:"Ricardo Darin",personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BMTgxOTAyMTAzNV5BMl5BanBnXkFtZTcwODE2MTUzOA@@._V1_UX214_CR0,0,214,317_AL_.jpg'},
        {id:2,nombre:"Tom Hardy",personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_UX214_CR0,0,214,317_AL_.jpg'},
        {id:3,nombre:"Leonardo Di caprio",personaje:'',foto:'https://m.media-amazon.com/images/M/MV5BMjI0MTg3MzI0M15BMl5BanBnXkFtZTcwMzQyODU2Mw@@._V1_UY317_CR10,0,214,317_AL_.jpg'}
    ]
    const seleccion: actorPeliculaDTO[]=[]

    const[elementoArrastrado, setElementoArrastrado]= 
    useState<actorPeliculaDTO | undefined>(undefined)
    function manejarDragStart(actor:actorPeliculaDTO)
    {
        setElementoArrastrado(actor)
    }
    function manejarDragOver(actor:actorPeliculaDTO)
    {
        if(!elementoArrastrado)
        {
            return
        }
        if(actor.id !== elementoArrastrado.id)
        {
            const elementoArrastradoIndice= 
                props.actores.findIndex(x=>x.id === elementoArrastrado.id)
            const actorIndice=
                props.actores.findIndex(x=>x.id === actor.id)

            const actores=[...props.actores]
            actores[actorIndice]=elementoArrastrado
            actores[elementoArrastradoIndice]=actor

            props.onAdd(actores);

        }
    }
    return (
    <>
        <label>Actores</label>
        <Typeahead
        id="typeahead"
        onChange={actores=>{
            if(props.actores.findIndex(x=>x.id === actores[0].id)===-1){

                props.onAdd([...props.actores,actores[0]])
            }
            
        }}
        options={actores}
        labelKey={actor=> actor.nombre}
        filterBy={['nombre']}
        placeholder='Escriba el nombre del actor'
        minLength={3}
        flip={true}
        selected={seleccion}
        renderMenuItemChildren={actor=>(
            <>
                <img alt='imagen de actor' src={actor.foto} 
                style={{
                    height:'64px',
                    marginRight:'10px',
                    width:'64px'

                }}/>
                <span>{actor.nombre}</span>
            </>


        )

        }
        />
        <ul className='list-group'>
            {props.actores.map(actor=><li
            draggable={true}
            onDragStart={()=>manejarDragStart(actor)}
            onDragOver={()=>manejarDragOver(actor)}
            className='list-group-item list-group-item-action'
            key={actor.id}>
                {props.listadoUI(actor)}
                <span className='badge badge-danger badge-pill pointer'
                    style={{marginLeft:'0.5rem'}}
                    onClick={()=>props.onRemove(actor)}
                >X</span></li>)}
        </ul>
    </>
  )
}
interface typeAheadActoresProps{
    actores: actorPeliculaDTO[];
    onAdd(actores: actorPeliculaDTO[]):void
    listadoUI(actor: actorPeliculaDTO):ReactElement;
    onRemove(actor: actorPeliculaDTO):void
}
export default TypesaheadActores