import React from 'react'
import Header from '../components/header'
import First from '../components/mencomponents/first'

const Men = () => {
  const name=["Men's","/img/item-29.jpeg"]
  return (
    <div><Header/>
    <First Name={name}/>
    </div>
  )
}

export default Men