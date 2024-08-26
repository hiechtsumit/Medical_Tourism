import { Icon } from '@iconify/react/dist/iconify.js'
import {Link} from 'react-router-dom'
import '../assets/css/services.css'
import { services } from '../utils/services'


export const Services = () => {
  
  return (
    <div className='w-full flex flex-col items-center pb-5'>
        <header className='w-[90%] font-semibold flex items-center gap-0 md:gap-10 my-5'>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
            <div className='w-full text-3xl flex justify-center font-serif'>
                <span>Wellcome</span>
                <span>&nbsp;To</span>
                <span>&nbsp;Our</span>
                <span>&nbsp;Services</span>
            </div>
            <div className='w-0 md:w-full border-b-[1px] border-black'></div>
        </header>

        <div className='w-[90%] flex flex-wrap justify-center gap-10'>
          {services?.map((item,j)=>(
            <div key={j} className='each-category relative w-[100%] md:w-[40%] lg:w-[30%] flex flex-col rounded-tr-[20%] rounded-bl-[20%] shadow-xl shadow-[#4d4d4d] bg-[#000000] overflow-hidden'>
                  <img className='each-category-hover-img w-full aspect-video rounded-tr-[20%] rounded-bl-[20%] cursor-pointer opacity-[0.6]' src={item.url} alt="coverPhoto" />
                  <div className='absolute w-full h-full flex flex-col justify-center items-center text-white text-[40px] md:text-[30px] lg:text-[40px] font-semibold cursor-pointer'>
                      <Link to={`/services/${item.path}`} className='each-category-hover-border px-5 text-center'>{item.name}</Link>
                      <Icon icon="ic:round-minus" width="50" height="50"  style={{color: '#fff'}} />
                  </div>
            </div>
          ))}
        </div>

    </div>
  )
}
