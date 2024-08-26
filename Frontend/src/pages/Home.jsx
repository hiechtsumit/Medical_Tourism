// import {Link} from 'react-router-dom'

// import { useEffect } from "react"
import { useState } from 'react';
import { Slider } from '../layouts/Slider';
import  {services} from '../utils/services';

import {HomeServices} from '../utils/services'
import { Link } from 'react-router-dom';
import { homeSlider } from '../utils/home';


export const Home = () => {
  const [images] = useState(homeSlider)
  return (
    <div className="w-full">
        {/* <section className="Banner-app w-full">
          <img className="w-full max-h-[60vh] object-cover" src='https://www.icoderzsolutions.com/blog/wp-content/uploads/2018/11/Doctor-Appointment-Booking-App-blog-post.jpg' alt="" />
        </section> */}

        <Slider images={images} />

        <div className='w-full flex flex-wrap justify-center gap-5 py-[14px]'>
          {HomeServices?.map((service,i)=> (
            <div key={i} className="w-[80%] md:w-[30%] lg:w-[25%] aspect-16/7 bg-white border-[0.5px] border-[#f1f1f1] text-white p-3 rounded-3xl shadow-lg">
              <div className="w-full">
                <img src={service.url} alt="Feature Image" className="rounded-t-3xl" />
                {/* <div className="absolute top-2 left-2 w-6 h-6 bg-pink-500 rounded-full"></div> */}
              </div>
              <div className="w-full">
                {/* <h2 className="text-2xl font-bold">FOLDERS+</h2> */}
                <p className="mt-2 text-2xl text-green-400 font-semibold">{service.name}</p>
                <p className="mt-2 text-sm text-black line-clamp-2">Unlock the power of unlimited folders. Keep your files clean and organized with auto arrange feature that comes built-in folders.</p>
                <div className='w-full flex justify-start'>
                <Link to={`/services/${service.path}`}>
                <button className="mt-4 text-xl font-semibold bg-green-500 text-white py-2 px-4 rounded-full">Explore{' >>'}</button>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
    </div>
  )
}
