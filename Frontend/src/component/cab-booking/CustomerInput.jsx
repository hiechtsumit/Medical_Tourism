import React,{useState} from 'react'

export const CustomerInput = () => {
    const [formData, setFormData] = useState({
      pickUpPoint: '',
      pickUpAddress: '',
      dropPoint: '',
      dropAddress: '',
      members: '',
      date: '',
      luggageCount: '',
    });
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = (e) => {
        e.preventDefault();
      // Handle form submission
      console.log(formData);
    };
  
    return (
      <div className="container mx-auto p-4">
        <div className="w-full max-w-lg mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="py-2">
              <label className="block text-gray-700">Pick-up Point</label>
              <select
                name="pickUpPoint"
                value={formData.pickUpPoint}
                onChange={handleChange}
                required
                className="block w-full p-2 border rounded mt-1"
              >
                <option value="" disabled>Select Pick-up Point</option>
                <option value="train station">Train Station</option>
                <option value="bus stop">Bus Stop</option>
                <option value="airport">Airport</option>
                <option value="others">Others</option>
              </select>
              {/* {formData.pickUpPoint === 'others' && ( */}
                <input
                  type="text"
                  name="pickUpAddress"
                  value={formData.pickUpAddress}
                  onChange={handleChange}
                  placeholder="Enter pick-up point"
                  className="block w-full p-2 border rounded mt-1"
                  required
                />
              {/* )} */}
            </div>
            <div className="py-2">
              <label className="block text-gray-700">Drop-off Point</label>
              <select
                name="dropPoint"
                value={formData.dropPoint}
                onChange={handleChange}
                required
                className="block w-full p-2 border rounded mt-1"
              >
                <option value="" disabled>Select Drop-off Point</option>
                <option value="hotel">Hotel</option>
                <option value="hospital">Hospital</option>
                <option value="apartment">Apartment</option>
                <option value="others">Others</option>
              </select>
              {/* {formData.dropPoint === 'others' && ( */}
                <input
                  type="text"
                  name="dropAddress"
                  value={formData.dropAddress}
                  onChange={handleChange}
                  placeholder="Enter drop-off point"
                  className="block w-full p-2 border rounded mt-1"
                  required
                />
              {/* )} */}
            </div>
            <div className="py-2">
              <label className="block text-gray-700">Members</label>
              <input
                type="number"
                name="members"
                value={formData.members}
                onChange={handleChange}
                placeholder="Enter number of members"
                className="block w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div className="py-2">
              <label className="block text-gray-700">Date</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                className="block w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <div className="py-2">
              <label className="block text-gray-700">Luggage Count</label>
              <input
                type="number"
                name="luggageCount"
                value={formData.luggageCount}
                onChange={handleChange}
                placeholder="Enter luggage count"
                className="block w-full p-2 border rounded mt-1"
                required
              />
            </div>
            <center>
            <div className="mt-4">
              <button
              type="submit"
                // onClick={handleSubmit}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
              >
                Submit
              </button>
            </div>
            </center>
          </form>
        </div>
      </div>
    );
  };
