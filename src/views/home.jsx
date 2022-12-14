import React from 'react'
import Nav from '../component/nav'
import Footer from '../component/footer'
import Products from '../component/products'
import Services from '../component/services'
import imagen from '../img/BannerPrincipal.png'
import Entertainment from '../component/services/entertainment'
import Fade from 'react-reveal/Fade';

import s from '../styles/home.module.css'


export default function Home() {
  return (
 <div>
  <Nav />
  <Entertainment />
   <div className={s.container}>
    <img className={s.img} src={imagen} alt='imagen-Principal'  />
     <div className={s.alltext}>
   <Fade right>
       <h1 className={s.text}>WELCOME TO INBUILD</h1>
        <h2 className={s.texto1} >GLOBAL STANDARD</h2>
         <h3 className={s.texto2} >BUILD ALL THE UNIQUE PATTERNS</h3>
         </Fade>
     </div>
 </div>
    <Services />
   
    <Products />
    <Footer />

    </div>
  )
}
