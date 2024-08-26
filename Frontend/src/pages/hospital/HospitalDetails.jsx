import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { postMethod } from '../../utils/methods';
import { toast } from 'react-toastify';
import { Slider } from '../../layouts/Slider';

export const HospitalDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [hospitalDetails, setHospitalDetails] = useState({});
    // const [departments, setDepartments] = useState([]);

    useEffect(()=>{
        async function hospitalDetails(){
            let pathArr = location.pathname.split('/');
            
            if(pathArr[2] == "hospital" && pathArr.length>3){
                const details = await postMethod('/hospital/each',{id : pathArr[3]})
                if(details.status == 200){
                    // console.log(details.hospital?.departments)
                    setHospitalDetails(details.hospital);
                }else{
                    toast.warn("data not found")
                    navigate('/services/hospital')
                } 
            }
        }
        hospitalDetails();
    },[location.pathname])

  return (
    <div className='w-full flex flex-col items-center pb-10'>
        {/* <header className="p-3 w-full flex justify-start">
            <Link to={'/'} className="px-2 py-1 text-xl rounded-md border-[2px] border-black">
            {"<"} Back
            </Link>
        </header> */}
        <div className='w-full mb-4'>
            <Slider images={hospitalDetails.images} />
        </div>
        <div className="w-[90%] flex flex-col items-center">
            <div className="w-full">
                <div className="w-full text-center text-2xl font-bold text-green-600">{hospitalDetails?.name?.toUpperCase()}</div>
                <p className='text-center py-3'><a href={hospitalDetails?.locationUrl} target="_blank" className="text-[16px] mt-2 underline text-[#3e74ff]">{hospitalDetails?.locationTxt}</a></p>
                <p className="text-[18px] text-center"><i>{hospitalDetails?.about}</i></p>
            </div>
            <div className='w-full flex flex-col items-center'>
                <div className='w-full mt-10 border-b-[0.5px] border-[#515151]'></div>
                <center className='text-3xl py-5 font-semibold'>Departments</center>
                <div className='w-[80%] mb-10 border-b-[0.5px] border-[#515151]'></div>
                <div className='w-full flex flex-wrap justify-center gap-4'>
                    {hospitalDetails.departments?.map((department,index)=>(
                        <Link to={`/services/hospital/${location.pathname?.split('/')[3]}/${department._id}`} key={index} className='w-[45%] md:w-[30%] lg:w-[23%] aspect-square rounded-md shadow-md shadow-[#696969] cursor-pointer'>
                            <img className='w-full h-full rounded-md' src={department.thumbnil} alt="" />
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}
