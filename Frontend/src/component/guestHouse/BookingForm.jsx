// src/components/BookingForm.js
import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { toast } from 'react-toastify';
import { postMethod } from '../../utils/methods';
import { LoginContext } from '../../contextApi/LoginState';


export const BookingForm = ({rooms, guestHouse_id}) => {

  const loginContext = useContext(LoginContext);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    checkIn: new Date(),
    checkOut: new Date(),
    room: {},
    noOfRooms : '',
    specialRequests: ''
  });

  async function handelRoom(e){
    // await handleChange(e)
    // console.log(e.target.value,e.target.name)
    // console.log("inside for")
    for(let room of rooms){
      if(room.type === e.target.value){
        // console.log("price = ",room)
        setFormData({...formData,room : room})
        return
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDateChange = (date, name) => {
    setFormData({
      ...formData,
      [name]: date
    });
  };

  const handleSubmit = async(e) => {
    try {
      e.preventDefault();
      const token = loginContext?.cookies?.ICM_AUTH_TOKEN
      if(!token){
        toast.warn("Login please");
        return;
      }
    if(formData.noOfRooms>0){
      if(formData.checkIn.getDate()-new Date().getDate()>=0){
        if(formData.checkOut-formData.checkIn>0){
          // Handle form submission logic here
          const response = await postMethod('/guest-house/send-request',{formData, guestHouse_id, token})
          console.log(response)
          if(response.status === 200){
            setFormData({
              name: '',
              phone: '',
              email: '',
              checkIn: new Date(),
              checkOut: new Date(),
              room:{},
              noOfRooms : '',
              specialRequests: ''
            })
            loginContext.setRelodeUser(prev=>!prev)
            toast.success("Successfully Send Your Request")
          }else if(response.status === 401 || response.status === 404){
            loginContext.removeCookie('ICM_AUTH_TOKEN');
            loginContext.setRelodeUser(prev=>!prev)
            toast.warn(response.message)
          }else{
            toast.error(response.message)
          }
        }else{
          toast.warn("Minimum 1 Days Duration Needed From Check-In to Check-Out");
        }
      }else{
        toast.warn("You Can Book Only from Today's Date");
      }
    }else
    {
      toast.warn('Please Provide Currect No. of Rooms');
    }
    } catch (error) {
      toast.error('Bad Request');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full mx-auto p-3 bg-[#e6e5e5] rounded-br-md rounded-bl-md">
        <div className="mb-2">
            <label className="block text-gray-700">Name</label>
            <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder='Enter Your Name'
            required
            />
        </div>
        <div className="mb-2">
            <label className="block text-gray-700">Phone</label>
            <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder='Enter Your 10 Digits Number'
            required
            />
        </div>
        <div className="mb-2">
        <label className="block text-gray-700">Email</label>
        <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder='ex : myname@example.com'
            required
        />
        </div>
        
        <div className='flex gap-2'>
            <div className="mb-2">
                <label className="block text-gray-700">Check-In Date</label>
                <DatePicker
                selected={formData.checkIn}
                onChange={(date) => handleDateChange(date, 'checkIn')}
                className="w-full px-3 py-2 border rounded cursor-pointer"
                dateFormat="yyyy/MM/dd"
                required
                />
            </div>
            <div className="mb-2">
                <label className="block text-gray-700">Check-Out Date</label>
                <DatePicker
                selected={formData.checkOut}
                onChange={(date) => handleDateChange(date, 'checkOut')}
                className="w-full px-3 py-2 border rounded cursor-pointer"
                dateFormat="yyyy/MM/dd"
                required
                />
            </div>

        </div>
        <div className="mb-2">
            <label className="block text-gray-700">Room Type</label>
            <select
            name="room"
            value={formData.room.type}
            onChange={(e)=>handelRoom(e)}
            className="w-full px-3 py-2 border rounded cursor-pointer"
            required
            >
            <option value="">Select a room type</option>
            {rooms?.map((room,index)=>(
                <option key={index} value={room?.type}>{room?.type}</option>
              ))}
            {/* <option value="single">Single Room</option>
            <option value="double">Double Room</option>
            <option value="suite">Suite</option> */}
            </select>
        </div>
        <div className="mb-2">
            <label className="block text-gray-700">No. of Rooms</label>
            <input
            type="number"
            name="noOfRooms"
            value={formData.noOfRooms}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded"
            placeholder='How Many Rooms You Want?'
            required
            />
        </div>
        <div className="mb-2">
            <label className="block text-gray-700">Special Requests</label>
            <textarea
            name="specialRequests"
            value={formData.specialRequests}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded resize-none"
            rows="3"
            placeholder='Type Here!'
            ></textarea>
        </div>
        <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded mt-2">Book Now</button>
    </form>
  );
};



BookingForm.propTypes = {
  rooms: PropTypes.array.isRequired,
  guestHouse_id : PropTypes.string.isRequired
};

