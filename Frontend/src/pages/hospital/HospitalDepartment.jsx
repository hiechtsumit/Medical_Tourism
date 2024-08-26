
import { postMethod } from "../../utils/methods";
import { useEffect, useState } from "react";
import {  useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
import default_doctor_avtar from "../../assets/image/doctor/default-doctor-avtar.jpg"
import male_doctor_avtar from "../../assets/image/doctor/default-dr-male.png"
import female_doctor_avtar from "../../assets/image/doctor/default-dr-female.png"

import { HospitalDepartmentBookForm } from '../../component/hospital/HospitalDepartmentBookForm'

export const HospitalDepartment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [department, setDepartment] = useState({});

  useEffect(()=>{
    async function hospitalDetails(){
        let pathArr = location.pathname.split('/');
        // console.log(pathArr)
        
        if(pathArr[2] == "hospital" && pathArr.length>4){
            const details = await postMethod('/hospital/each/department',{id : pathArr[4]})
            if(details.status == 200){
                // console.log(details.hospital?.departments)
                setDepartment(details.department);
            }else{
                toast.warn("data not found")
                navigate(`/services/hospital/${pathArr[3]}`)
            } 
        }
    }
    hospitalDetails();
},[])


  return (
    <div className="w-full flex flex-col items-center pb-10">
      <header className="py-7 text-5xl font-bold text-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent">{department.name?.toUpperCase()}</header>
      <section className="flex flex-col md:flex-row md:justify-center items-center gap-5">
        <div className="w-[60%] md:w-[30%] lg:w-[20%] rounded-md">
          <img className="w-full h-full rounded-md" src={department?.thumbnil} alt="" />
        </div>
        <div className="w-[90%] md:w-[40%] text-center">
            {department?.about} 
        </div>
      </section>

      <div className="w-[90%] text-center text-3xl font-semibold flex items-center gap-3">
        <div className="w-full border-b-[2px]"></div>
        <p className="text-4xl font-bold bg-gradient-to-r from-yellow-600 via-red-600 to-yellow-600 bg-clip-text text-transparent py-5">DOCTORS</p>
        <div className="w-full border-b-[1.5px]"></div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center md:items-start">
        <div className="w-[90%] flex flex-col lg:flex-row lg:justify-around flex-wrap gap-5 py-5">
          {department.doctors?.map((doctor,i)=>(
            <div key={i} >
              {/* visible Phone and tab screen */}
              <div className="w-full flex gap-3 lg:hidden p-3 border-b-[1.5px]">
                <div className="h-28 aspect-square border-3 rounded-full">
                  {doctor?.gender !== ''?(
                    <img className="h-full aspect-square rounded-full" src={doctor.gender==='Female'?`${female_doctor_avtar}`:`${male_doctor_avtar}`} alt="Doctor" />
                  ):(
                    <img src={default_doctor_avtar} alt="Doctor" />
                  )}
                  </div>
                  <div className="flex flex-col justify-center">
                    <span className="text-green-600 font-bold text-xl">{doctor.name}</span>
                    <p className="line-clamp-2">{doctor.about}</p>
                  </div>
              </div>
             {/* visible onlu laptop screen */}
              <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 shadow-md shadow-[#dcdcdc] hidden lg:flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
                <div className="w-[30%] aspect-square mt-8 rounded-full border-4 border-[#ebebeb] z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500 overflow-hidden">
                  {doctor?.gender !== ''?(
                    <img className="h-full aspect-square rounded-full" src={doctor.gender==='Female'?`${female_doctor_avtar}`:`${male_doctor_avtar}`} alt="Doctor" />
                  ):(
                    <img src={default_doctor_avtar} alt="Doctor" />
                  )}
                </div>
                <div className="z-10  group-hover:-translate-y-10 transition-all duration-500">
                  <span className="text-2xl font-semibold">{doctor.name}</span>
                  <p className="w-[90%] text-center line-clamp-2">{doctor.about}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="scrollbar-none px-3 h-[calc(100vh-5rem)] sticky top-20 md:overflow-y-scroll rounded-md">
          <HospitalDepartmentBookForm department={department}/>
        </div>
      </div>


      

    </div>
  )
}
