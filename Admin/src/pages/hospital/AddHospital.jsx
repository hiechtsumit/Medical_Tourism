import { useState } from 'react';
import {Link} from 'react-router-dom'
// import { Icon } from '@iconify/react';
import {toast} from 'react-toastify'
import { postMethod } from '../../utils/methods';

export const AddHospital = () => {
  const [hospital, setHospital] = useState({
    name: '',
    location: '',
    locationLink: '',
    about: '',
    images: []
  });
  const [departments, setDepartments] = useState([]);
  const [newImage, setNewImage] = useState('');
  const [newDepartment, setNewDepartment] = useState({ name: '', about: '', imageUrl: '' });
  const [newDoctor, setNewDoctor] = useState({ name: '', about: '', gender : '' });
  const [selectedDepartmentIndex, setSelectedDepartmentIndex] = useState(null);

  const handleHospitalChange = (e) => {
    setHospital({ ...hospital, [e.target.name]: e.target.value });
  };

  const addImage = () => {
    if (newImage) {
      setHospital({ ...hospital, images: [...hospital.images, {url : newImage}] });
      setNewImage('');
    }
  };

  const deleteImage = (index) => {
    const updatedImages = hospital.images.filter((_, i) => i !== index);
    setHospital({ ...hospital, images: updatedImages });
  };

  const handleDepartmentChange = (e) => {
    setNewDepartment({ ...newDepartment, [e.target.name]: e.target.value });
  };

  const addDepartment = () => {
    if (newDepartment.name && newDepartment.about) {
      setDepartments([...departments, { ...newDepartment, doctors: [] }]);
      setNewDepartment({ name: '', about: '', imageUrl: '' });
    }
  };

  const deleteDepartment = (index) => {
    const updatedDepartments = departments.filter((_, i) => i !== index);
    setDepartments(updatedDepartments);
  };

  const handleDoctorChange = (e) => {
    setNewDoctor({ ...newDoctor, [e.target.name]: e.target.value });
  };

  const addDoctor = () => {
    if (newDoctor.name && newDoctor.about && newDoctor.gender && selectedDepartmentIndex !== null) {
      const updatedDepartments = [...departments];
      updatedDepartments[selectedDepartmentIndex].doctors.push(newDoctor);
      setDepartments(updatedDepartments);
      setNewDoctor({ name: '', about: '', gender : '' });
    }
  };

  const deleteDoctor = (departmentIndex, doctorIndex) => {
    const updatedDepartments = [...departments];
    updatedDepartments[departmentIndex].doctors = updatedDepartments[departmentIndex].doctors.filter((_, i) => i !== doctorIndex);
    setDepartments(updatedDepartments);
  };

  const handleSubmit = async(e) => {
        try {
            e.preventDefault();

            // setIsLoaded(true)
            const body = { hospital, departments }
            const response = await postMethod('/admin/hospital/add',body);
            // console.log("Respones = ",response);
            if(response.status === 200){
                // Show successfully message
                toast.success("Hospital Successfully Added");
                setHospital({
                    name: '',
                    location: '',
                    locationLink: '',
                    about: '',
                    images: []
                  })
                // loginContext.setCookie("token",response.token);
                // loginContext.setRelodeUser(prev=>!prev);
                // navigate('/');
            }else{
                // Register error
                toast.error("Sign Up Error");
            }
        } catch (error) {
            console.log(error);
            toast.error("Server Error!")
        }
    // e.preventDefault();
    // console.log({ hospital, departments });
    // Here you would typically send this data to your backend
  };

  return (
    <div className="container flex flex-col items-center mx-auto p-4">
      <div className='w-full'>
        <Link to={'/'} className="px-2 py-1 text-xl rounded-md border-[2px] border-black">
        {"<"} Back
        </Link>
      </div>
      <h1 className="w-full text-center text-3xl font-bold py-4 mb-3">Add New Hospital</h1>
      <form onSubmit={handleSubmit} className="w-full lg:w-[70%] space-y-4">
        <input
          type="text"
          name="name"
          value={hospital.name}
          onChange={handleHospitalChange}
          placeholder="Hospital Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          value={hospital.location}
          onChange={handleHospitalChange}
          placeholder="Location"
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="locationLink"
          value={hospital.locationLink}
          onChange={handleHospitalChange}
          placeholder="Location Link"
          className="w-full p-2 border rounded"
        />
        <textarea
          name="about"
          value={hospital.about}
          onChange={handleHospitalChange}
          placeholder="About"
          className="w-full p-2 border rounded"
        />

        <div>
          <h2 className="text-xl font-semibold mb-2">Images</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              value={newImage}
              onChange={(e) => setNewImage(e.target.value)}
              placeholder="Image URL"
              className="flex-grow p-2 border rounded"
            />
            <button type="button" onClick={addImage} className="bg-blue-500 hover:bg-blue-700 text-white p-2 rounded">
              Add Image
            </button>
          </div>
          <div className="mt-2">
            {hospital.images.map((image, index) => (
              <div key={index} className="flex items-center space-x-2 mt-1">
                <span className="flex-grow">{image?.url}</span>
                <button type="button" onClick={() => deleteImage(index)} className="text-red-500 hover:font-semibold">
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Departments</h2>
          <div className="space-y-2">
            <input
              type="text"
              name="name"
              value={newDepartment.name}
              onChange={handleDepartmentChange}
              placeholder="Department Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="about"
              value={newDepartment.about}
              onChange={handleDepartmentChange}
              placeholder="Department About"
              className="w-full p-2 border rounded"
            />
            <input
              type="text"
              name="imageUrl"
              value={newDepartment.imageUrl}
              onChange={handleDepartmentChange}
              placeholder="Department Image URL"
              className="w-full p-2 border rounded"
            />
            <button type="button" onClick={addDepartment} className="bg-green-500 hover:bg-green-700 text-white p-2 rounded">
              Add Department
            </button>
          </div>
          <div className="mt-2">
            {departments.map((dept, index) => (
              <div key={index} className="border-[2px] p-2 mt-2 rounded-md">
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-[18px]">{dept.name}</h3>
                  <button type="button" onClick={() => deleteDepartment(index)} className="text-red-500 hover:font-semibold">
                    Delete Department
                  </button>
                </div>
                <p>About : {dept.about}</p>
                <p className='overflow-x-hidden'>Image url: {dept.imageUrl}</p>
                <h4 className="font-bold text-[18px] mt-2">Doctors:</h4>
                {dept.doctors?.map((doctor, doctorIndex) => (
                  <div key={doctorIndex} className="ml-4 mt-1">
                    <div className="flex justify-between items-center">
                      <span className='font-semibold'>{doctorIndex+1}. {doctor.name}</span>
                      <button type="button" onClick={() => deleteDoctor(index, doctorIndex)} className="text-red-500 hover:font-semibold">
                        Delete Doctor
                      </button>
                    </div>
                    <p className="text-sm">Gender : {doctor.gender}</p>
                    <p className="text-sm">About : {doctor.about}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2">Add Doctor</h2>
          <select
            value={selectedDepartmentIndex !== null ? selectedDepartmentIndex : ''}
            onChange={(e) => setSelectedDepartmentIndex(Number(e.target.value))}
            className="w-full p-2 border rounded mb-2"
          >
            <option value="">Select Department</option>
            {departments.map((dept, index) => (
              <option key={index} value={index}>{dept.name}</option>
            ))}
          </select>
          <input
            type="text"
            name="name"
            value={newDoctor.name}
            onChange={handleDoctorChange}
            placeholder="Doctor Name"
            className="w-full p-2 border rounded mb-2"
          />
          <select name='gender' value={newDoctor.gender} onChange={handleDoctorChange} className='w-full p-2 border rounded mb-2'>
            <option value="" disabled>Select a gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="others">Others</option>
          </select>
          <input
            type="text"
            name="about"
            value={newDoctor.about}
            onChange={handleDoctorChange}
            placeholder="Doctor About"
            className="w-full p-2 border rounded mb-2"
          />
          <button type="button" onClick={addDoctor} className="bg-purple-500 hover:bg-purple-700 text-white p-2 rounded">
            Add Doctor
          </button>
        </div>

        <button type="submit" className="bg-blue-600 hover:bg-blue-800 font-semibold text-white p-2 rounded w-full">
          Submit Hospital
        </button>
      </form>
    </div>
  );
};