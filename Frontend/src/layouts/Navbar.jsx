
import { useContext, useState } from 'react'
import { Icon } from '@iconify/react';
import { Sidebar } from './Sidebar';
import { Link, NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom';
// import { Link, NavLink } from 'react-router-dom';
import '../assets/css/navbar.css'
import profile from '../assets/image/services/hospital.jpg'
import { toast } from 'react-toastify';
import { LoginContext } from '../contextApi/LoginState';

export const Navbar = () => {
  const loginContext = useContext(LoginContext);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [profileDivOpen, setProfileDivOpen] = useState(false)

  async function handelLogout() {
    try {
      // setSidebarOpen(prev=>!prev)
      await loginContext.removeCookie("ICM_AUTH_TOKEN");
      // setSidebarOpen(false)
      setProfileDivOpen(prev=>!prev)
      loginContext.setIsAuthenticate(false);
      loginContext.setRelodeUser(prev=>!prev);
      toast.success("See You Soon");
    } catch (error) {
      toast.error("Bad Request")
    }
  }

  return (
    <div id='Navbar' className='Navbar bg-[#f1f1f1] h-20 w-full z-[20] fixed top-0 p-2 flex justify-between md:justify-around items-center shadow-md shadow-[#c6c6c6]'>    
        {/* <div className='nav-list flex'> */}
          <Link to={'/'} className='nav-profile-name flex flex-col items-center justify-center h-full font-bold'>
              ICM LOGO
          </Link>
            <NavLink to={'/'} style={({isActive})=>({borderBottom : isActive ? "2.5px solid black" :"none",})} className='hidden md:flex px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ffd700] border-transparent'>Home</NavLink>
            
            
            <NavLink to={'/services'} style={({isActive})=>({borderBottom : isActive ? "2.5px solid black" :"none",})} className='hidden md:flex px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ffd700] border-transparent'>
              Our Services
            </NavLink>

            
            <NavLink to={'/about'} style={({isActive})=>({borderBottom : isActive ? "2.5px solid black" :"none",})} className='hidden md:flex px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ffd700] border-transparent'>About Us
            </NavLink>

            <NavLink to={'/contact'} style={({isActive})=>({borderBottom : isActive ? "2.5px solid black" :"none",})} className='hidden md:flex px-1 py-1 cursor-pointer text-[16px] lg:text-[18px] font-semibold hover:text-[#ffd700] border-transparent'>Contact Us
            </NavLink>
            {loginContext.isAuthenticate?(
              <div className='h-full aspect-square relative flex flex-col rounded-md'>

                <div id='profile' onClick={()=>{setProfileDivOpen(prev=>!prev)}} className='hidden md:flex items-center justify-center h-full aspect-square rounded-full bg-pink-600 text-white cursor-pointer text-2xl font-bold'>
                  {loginContext.user.name?.substring(0,1)}
                </div>

                {profileDivOpen === true?(
                  <div className='profile-div-hover w-[250px] absolute top-16 right-0 p-2 rounded-md bg-[#fff] shadow-md shadow-[#717171]'>
                  <div className='profile-div h-16 p-2 bg-white rounded-md'>
                    <Link to={'/profile'} onClick={()=>{setProfileDivOpen(prev=>!prev)}} className='h-full flex items-center gap-2'>
                      <img className='h-full aspect-square rounded-full' src={profile} alt="profile"/> 
                      <span className='text-[20px] font-semibold'>{loginContext.user.name}</span>
                    </Link>
                  </div>

                  <div className='border-b-[1px] border-[#959595] my-2'></div>
                  <Link onClick={()=>{setProfileDivOpen(prev=>!prev)}} to={'/order/guest-house'} className="flex gap-2 p-2 hover:bg-[#e3e3e3] rounded-md">
                    <Icon icon="mdi:order-bool-descending-variant" width="30" height="30"  style={{color: '#000'}} />
                      <span>Your Orders</span>
                  </Link>

                  <Link to={'/contact'} onClick={()=>{setProfileDivOpen(prev=>!prev)}} className="flex gap-2 p-2 hover:bg-[#e3e3e3] rounded-md">
                    <Icon icon="ic:outline-contact-support" width="30" height="30"  style={{color: '#000'}} />
                      <span>Help & Support</span>
                  </Link>

                  <div onClick={()=>handelLogout()} className="flex gap-2 p-2 hover:bg-[#e3e3e3] rounded-md cursor-pointer">
                    <Icon icon="line-md:logout" width="30" height="30"  style={{color: '#000'}} />
                      <span>Log out</span>
                  </div>

                  <p className='flex justify-center items-center text-[12px] font-bold'>
                      ICM &copy; 2024
                  </p>
                </div>
                ):(<></>)}
              </div>
            ):(
              <div className='hidden md:flex gap-3 text-black'>
                <Link to={'/login'} className='p-2 bg-white font-semibold rounded-md hover:scale-105 shadow-md shadow-[#3f3f3f]'>Sign in&nbsp;</Link>
                <Link to={'/signup'} className='border-[1px] p-2 bg-white font-semibold rounded-md hover:scale-105 shadow-md shadow-slate-700'>&nbsp;Sign up</Link>
              </div>
            )}
        {/* </div> */}

        <div onClick={()=>setSidebarOpen(true)} className='sidebar-icon flex md:hidden text-[35px] cursor-pointer'>
            <Icon icon="fe:bar"  style={{color: '#000'}} />
        </div>
        <div className="absolute">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </div>
    </div>
  )
}

