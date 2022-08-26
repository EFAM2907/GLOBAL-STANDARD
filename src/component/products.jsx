import React from 'react'
import s from '../styles/products.module.css'
import Json from '../extras/product.json'

export default function Products() {
    const products = Json.data

    console.log(products)

 function Card({name, img, price}){
    return(

    <div>
        <h2>{name}</h2>
        <img src={img} alt='precio' width='150px' height='100px' />
        <p>{price}</p>
    </div>
    )
 }

  return (
    <div >
        <div className={s.container}>

        {
            products.map(p => (
                <div  key={p.name}>
                    <Card 
                  name={p.name}
                  img={p.img}
                  price={p.price} />
                </div>

            ))
        }
        </div>
    </div>
  )
}
