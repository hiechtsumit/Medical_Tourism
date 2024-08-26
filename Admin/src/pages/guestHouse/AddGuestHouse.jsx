import { useState } from 'react';
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import { postMethod } from '../../utils/methods';

export const AddGuestHouse = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    location : '',
    about : '',
    rating: {
      rating: '',
      reviews: ''
    },
    amenities: {
      wifi: false,
      parking: false,
      food: false,
      ac: false,
      pool: false
    },
    rooms: [],
    price: {
      min: '',
      max: ''
    },
    images: []
  });

  const roomTypes = [
    'Single Room',
    'Double Room',
    'Suite',
    'Family Room',
    'Deluxe Room',
    // Add more room types as needed
  ].filter((type) => !formData.rooms.some((room) => room.type === type));

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        amenities: {
          ...formData.amenities,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleNestedChange = (e, category) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [category]: {
        ...formData[category],
        [name]: value
      }
    });
  };

  const handleRoomChange = (index, e) => {
    const { name, value } = e.target;
    const rooms = [...formData.rooms];
    rooms[index][name] = value;
    setFormData({
      ...formData,
      rooms
    });
  };

  const handleAddRoom = () => {
    setFormData({
      ...formData,
      rooms: [...formData.rooms, { type: '', price: '' }]
    });
  };

  const handleRemoveRoom = (index) => {
    const rooms = [...formData.rooms];
    rooms.splice(index, 1);
    setFormData({
      ...formData,
      rooms
    });
  };

  const handleAddImage = () => {
    setFormData({
      ...formData,
      images: [...formData.images, '']
    });
  };

  const handleImageChange = (index, e) => {
    const images = [...formData.images];
    images[index] = {
      url : e.target.value
    };
    setFormData({
      ...formData,
      images
    });
  };

  const handleRemoveImage = (index) => {
    const images = [...formData.images];
    images.splice(index, 1);
    setFormData({
      ...formData,
      images
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Handle form submission logic here
    if(formData.images.length>0 && formData.rooms.length>0){
      const response = await postMethod('/admin/guest-house/add',formData)
      if(response.status === 200){
        toast.success(response.message);
      }else{
        toast.error(response.message);
      }
      console.log(response.data)
    }
    // console.log(formData);
  };

  return (<>
    <header className="p-3 w-full flex justify-start">
      <Link to={'/'} className="px-2 py-1 text-xl rounded-md border-[2px] border-black">
      {"<"} Back
      </Link>
    </header>
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Hotel</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Hotel Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Location</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">About</label>
        <input
          type="text"
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rating</label>
        <input
          type="number"
          name="rating"
          value={formData.rating.rating}
          onChange={(e) => handleNestedChange(e, 'rating')}
          className="w-full px-3 py-2 border rounded"
          min="0"
          max="5"
          step="0.1"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Reviews</label>
        <input
          type="number"
          name="reviews"
          value={formData.rating.reviews}
          onChange={(e) => handleNestedChange(e, 'rating')}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Amenities</label>
        <div className='flex flex-wrap gap-7'>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="wifi"
              checked={formData.amenities.wifi}
              onChange={handleChange}
              className="mr-2"
            />
            <span>WiFi</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="ac"
              checked={formData.amenities.ac}
              onChange={handleChange}
              className="mr-2"
            />
            <span>AC</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="tv"
              checked={formData.amenities.tv}
              onChange={handleChange}
              className="mr-2"
            />
            <span>TV</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="parking"
              checked={formData.amenities.parking}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Parking</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="cctv"
              checked={formData.amenities.cctv}
              onChange={handleChange}
              className="mr-2"
            />
            <span>CCTV</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="food"
              checked={formData.amenities.food}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Food</span>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="pool"
              checked={formData.amenities.pool}
              onChange={handleChange}
              className="mr-2"
            />
            <span>Pool</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Rooms</label>
        {formData.rooms.map((room, index) => (
          <div key={index} className="mb-2 flex items-center">
            <select
              name="type"
              value={room.type}
              onChange={(e) => handleRoomChange(index, e)}
              className="w-1/2 px-3 py-2 border rounded mr-2"
              
            >
              <option value="">Select Room Type</option>
              {roomTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
            {/* Room price input */}
            <input
              type="number"
              name="price"
              value={room.price}
              onChange={(e) => handleRoomChange(index, e)}
              className="w-1/2 px-3 py-2 border rounded"
              placeholder="Price"
              required
            />
            <span className="ml-2">{room.type}</span>
            <button
              type="button"
              onClick={() => handleRemoveRoom(index)}
              className="bg-red-500 text-white px-3 py-2 rounded ml-2"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddRoom}
          className="bg-blue-500 text-white px-3 py-2 rounded mt-2"
          // Disable button if all room types have been chosen
          disabled={roomTypes.length === 0}
        >
          Add Room
        </button>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Price Range</label>
        <input
          type="number"
          name="min"
          value={formData.price.min}
          onChange={(e) => handleNestedChange(e, 'price')}
          className="w-full px-3 py-2 border rounded"
          placeholder="Min Price"
          required
        />
        <input
          type="number"
          name="max"
          value={formData.price.max}
          onChange={(e) => handleNestedChange(e, 'price')}
          className="w-full px-3 py-2 border rounded mt-2"
          placeholder="Max Price"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Images</label>
        {formData.images.map((image, index) => (
          <div key={index} className="mb-2 flex items-center">
            <input
              type="text"
              value={image.url}
              onChange={(e) => handleImageChange(index, e)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Image URL"
              required
            />
            <button
              type="button"
              onClick={() => handleRemoveImage(index)}
              className="bg-red-500 text-white px-3 py-2 rounded ml-2"
            >
              Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddImage}
          className="bg-blue-500 text-white px-3 py-2 rounded mt-2"
        >
          Add Image
        </button>
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-2">
        Add Hotel
      </button>
    </form>
  </>);
}






















// import { useState } from 'react';

// const roomTypes = [
//   'Single Room',
//   'Double Room',
//   'Suite',
//   'Family Room',
//   'Deluxe Room',
//   // Add more room types as needed
// ];

// export const AddGuestHouse = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     address: '',
//     rating: {
//       rating: '',
//       reviews: ''
//     },
//     amenities: {
//       wifi: false,
//       parking: false,
//       restaurant: false,
//       ac: false,
//       pool: false
//     },
//     rooms: [],
//     price: {
//       min: '',
//       max: ''
//     },
//     images: []
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     if (type === 'checkbox') {
//       setFormData({
//         ...formData,
//         amenities: {
//           ...formData.amenities,
//           [name]: checked
//         }
//       });
//     } else {
//       setFormData({
//         ...formData,
//         [name]: value
//       });
//     }
//   };

//   const handleNestedChange = (e, category) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [category]: {
//         ...formData[category],
//         [name]: value
//       }
//     });
//   };

//   const handleRoomChange = (index, e) => {
//     const { name, value } = e.target;
//     const rooms = [...formData.rooms];
//     rooms[index][name] = value;
//     setFormData({
//       ...formData,
//       rooms
//     });
//   };

//   const handleAddRoom = () => {
//     setFormData({
//       ...formData,
//       rooms: [...formData.rooms, { type: '', price: '' }]
//     });
//   };

//   const handleRemoveRoom = (index) => {
//     const rooms = [...formData.rooms];
//     rooms.splice(index, 1);
//     setFormData({
//       ...formData,
//       rooms
//     });
//   };

//   const handleAddImage = () => {
//     setFormData({
//       ...formData,
//       images: [...formData.images, '']
//     });
//   };

//   const handleImageChange = (index, e) => {
//     const images = [...formData.images];
//     images[index] = e.target.value;
//     setFormData({
//       ...formData,
//       images
//     });
//   };

//   const handleRemoveImage = (index) => {
//     const images = [...formData.images];
//     images.splice(index, 1);
//     setFormData({
//       ...formData,
//       images
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission logic here
//     console.log(formData);
//   };

//   const availableRoomTypes = roomTypes.filter(
//     (type) => !formData.rooms.some((room) => room.type === type)
//   );

//   return (
//     <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-8 bg-white shadow-md rounded">
//       <h2 className="text-2xl font-bold mb-4">Add New Hotel</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Hotel Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Address</label>
//         <input
//           type="text"
//           name="address"
//           value={formData.address}
//           onChange={handleChange}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Rating</label>
//         <input
//           type="number"
//           name="rating"
//           value={formData.rating.rating}
//           onChange={(e) => handleNestedChange(e, 'rating')}
//           className="w-full px-3 py-2 border rounded"
//           min="0"
//           max="5"
//           step="0.1"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Reviews</label>
//         <input
//           type="number"
//           name="reviews"
//           value={formData.rating.reviews}
//           onChange={(e) => handleNestedChange(e, 'rating')}
//           className="w-full px-3 py-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Amenities</label>
//         <div className="flex items-center mb-2">
//           <input
//             type="checkbox"
//             name="wifi"
//             checked={formData.amenities.wifi}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <span>WiFi</span>
//         </div>
//         <div className="flex items-center mb-2">
//           <input
//             type="checkbox"
//             name="parking"
//             checked={formData.amenities.parking}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <span>Parking</span>
//         </div>
//         <div className="flex items-center mb-2">
//           <input
//             type="checkbox"
//             name="restaurant"
//             checked={formData.amenities.restaurant}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <span>Restaurant</span>
//         </div>
//         <div className="flex items-center mb-2">
//           <input
//             type="checkbox"
//             name="ac"
//             checked={formData.amenities.ac}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <span>AC</span>
//         </div>
//         <div className="flex items-center mb-2">
//           <input
//             type="checkbox"
//             name="pool"
//             checked={formData.amenities.pool}
//             onChange={handleChange}
//             className="mr-2"
//           />
//           <span>Pool</span>
//         </div>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Rooms</label>
//         {formData.rooms.map((room, index) => (
//           <div key={index} className="mb-2 flex items-center">
//             <select
//               name="type"
//               value={room.type}
//               onChange={(e) => handleRoomChange(index, e)}
//               className="w-1/2 px-3 py-2 border rounded mr-2"
//               required
//             >
//               <option value="">Select Room Type</option>
//               {roomTypes.map((type) => (
//                 <option key={type} value={type}>
//                   {type}
//                 </option>
//               ))}
//             </select>
//             <input
//               type="number"
//               name="price"
//               value={room.price}
//               onChange={(e) => handleRoomChange(index, e)}
//               className="w-1/2 px-3 py-2 border rounded"
//               placeholder="Price"
//               required
//             />
//             <span className="ml-2">{room.type}</span>
//             <button
//               type="button"
//               onClick={() => handleRemoveRoom(index)}
//               className="bg-red-500 text-white px-3 py-2 rounded ml-2"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={handleAddRoom}
//           className="bg-blue-500 text-white px-3 py-2 rounded mt-2"
//           disabled={availableRoomTypes.length === 0}
//         >
//           Add Room
//         </button>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Price Range</label>
//         <input
//           type="number"
//           name="min"
//           value={formData.price.min}
//           onChange={(e) => handleNestedChange(e, 'price')}
//           className="w-full px-3 py-2 border rounded"
//           placeholder="Min Price"
//           required
//         />
//         <input
//           type="number"
//           name="max"
//           value={formData.price.max}
//           onChange={(e) => handleNestedChange(e, 'price')}
//           className="w-full px-3 py-2 border rounded mt-2"
//           placeholder="Max Price"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Images</label>
//         {formData.images.map((image, index) => (
//           <div key={index} className="mb-2 flex items-center">
//             <input
//               type="text"
//               value={image}
//               onChange={(e) => handleImageChange(index, e)}
//               className="w-full px-3 py-2 border rounded"
//               placeholder="Image URL"
//               required
//             />
//             <button
//               type="button"
//               onClick={() => handleRemoveImage(index)}
//               className="bg-red-500 text-white px-3 py-2 rounded ml-2"
//             >
//               Remove
//             </button>
//           </div>
//         ))}
//         <button
//           type="button"
//           onClick={handleAddImage}
//           className="bg-blue-500 text-white px-3 py-2 rounded mt-2"
//         >
//           Add Image
//         </button>
//       </div>
//       <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded mt-2">
//         Add Hotel
//       </button>
//     </form>
//   );
// }
