import React, {useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import Fade from 'react-reveal/Fade';
import { useDispatch } from 'react-redux'
import {getCategory} from '../../../redux/action'
import CardProducts from './cardProducts'
import Paginado from './paginado'
import Header from './header'
import SearchBar from './search'
import imagen from '../../../img/Principal.png'
import s from '../styles/store.module.css'



export default function StoreProducts() {
 
  const productos = useSelector(state => state.AllProducts)
  const [pagina, setPagina] = useState(1)
  const [paisesPorPagina, setpaisesPorPagina] = useState(12)

  console.log('todos los productos',productos)

  const maximo = productos.length / paisesPorPagina

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCategory())
  },[])

  return (
    <div>
      <Fade right >
      <Header setPagina = {setPagina} />
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
              <div>
             <div>
                <CardProducts 
                images={p.images}
                title={p.title} 
                price={p.price}
                id={p.id} />
                
             </div>
              </div>
             
          ))
          
        
        }
      </div>
     </Fade>
    </div>
  )
}
