import React from 'react'


const Men = () => {
  const mensData=[{
    image:"https://m.media-amazon.com/images/I/61uXQc7AtZL._SY695_.jpg",
    name:"Men's Classic Athletic & Outdoor Casual Sandals",
    brand:"DOCTOR EXTRA SOFT",
    price:799
  },{
    image:"https://m.media-amazon.com/images/I/613jrRXRhKL._SY695_.jpg",
    name:"Men's Rover Comfortable Clogs",
    brand:"Red Tape",
    price:899
  }]
  return (
    <div className='px-2 lg:px-12 mt-40'>

    <p>Men's Category</p>
    <div className='grid grid-cols-5 gap-x-3'>
      {mensData.map((item)=>{
        return(<div>
          <img src={item.image} alt="" className='w-80'/>
          <p className='font-bold text-center'>{item.brand}</p>
          <p className='text-center'>{item.name}</p>
          <p className='text-center'>₹ {item.price}</p>
        </div>
        )
      })}
    </div>
    </div>
  )
}

export default Men