import React from 'react'


const Women = () => {
  const womensData=[{
    image:"https://m.media-amazon.com/images/I/71Ye-nyK3YL._SY695_.jpg",
    name:"Flexible Memory Foam Women's Shoes ",
    brand:"DOCTOR EXTRA SOFT",
    price:899
  }]
  return (
    <div className='px-2 lg:px-12 mt-40'>
    <p>Women's Category</p>
    <div className='  grid grid-cols-5 gap-x-3'>
      {womensData.map((item)=>{
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

export default Women