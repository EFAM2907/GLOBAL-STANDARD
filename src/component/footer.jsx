import React from 'react'
import s from '../styles/footer.module.css'

export default function Footer() {
  return (
    <div className={s.container}>
     <div className={s.contenido}>
      
      <div className={s.inbuild}>
      <h3>INBUILD</h3>
      <br />
      <p>Lorem ipsum dolor sit amet, consectetur adip...
         </p>
        <br />
        <p>
        Sed earum rem beatae totam sunt dolores! 
        Beatae nostrum vitae possimus qui praesentium, 
        </p>
       </div>

        <div className={s.link}>
          <h3>USEFUL LINKS</h3>
          <br />
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
          </ul>
         </div>

          <div className={s.OurContacts}>
           <h3>OUR CONTACTS</h3>
           <br />
           <div className={s.contacts}>
         
            <a 
              className={s.names}
              href="https://github.com/EFAM2907"
              target="_blank"
              rel="noopener noreferrer">
                  Edwin Fernando Arias Montoya
            </a>
         <div >
         <a
                href="https://github.com/EFAM2907"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={s.iconos}
                  src="https://img.icons8.com/ios-glyphs/344/github.png"
                  alt='icono'
                />
              </a>
              <a
                href="https://www.linkedin.com/in/edwinfer2907/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={s.iconos}
                  src="https://img.icons8.com/ios-filled/344/linkedin.png"
                  alt='icono'
                />
              </a> 
         </div>
            

            <a 
              className={s.names}
              href="https://github.com/duvangers"
              target="_blank"
              rel="noopener noreferrer">
                  Duvan Alexander Zuluaga
            </a>
            <div>
            <a
                href="https://github.com/duvangers"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={s.iconos}
                  src="https://img.icons8.com/ios-glyphs/344/github.png"
                  alt='icono'
                />
              </a>
              <a
                href="https://www.linkedin.com/in/duvan-zuluaga"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className={s.iconos}
                  src="https://img.icons8.com/ios-filled/344/linkedin.png"
                  alt='icono'
                />
              </a> 

            </div>
            
           </div>
          
             
               </div>
      
     </div>
    </div>
  )
}
