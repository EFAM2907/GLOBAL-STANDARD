import { useState, useEffect } from 'react'
import {Route, Routes} from 'react-router'
import {getProducts, getCategory} from './redux/action'
import {useSelector, useDispatch} from 'react-redux'
import Home from './views/home'
import DetailStore from './component/services/Products/detail'
import StoreProducts from './component/services/Products/store'
import Nav from './component/nav'
import './App.css'

function App() {

 const dispatch = useDispatch()

  useEffect(()=>{
   dispatch(getProducts())
   dispatch(getCategory())
  },[])



  return (
    <div className="App">
     <Routes>
     <Route path='/' element={<Home />} />
     <Route path='/storeProducts' element={<StoreProducts />} />
     <Route path='/detailStore/:id' element={<DetailStore />} />
     <Route path='*' element={<h1>NOT FOUND</h1>} />
      </Routes>
      
    </div>
  )
}

export default App
