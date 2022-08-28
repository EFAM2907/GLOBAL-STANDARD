import React from 'react'
import s from '../styles/cardproducts.module.css'


export default function CardProducts({images, title,price,category}) {
  return (
    <div>
     <div className={s.container}>
      <div  className={s.product}>
       <div>
        <img src={images} alt ='imagen' width="200" height="150"  />
         </div>
          <div>
           <h3>{title}</h3>
             <p>$ {price}</p>
              </div>
               <div className={s.button}>
                <button className={s.buttonCart}>add a cart</button>
                 <button className={s.see}>see more</button>
                  </div>
               </div>
        </div>
    </div>
  )
}
