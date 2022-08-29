import React, {useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import Fade from 'react-reveal/Fade';
import CardProducts from './cardProducts'
import Paginado from './paginado'
import Header from './header'
import SearchBar from './search'
import s from '../styles/store.module.css'



export default function StoreProducts() {
 
  const productos = useSelector(state => state.AllProducts)
  const [pagina, setPagina] = useState(1)
  const [paisesPorPagina, setpaisesPorPagina] = useState(12)

  console.log('todos los productos',productos)

  const maximo = productos.length / paisesPorPagina


  return (
    <div>
      <Fade right >
      <Header />
   <br />

    
    <div className={s.paginado}>
      <h3>PRODUCTS</h3>
    <SearchBar />
     <Paginado
        maximo={maximo}
        pagina={pagina}
        setPagina={setPagina}
        />
     </div>
      <div className={s.container}> 

        {
          productos.slice (
            (pagina - 1) * paisesPorPagina,
            (pagina - 1) * paisesPorPagina + paisesPorPagina)
            .map((p)=>(
            <CardProducts 
            images={p.images ? p.images:'https://d1fufvy4xao6k9.cloudfront.net/images/landings/421/wedding-shoe.jpg'}
            title={p.title} 
            price={p.price}
            category={p.category.name} />
          ))
        }
      </div>
     </Fade>
    </div>
  )
}

