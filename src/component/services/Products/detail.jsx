import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useParams} from 'react-router'
import s from '../styles/detail.module.css'

export default function DetailStore({id}) {

    // const {id} = useParams()
    const product = useSelector(state => state.AllProducts)



  useEffect(()=> {
   setData(product.filter(p => p.id == id));
  }, [id])

  const [data, setData] = useState()

   console.log('estamos en id', data)

  return (
    <div className={s.container}>
        <div className={s.card}>
        {
          data && data.map(p =>(
                <div>
            <h1>{p.title}</h1>
           <img src={p.images? p.images : 'https://www.trajesguzman.com/media/1242/zapato-piel-de-vaca.jpg'} alt='...' width='400px'/>
            <h4>{p.category.name}</h4>
            <p>{p.description}</p>
                </div>
            ))
        }
        </div>
    </div>

  )
}
