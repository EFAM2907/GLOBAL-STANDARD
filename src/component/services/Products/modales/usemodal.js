import {useState} from 'react'

function useModal() {

    const [isOpenModal, setIsOpenModal] = useState()

    const openModal = ()=>{
        setIsOpenModal(true)
    }

    const closeModal = ()=>{
        setIsOpenModal(false)
    }

  return [isOpenModal, openModal, closeModal]
  
}

export default useModal