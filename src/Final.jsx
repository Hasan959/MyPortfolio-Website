import React from 'react'
import { links } from './Data'
import { NavLink } from 'react-router'

const Final = () => {
  return (
    <nav className='nav'>
        <div className='nav-menu'>
            <ul className='nav-list grid'>
                {links.map(({name,icon,path},index) => {
                    return(
                        <li className='nav-item' key={index} >
                            <NavLink to={path} className={ (isActive) => isActive ? 'nav-link active-nav' : 'nav-link' }>

                              {icon} 
                              <h3 className='nav-name'> {name} </h3>

                            </NavLink>

                        </li>

                    )
                })
                }

            </ul>
        </div>
    </nav>
  )
}

export default Final