import React from 'react'
import {Link} from 'react-router-dom'
import s from '../styles/header.module.css'

export default function Header() {
  return (
    <div className={s.container}>
      <div >
        <img src='https://www.homeelementsweb.com/wp-content/uploads/2020/12/logo-homeelements-4.png' alt='...' width='60'  />
        </div>
         <div className={s.h3}>
            <div >
              <Link to={'/'}  >
            <h3 className={s.inicio}>INICIO</h3></Link> 
            </div>
            <div>
            <h2>CATEGORIAS</h2>
            </div>
            </div>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='...' width='20'  />
              </div>  
    </div>
  )
}
