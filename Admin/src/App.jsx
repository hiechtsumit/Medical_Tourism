import { BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import './App.css'
import { Bounce, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Home } from "./pages/Home";
import { AddHospital } from "./pages/hospital/AddHospital";
import { AddGuestHouse } from "./pages/guestHouse/AddGuestHouse";
import { GuestHouseController } from "./pages/guestHouse/GuestHouseController";
import { AddCabDriver } from './pages/cabBooking/AddCabDriver'
import { HospitalController } from "./pages/hospital/HospitalController";
import { PastRequest } from "./pages/guestHouse/PastRequest";
// import { ProgressRequest } from "./pages/guestHouse/ProgressRequest";
import { ReceivedRequest } from "./pages/guestHouse/ReceivedRequest";
// import { AddHospital } from "./pages/hospital/AddHospital";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Home/>} />
          {/* Add catagory details */}
          {/* <Route path="add-hospital" element={<AddHospital/>} /> */}
          <Route path="add-hospital" element={<AddHospital/>} />
          <Route path="add-guest-house" element={<AddGuestHouse/>} />
          <Route path="add-cab-booking" element={<AddCabDriver/>} />

          
           {/* Hospotal controller */}
           <Route path="hospital-controller" element={<HospitalController/>} />


          {/* Guest House controller */}
          <Route path="guest-house-controller" element={<GuestHouseController/>} />
          <Route path="guest-house-controller/received-request" element={<ReceivedRequest/>} />
          {/* <Route path="guest-house-controller/progress-request" element={<ProgressRequest />} /> */}
          <Route path="guest-house-controller/past-request" element={<PastRequest/>} />



          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  )
}

export default App
