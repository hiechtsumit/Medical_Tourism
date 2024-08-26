
import {Icon} from '@iconify/react'
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getMethod } from '../../utils/methods';

export const GuestHouse = () =>{
     const [guestHouses , setGuestHouses] = useState([]);
    //  const guestHouseDetails =[
    //     {
    //         name:'Hotel Exclusivo Plaza',
    //         address:'Bommasandra, Bangalore',
    //         rating:{
    //             rating:4.6,
    //             reviews: 1220,
    //         },
    //         facility:{
    //             wifi:true,
    //             parking:true,
    //             restaurant:true,
    //             ac:true,
    //         },
    //         price:{
    //             min: 1500,
    //             max: 5500,
    //         },
    //         thumbnail:'https://imgs.search.brave.com/Liucsb8kGhwRg-UfheEv4MLitCdXyvc6u9lq8GY_b7E/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9y/b29tLWludGVyaW9y/LWhvdGVsLWJlZHJv/b21fMjMtMjE1MDY4/MzQyMS5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw',
    //     }
    //  ]


    useEffect(()=>{
      async function HandelAllHospital(){
        const response = await getMethod('/guest-house');
        console.log(response)
        if(response.status === 200){
            setGuestHouses(response.guesthouses)
        }else{
            toast.error(response.message)
        }
      }
      HandelAllHospital();
    },[])

    return (
        <div className="w-full flex relative">
            <div className='w-0 h-[calc(100vh-5rem)] hidden md:flex md:w-[30%] lg:w-[20%] sticky top-20 px-2'>
                <p className='text-[25px]'>This is Filter Section</p>
            </div>
        <div className='w-full md:w-[70%] lg:w-[80%] flex flex-col items-center gap-7'>
        {guestHouses?.map((item, index)=>(<>
            <div key={index} className="w-[90%] h-auto md:h-[30vw] md:w-[100%] lg:h-[20vw] lg:w-[100%] flex flex-col md:flex-row pb-3 md:pb-0 gap-2 md:gap-3 bg-[#e7e7e7] rounded-md md:rounded-none">
                <Link className='aspect-video md:h-full md:w-[30%] lg:w-[50%]' to={`/services/guest-house/${item._id}`}>
                    <img  className ="w-full h-full rounded-tr-md rounded-tl-md md:rounded-none object-cover cursor-pointer" 
                    src={item?.images[0]?.url} 
                    onError={(e)=>{ 
                    e.target.src="https://imgs.search.brave.com/SrG0PaOf8BRR6ypU00kQGXRZKEFLHfM56pyjNXlO5WM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAzLzQwLzc1Lzc2/LzM2MF9GXzM0MDc1/NzY5MF9YZnJvN2wx/TUJHU0M4ZEh0eFZ2/aklFVWtJVm9za1JH/Ny5qcGc"}
                    }/>
                </Link>
                <div className="w-full flex flex-col justify-between p-2 md:p-0">
                    <div className='w-full space-y-1'>
                        <Link to={`/services/guest-house/${item._id}`}>
                            <p className="text-2xl lg:text-3xl font-semibold line-clamp-1 cursor-pointer">{item?.name}</p>
                        </Link>
                        <p className="text-blue-700">{item?.address}</p>
                        <div className="w-full py-0 lg:py-3 flex">
                            <span className="bg-green-600 py-1 px-2 flex items-center gap-1 rounded-md">
                                <span className='text-white'>
                                {item?.rating?.rating} 
                                </span>
                                <Icon icon="noto:star" />
                            </span>
                            &nbsp;
                            <span className="flex items-center">
                                ({item?.rating?.reviews} Reviews)
                            </span>
                        </div>
                        <div className="flex gap-3 w-full text-[13px] md:text-[16px] ">
                            <span>{item?.amenities?.ac?(<>AC</>):(<></>)}</span>
                            <span>{item?.amenities?.wifi?(<>Wifi</>):(<></>)}</span>
                            <span>{item?.amenities?.parking?(<>Parking</>):(<></>)}</span>
                            <span>{item?.amenities?.food?(<>Food</>):(<></>)}</span>
                        </div>
                    </div>
                    <div className="w-full md:hidden flex border-dashed border-b-[1px] border-[#838383] my-2"></div>
                   <div className="w-full flex justify-between items-center md:py-2 md:pr-2">
                    <p className="font-semibold text-[22px] lg:text-2xl"> &#8377; {item?.price?.min}  - {item?.price?.max} </p>
                    <div className="flex gap-3 lg:gap-5 ">
                      <Link to={`/services/guest-house/${item._id}`}>
                        <button className="border-[1px] border-[#262626] py-1 px-2 rounded-md">View Details</button>
                      </Link>
                      <Link to={`/services/guest-house/${2}`}>
                        <button className="py-1 px-2 bg-green-600 text-white hover:bg-green-700 rounded-md">Book Now</button>
                      </Link>
                    </div>
                   </div>
                </div>
            </div>
        </>))}
        </div>
    </div>
    );
}

