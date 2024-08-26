
import { services } from '../utils/services'
import {Link} from 'react-router-dom'

import { Icon } from '@iconify/react/dist/iconify.js'

export const Footer = () => {

  
  return (
    <footer id='Footer' className="bg-[#fff6ea] text-black w-full flex flex-col items-center py-10">
      {/* <div className="container mx-auto flex flex-col md:flex-row items-center justify-between"> */}
        <div className="w-[90%] mb-5 flex flex-wrap gap-5 justify-around">
          {/* <h3 className="text-lg font-semibold mb-4">Quick Links</h3> */}
            <ul className="space-y-2">

            <Link to={'/services'}>
                  {/* <Icon icon="grommet-icons:services" width="30" height="30"  style={{color: '#fff'}} /> */}
                  <span className='hover:text-orange-300 cursor-pointer text-[18px] font-bold'>Know Us</span>
              </Link>

                <li><a className='text-[15px] flex gap-3' href="/Home">
                  <span className='text-[#565656] hover:text-orange-300 cursor-pointer font-semibold'>Home</span>
                  </a></li>

                <li><a className='text-[15px] flex gap-3' href="/About">
                  <span className='text-[#565656] hover:text-orange-300 cursor-pointer font-semibold'>About Us</span>
                  </a></li>

                  <li><a className='text-[15px] flex gap-3' href="/contact">
                  <span className='text-[#565656] hover:text-orange-300 cursor-pointer font-semibold'>Contact Us</span>
                  </a></li>
            </ul>

            <ul className='space-y-2'>

            <Link to={'/services'}>
                  {/* <Icon icon="grommet-icons:services" width="30" height="30"  style={{color: '#fff'}} /> */}
                  <span className='hover:text-orange-300 cursor-pointer text-[18px] font-bold'>Our Policies</span>
              </Link>

                <li><a className='text-[15px] flex gap-3' href="/contac-Us">
                  <span className='text-[#565656] hover:text-orange-300 cursor-pointer font-semibold'>Privacy Policy</span>
                </a></li>

                <li><a className='text-[15px] flex gap-3' href="/contac-Us">
                  <span className='text-[#565656] hover:text-orange-300 cursor-pointer font-semibold'>Terms and Conditions</span>
                </a></li>

                <li><a className='text-[15px] flex gap-3' href="/contac-Us">
                  <span className='text-[#565656] hover:text-orange-300 cursor-pointer font-semibold'>Return Policy</span>
                </a></li>

                <li><a className='text-[15px] flex gap-3' href="/contac-Us">
                  <span className='text-[#565656] hover:text-orange-300 cursor-pointer font-semibold'>IP Policy</span>
                </a></li>

            </ul>

            
            <ul className='space-y-2'>
              <Link to={'/services'}>
                  {/* <Icon icon="grommet-icons:services" width="30" height="30"  style={{color: '#fff'}} /> */}
                  <span className='hover:text-orange-300 cursor-pointer text-[18px] font-bold'>Our Services</span>
              </Link>
              {services?.map((service,i)=>(
                <li key={i}><a className='text-[15px] flex gap-3' href={`/services/${service.path}`}>
                <span className=' text-[#565656] hover:text-orange-300 cursor-pointer font-semibold'>{service.name}</span>
              </a></li>
              ))}
            </ul>


          <ul className='space-y-2 text-center'>
          <Link to={'/services'}>
                  {/* <Icon icon="grommet-icons:services" width="30" height="30"  style={{color: '#fff'}} /> */}
                  <span className='hover:text-orange-300 cursor-pointer text-[18px] font-bold'>Connect</span>
              </Link>

            <div className="space-y-2">
              <div>Social Links</div>
              <ul className="flex gap-3 lg:gap-5">
                <li><a href="https://www.facebook.com/" target='_blank'><Icon icon="logos:facebook" width="30" height="30" /></a></li>
                <li><a href="https://wa.me/+917795013675/" target='_blank'><Icon icon="logos:whatsapp-icon" width="30" height="30" /></a></li>
                <li><a href="#"><Icon icon="skill-icons:instagram" target='_blank' width="30" height="30" /></a></li>
                <li><a href="https://wa.me/+917795013675/" target='_blank'><Icon icon="skill-icons:linkedin" width="30" height="30" /></a></li>
                <li><a href="https://www.youtube.com/" target='_blank' rel="noopener noreferrer"><Icon icon="logos:youtube-icon" width="30" height="30" /></a></li>
              </ul>
            </div>
          </ul>

            {/* <ul className="space-y-2">
                <li><a className='text-[18px] flex gap-3' href="">
                  <span className='hover:text-orange-300 cursor-pointer '>Hospital</span>
                </a></li>

                <li><a className='text-[18px] flex gap-3' href="">
                  <span className='hover:text-orange-300 cursor-pointer '>Guest House</span>
                  </a></li>

                <li><a className='text-[18px] flex gap-3' href="">
                  <span className='hover:text-orange-300 cursor-pointer '>Tickets</span>
                  </a></li>

                  <li><a className='text-[18px] flex gap-3' href="">
                  <span className='hover:text-orange-300 cursor-pointer '>Cab</span>
                  </a></li>

                  <li><a className='text-[18px] flex gap-3' href="">
                  <span className='hover:text-orange-300 cursor-pointer '>Medicine</span>
                  </a></li>

                  <li><a className='text-[18px] flex gap-3' href="">
                  <span className='hover:text-orange-300 cursor-pointer '>Translator</span>
                  </a></li>
            </ul> */}

            {/* <ul className="space-y-2">
              <li><a href="#/" className='text-[18px] flex gap-3'>
                  <Icon icon="mdi:location" width="30" height="30"  style={{color: '#fff'}} />
                  <span className='hover:text-orange-300 cursor-pointer '>Bommsandra, Bangalore, Karnataka, India, 560099</span>
                </a></li>

              <a className='text-[18px] flex gap-3' href="mailto:reza_moni@hotmail.com">
                <Icon icon="material-symbols:mail" width="30" height="30"  style={{color: '#fff'}} />
                <span className='hover:text-orange-300 cursor-pointer'>reza_moni@hotmail.com</span>
              </a>

                <p className='text-[18px] flex gap-3'>
                  <Icon icon="material-symbols:call" width="30" height="30"  style={{color: '#fff'}} />
                  <span className='hover:text-orange-300 cursor-pointer'>+91 7795013675</span>
                </p>
                
            </ul> */}

        {/* </div> */}

            

      </div>
      <div className='w-full text-center text-[14px] font-bold text-sky-500'>
              &copy; 2024 {'[Company Name]'}
              </div>
    </footer>
  )
}

