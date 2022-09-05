import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getCategory} from '../../../redux/action'
import s from '../styles/header.module.css'

export default function Header() {
  
  const Category = useSelector(state => state.AllCategories)
  
  const[data, setData] = useState([])

 useEffect(()=>{
  
  fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(r => setData(r.map(res =>(
    <h1>{res.title}</h1>
  ))))

 }, [])

  console.log('esto es cate',data)

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
