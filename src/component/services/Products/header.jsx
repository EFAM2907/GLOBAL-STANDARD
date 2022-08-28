import React from 'react'
import s from '../styles/header.module.css'

export default function Header() {
  return (
    <div className={s.container}>
      <div >
        <img src='https://www.homeelementsweb.com/wp-content/uploads/2020/12/logo-homeelements-4.png' alt='...' width='60'  />
        </div>
         <div>
            <h3>INICIO</h3>
            <h3>CATEGORIAS</h3>
            </div>
            <div>
              <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='...' width='20'  />
              </div>  
    </div>
  )
}
