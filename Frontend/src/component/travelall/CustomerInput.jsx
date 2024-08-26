import React,{useState} from 'react'
import { Qna } from './Qna';

export const CustomerInput = () =>  {
    const [formData, setFormData] = useState({
      travelType: '',
      date: '',
      members: '',
      destination: '',
      luggageQuantity: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = () => {
      // Handle form submission
      console.log(formData);
    };
  
    return (
      <div className="flex justify-around flex-col-reverse md:flex-row">
        <Qna/>
        <div className="w-full max-w-lg mx-auto p-3 m-2">
          <h1 className='text-[22px] font-semibold text-[#b7620c] text-center'>Take action now ~</h1>
        <div className='border rounded-md p-3 m-2 '>
          <div className="flex flex-col">
            <div className="py-2">
              <label className="block text-gray-700">Travel Type</label>
              <select
                name="travelType"
                value={formData.travelType}
                onChange={handleChange}
                className="block w-full p-2 border rounded mt-1"
              >
                <option value="" disabled>Select Travel Type</option>
                <option value="train">Train</option>
                <option value="bus">Bus</option>
                <option value="plane">Plane</option>
                <option value="navy">Navy</option>
              </select>
            </div>
            <div className="py-2">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="block w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="py-2">
              <label className="block text-gray-700">Members</label>
              <input
                type="number"
                name="members"
                value={formData.members}
                onChange={handleChange}
                placeholder="Enter travelling members"
                className="block w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="py-2">
              <label className="block text-gray-700">Destination</label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="Enter destination"
                className="block w-full p-2 border rounded mt-1"
              />
            </div>
            <div className="py-2">
              <label className="block text-gray-700">Luggage Quantity</label>
              <input
                type="number"
                name="luggageQuantity"
                value={formData.luggageQuantity}
                onChange={handleChange}
                placeholder="Enter luggage quantity"
                className="block w-full p-2 border rounded mt-1"
              />
            </div>
            <center className="mt-4">
              <button
                onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </center>
          </div>
        </div>
        </div>
      </div>
    );
  };