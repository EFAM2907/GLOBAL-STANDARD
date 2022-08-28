import React, {useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import CardProducts from './cardProducts'
import Header from './header'
import s from '../styles/store.module.css'



export default function StoreProducts() {
 
  const productos = useSelector(state => state.AllProducts)

  console.log('todos los productos',productos)

  return (
    <div>
      <Header />
   <br />
    <h4 className={s.produ}>PRODUCTS</h4>
    <br />
      <div className={s.container}>
        {
          productos.map((p)=>(
            <CardProducts 
            images={p.images}
            title={p.title} 
            price={p.price}
            category={p.category.name} />
          ))
        }
      </div>
    </div>
  )
}

