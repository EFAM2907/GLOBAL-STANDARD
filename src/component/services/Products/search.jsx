import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {getByName} from '../../../redux/action'
import s from '../styles/search.module.css'

export default function SearchBar() {

  const dispatch = useDispatch()
  const[input, setInput] = useState('')

  function handleSearch(e){
  e.preventDefault();
  dispatch(getByName(e.target.value))
  }

  return (
    <div className={s.container}>
        <input className={s.input} type="search" placeholder='Search By Name' onChange={handleSearch} />
        {/* <button onClick={handleSearch}>enviar</button> */}
    </div>
  )
}
