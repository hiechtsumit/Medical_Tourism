import React from 'react'
import { Introduction } from '../../component/travelall/Introduction'
import { ImgCarousel } from '../../component/travelall/ImgCarousel'
import { CustomerInput } from '../../component/travelall/CustomerInput'

export const Travel = () => {
  return (
    <div className='bg-slate-100'>
      <Introduction/>
      <ImgCarousel/>
      <CustomerInput/>
    </div>
  )
}
