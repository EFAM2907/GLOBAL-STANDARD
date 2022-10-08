import React, {useEffect, useState} from 'react'
import {searchByCategory} from '../../../redux/action'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'
import s from '../styles/header.module.css'

export default function Header({setPagina}) {
  
  const Category = useSelector(state => state.AllCategories)
  
  // console.log('desde category', Category)  
   const dispatch = useDispatch()
 
const categories = (e) =>{
 e.preventDefault();
 dispatch(searchByCategory(e.target.value))
 setPagina(1)
} 

  return (
    <div>
    <div className={s.container}>
      <div >
        <img src='https://www.homeelementsweb.com/wp-content/uploads/2020/12/logo-homeelements-4.png' alt='...' width='60'  />
        </div>
         <div className={s.h3}>
          <div >
            <div >
           <Link to={'/'}  >
            <h3 >HOME</h3></Link> 
             </div>
              <div>
              <h2>CATEGORIES</h2>
              </div>
               <select className={s.select} onChange ={(e)=> categories(e)}>
                <option value ="">Category</option>
                 {Category && Category.map((e, i) => (
                  <option key={i} value={e}>{e}</option>
                  ))}
                </select>
                
                  </div>
                   </div>
                    <div>
                     <img src='https://cdn-icons-png.flaticon.com/512/107/107831.png' alt='...' width='20'  />
                      </div>  
                       </div></div>
  )
}
