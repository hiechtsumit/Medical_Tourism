import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import {Login} from './pages/Login'
import {Signup} from "./pages/Signup"
import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";
import { Services } from "./pages/Services";
// react-toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useContext } from "react";
import { Contact } from "./pages/Contact";
import { Hospital } from "./pages/hospital/Hospital";
import { HospitalDetails } from "./pages/hospital/HospitalDetails";
import { HospitalDepartment } from "./pages/hospital/HospitalDepartment";
import { GuestHouse } from "./pages/guest-house/GuestHouse";
import { GuestHouseDetails } from "./pages/guest-house/GuestHouseDetails";
import { OrderGuestHouse } from "./pages/order/guestHouse/OrderGuestHouse";
import { OrderDetails } from "./pages/order/OrderDetails";
import PrivateRoute from "./router/PrivateRoute";
import { LoginContext } from "./contextApi/LoginState";
import { Travel } from "./pages/travel/Travel";
import { CabBooking } from "./pages/cab-book/CabBooking";

function App() {
  const loginContext = useContext(LoginContext)
  return (
    <>
      {/* <div><Navbar /></div> */}
        <BrowserRouter>
          <Navbar />
          <main className="pt-20 bg-[#ffffff]">
            
          <Routes>
            <Route path="" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Services />} />
            
            {/* Hospital Page */}
            <Route path="services/hospital" element={<Hospital />} />
            <Route path="services/hospital/:id?" element={<HospitalDetails />} />
            <Route path="services/hospital/:id?/:id?" element={<HospitalDepartment />} />

            {/* Guest House Page */}
            <Route path="services/guest-house" element={<GuestHouse />} />
            <Route path="services/guest-house/:id?" element={<GuestHouseDetails />} />
            <Route path="services/travel" element={<Travel />} />
            <Route path="services/cab-booking" element={<CabBooking />} />

            {/* Protected Order Page */}
            <Route path="order/guest-house" element={<PrivateRoute element={OrderGuestHouse} isAuthenticate={loginContext.isAuthenticate} />} />
            <Route path="order/guest-house/:id" element={<PrivateRoute element={OrderDetails} isAuthenticate={loginContext.isAuthenticate} />} />

            <Route path="contact" element={<Contact />} />
           
            {!loginContext?.isAuthenticate?(
              <>
                 <Route path="login" element={<Login />} />
                 <Route path="signup" element={<Signup />} />
              </>
            ):(<></>)}
            <Route path='*' element={<Navigate to={'/'}/>} />
          </Routes>
              
          </main>

          <Footer />
          
        </BrowserRouter>

        {/* <Footer/> */}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          // hideProgressBar={false}
          // newestOnTop={false}
          // closeOnClick
          // rtl={false}
          // pauseOnFocusLoss
          // draggable
          // pauseOnHover
          theme="colored"
        />
    </>
  );
}

export default App;


{5?(
  <Routes>
    <Route path="" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="services" element={<Services />} />

    {/* Hospital Page */}
    <Route path="services/hospital" element={<Hospital />} />
    <Route path="services/hospital/:id?" element={<HospitalDetails />} />
    <Route path="services/hospital/:id?/:id?" element={<HospitalDepartment />} />

    {/* Guest House Page */}
    <Route path="services/guest-house" element={<GuestHouse />} />
    <Route path="services/guest-house/:id?" element={<GuestHouseDetails />} />


    {/* order Page */}
    <Route path="order/guest-house" element={<OrderGuestHouse/>} />
    <Route path="order/guest-house/:id?" element={<OrderDetails/>} />



    <Route path="contact" element={<Contact />} />

    <Route path='*' element={<Navigate to={'/'}/>} />
  </Routes>
  ):(
    <Routes>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      
      <Route path="services/hospital" element={<Hospital />} />
      <Route path="services/hospital/:id?" element={<HospitalDetails />} />
      <Route path="services/hospital/:id?/:id?" element={<HospitalDepartment />} />

      {/* Guest House Page */}
      <Route path="services/guest-house" element={<GuestHouse />} />
      <Route path="services/guest-house/:id?" element={<GuestHouseDetails />} />

      {/* order page */}
      <Route path="order/guest-house" element={<OrderGuestHouse/>} />
      <Route path="order/guest-house/:id?" element={<OrderDetails/>} />

      <Route path="contact" element={<Contact />} />
      <Route path="login" element={<Login/>} />
      <Route path="signup" element={<Signup />} />
      <Route path='*' element={<Navigate to={'/'}/>} />
    </Routes>
  )}
