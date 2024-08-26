import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';
import { LoginContext } from '../../contextApi/LoginState';
import { postMethod } from '../../utils/methods';
import { toast } from 'react-toastify';

export const HospitalDepartmentBookForm = ({department}) => {

  const loginContext = useContext(LoginContext);
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);

  const [bookingDate, setBookingDate] = useState(tomorrow);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [country, setCountry] = useState('');

  const countries = ['Others','Australia','Bangaladesh','Canada', 'China','France','Germany','India','Japan','Mexico','United Kingdom','United States'];

  useEffect(()=>{
    setName(loginContext.user.name),
    setPhone(loginContext.user.phone)
  },[loginContext])

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const token = loginContext?.cookies?.ICM_AUTH_TOKEN
      if(!token){
        toast.warn("Login please");
        return;
      }
  
      // Handle form submission
      console.log({ name, phone, bookingDate, message, country, departmentID : department._id });
      const response = await postMethod('/hospital/send-request',{ name, phone, bookingDate, message, country, departmentID : department._id, token })
      console.log(response)
      if(response.status === 200){
        toast.success("Request sent successfully");
        loginContext.setRelodeUser(prev=>!prev)
      }else if(response.status === 401 || response.status === 404){
        loginContext.removeCookie('ICM_AUTH_TOKEN');
        loginContext.setRelodeUser(prev=>!prev)
        toast.warn(response.message)
        return;
      }else{
        toast.error(response.message)
        return;
      }
    } catch (error) {
      toast.error("Somthing Went Wrong")
      return;
    }
  }

  return (
      <form onSubmit={handleSubmit} className="w-[100%] max-w-lg bg-[#d4d4d4] pb-5 rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-6 rounded-t-md p-3 bg-orange-400 text-gray-800">Fill The Bellow{"'"}s Form and Book Now</h2>

        <div className="w-full mb-4 px-3">
          <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Your Name'
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="w-full mb-4 px-3">
          <label className="block text-gray-700 mb-2" htmlFor="phone">WhatsApp Number</label>
          <input
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder='Enter Phone Number'
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>

        <div className="w-full mb-4 px-3">
          <label className="block text-gray-700 mb-2" htmlFor="date">Date</label>
          <DatePicker
            selected={bookingDate}
            onChange={(date) => setBookingDate(date)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
            dateFormat="yyyy/MM/dd"
            required
          />
        </div>

        <div className="w-full mb-4 px-3">
          <label className="block text-gray-700 mb-2" htmlFor="country">Country</label>
          <select
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 cursor-pointer"
            required
          >
            <option value="" disabled>Select a country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>{country}</option>
            ))}
          </select>
        </div>

        <div className="w-fuull mb-4 px-3">
          <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder='Text Here !'
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300 resize-none"
            rows="4"
          ></textarea>
        </div>

        <div className='px-3'>
          <button type='submit' className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-[20px] font-semibold py-2 px-6 rounded-full shadow-lg shadow-[#ffffff]">Book Now</button>
        </div>

      </form>
  )
}




HospitalDepartmentBookForm.propTypes = {
  department: PropTypes.object
};