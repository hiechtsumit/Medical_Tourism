import PropTypes from 'prop-types';
import { Icon } from "@iconify/react/dist/iconify.js";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Sidebar2 from "react-sidebar";
import { toast } from "react-toastify";
import { LoginContext } from "../contextApi/LoginState";

export const Sidebar = ({sidebarOpen, setSidebarOpen}) => {
  const loginContext = useContext(LoginContext);

  async function handelLogout() {
    try {
      setSidebarOpen(prev=>!prev)
      await loginContext.removeCookie("ICM_AUTH_TOKEN");
      setSidebarOpen(false)
      loginContext.setIsAuthenticate(false);
      loginContext.setRelodeUser(prev=>!prev);
      toast.success("See You Soon");
      // navigate("/");
    } catch (error) {
      // console.log(error)
      // toast.error("Error");
      toast.error("Bad Request")
    }
  }

  return (
    <Sidebar2
        sidebar={
        <div className="h-full w-full flex flex-col justify-between p-3 text-white bg-slate-500">
          <ul className='nav-list flex flex-col'>

            <Link to={'/'} onClick={()=>setSidebarOpen(prev=>!prev)} className='flex gap-3 items-center cursor-pointer px-3 py-3 hover:bg-slate-700 rounded-md text-xl'>
              <Icon icon="material-symbols:home" width="30" height="30"  style={{color: '#fff'}} />
              <span>Home</span>
            </Link>


            <Link to={'/services'} onClick={()=>setSidebarOpen(prev=>!prev)} className='flex gap-3 items-center cursor-pointer px-3 py-3 hover:bg-slate-700 rounded-md text-xl'>             
              <Icon icon="grommet-icons:services" width="30" height="30"  style={{color: '#fff'}} />
                <span>Our Services</span>
            </Link>


            <Link to={'/order/'} onClick={()=>setSidebarOpen(prev=>!prev)} className='flex gap-3 items-center cursor-pointer px-3 py-3 hover:bg-slate-700 rounded-md text-xl'>
              <Icon icon="material-symbols:home" width="30" height="30"  style={{color: '#fff'}} />
              <span>Home</span>
            </Link>

            <Link to={'/about'} onClick={()=>setSidebarOpen(prev=>!prev)} className='flex gap-3 items-center cursor-pointer px-3 py-3 hover:bg-slate-700 rounded-md text-xl'>
              <Icon icon="mdi:about" width="30" height="30"  style={{color: '#fff'}} />
              <span>About Us</span>
            </Link>

            <Link to={'/contact'} onClick={()=>setSidebarOpen(prev=>!prev)} className='flex gap-3 items-center cursor-pointer px-3 py-3 hover:bg-slate-700 rounded-md text-xl'>
            <Icon icon="ic:baseline-contact-phone" width="30" height="30"  style={{color: '#fff'}} />
              <span>Contact Us</span>
            </Link>

            {loginContext.isAuthenticate?(
              <Link className="flex gap-3 items-center cursor-pointer px-3 py-3 hover:bg-slate-700 rounded-md text-xl" onClick={()=>handelLogout()}>
                <Icon icon="line-md:logout" width="30" height="30"  style={{color: '#fff'}} />
                <span>Log Out</span>
              </Link>
            ):(
              <Link to={'/login'} onClick={()=>setSidebarOpen(prev=>!prev)} className="flex gap-3 items-center cursor-pointer px-3 py-3 hover:bg-slate-700 rounded-md text-xl">
                <Icon icon="line-md:login" width="30" height="30"  style={{color: '#fff'}} />
                <span>Sign in</span>
              </Link>
            )}

          </ul>
          
          <div className='py-3 text-[12px]'>
            &copy; 2024 ICM Export
          </div>

        </div>
      }
        open={sidebarOpen}
        onSetOpen={()=>setSidebarOpen(prev=>!prev)}
        styles={{ sidebar: { background: "white", position : 'fixed' ,top: '0', height : '100vh', width : '55%' } }}
      >
    </Sidebar2>
  )
}

Sidebar.propTypes = {
  sidebarOpen: PropTypes.bool,
  setSidebarOpen : PropTypes.func
};

