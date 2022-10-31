import React from 'react'
import { NavLink } from 'react-router-dom'

const Menu = () => {

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
            <NavLink className='navbar-brand' to='/'> React Peliculas</NavLink>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0 '>
                    <li className='nav-item flex-direction: row'>
                        <NavLink className='nav-link'   to='/generos'>
                            Generos
                        </NavLink>
                        <NavLink className='nav-link'   to='/actores'>
                            Actores
                        </NavLink>
                        <NavLink className='nav-link'   to='/cines'>
                            Cines
                        </NavLink>
                        <NavLink className='nav-link'   to='/peliculas/filtrar'>
                            Filtrar Peliculas 
                        </NavLink>
                        <NavLink className='nav-link'   to='/peliculas/crear'>
                            Crear Peliculas 
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
  )
}

export default Menu