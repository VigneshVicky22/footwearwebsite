import React from 'react'
import Header from '../components/header'
import Section1 from '../components/section1'
import Section2 from '../components/section2'
import Section3 from '../components/section3'
import Section4 from '../components/section4'
import Section5 from '../components/section5'
import Button from '../components/button'
import Partner from '../components/partner'
import Section6 from '../components/section6'
import Section7 from '../components/section7'
import Footer from '../components/footer'
const Footwear = () => {
  return (
    <div>
    <article className='head'>
    <Header/> 
    </article>
    <article className='sec1'>
    <Section1/>
    </article>
    <article className='sec2'>
    <Section2/>
    </article>
    <article className='sec3'>
    <Section3/>
    </article>
    <article className='sec4'>
    <Section4/>
    </article>
    <article className='sec5'>
    <Section5/>
    <Button/>
    <Partner/>
   </article>
   <article className='sec6'>
    <Section6/>
    </article>
    <article className='sec7'>
    <Section7/>
    </article>
    <Footer/>
    </div>
  )
}

export default Footwear