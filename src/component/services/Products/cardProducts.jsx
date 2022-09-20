import React, {useState} from 'react'
import DetailStore from './detail'
import {Link} from 'react-router-dom'
import s from '../styles/cardproducts.module.css'


export default function CardProducts({images, title,price,id}) {

 const[isModal, setModal] = useState(false)

  return (
    <div>
     <div className={s.container}>
      <div  className={s.product}>
       <div>
        <img src={images? images : 'https://as01.epimg.net/diarioas/imagenes/2021/09/08/actualidad/1631110168_935232_1631110201_noticia_normal_recorte1.jpg'  } alt ='sapo' width="200" height="150"  />
         </div>
          <div>
           <h3>{title}</h3>
             <p>$ {price}</p>
              </div>
               <div className={s.button}>
                <button onClick={() => setModal(true)} className={s.buttonCart}>add a cart</button>  
                 <Link to={`/detailStore/${id}`}>
                 <button  className={s.see}>see more</button>
                  </Link> 
                  <div className={s.detalle}>
                  {isModal && <DetailStore id ={id} /> }
                    </div>            
                   </div>
               </div>
        </div>
    </div>
  )
}
