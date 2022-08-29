import React from 'react'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import s from '../styles/products.module.css'
import Json from '../extras/product.json'

export default function Products() {
    const products = Json.data


 function Card({name, img, price}){
    return(
    <div className={s.card}> 
        <h2>{name == 'PRODUCTS' ? <Link className={s.link} to={'/storeProducts'} > PRODUCTS </Link> : name ||
         name == 'BUSINESS' ? <Link className={s.link} to={'/storeProducts'} > BUSINESS </Link> : name} 
        </h2>
        <br />
        <img src={img} alt='precio' width='320px' height='200px' />
        <p>{price}</p>
    </div>
    )
 }



  return (
   <div >
    <div className={s.title}>
     <h1>Branding Projects</h1>
     <p>Lorem ipsum dolor sit amet, consectetur adip</p>  
    </div>
        <div className={s.container}>
        {
            products.map(p => (
              <div>
               <div  key={p.name}>
                    <Card 
                  id={p.id}
                  name={p.name}
                  img={p.img}
                  price={p.price} />
                </div>
                 </div>
            ))
        }
        
        </div>
    </div>
  )
}
