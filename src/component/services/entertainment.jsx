import React from 'react'
import entretenimiento from'../../extras/movies.json'

export default function Entertainment() {
  const duvan = entretenimiento.data

  console.log('estamos en movies',duvan)

  return (
    <div>Entertainment</div>
  )
}
