import { useEffect, useState } from 'react';
import {Slider} from '../../layouts/Slider'
import {BookingForm} from '../../component/guestHouse/BookingForm'
import { postMethod } from '../../utils/methods';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react/dist/iconify.js';

export const GuestHouseDetails = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [guestHouseDetails, setGuestHouseDetails] = useState({});

    useEffect(()=>{
        async function HandelguesthouseDetails(){
            let pathArr = location.pathname.split('/');
            
            if(pathArr[2] == "guest-house" && pathArr.length>3){
                const details = await postMethod('/guest-house/each',{id : pathArr[3]})
                if(details.status == 200){
                    setGuestHouseDetails(details.guestHouse);
                }else{
                    toast.warn("Data not found")
                    navigate('/services/guest-house')
                } 
            }
        }
        HandelguesthouseDetails();
    },[])

  return (
    <div className='w-full'>
        <Slider images={guestHouseDetails?.images}/>
        <div className='w-full md:flex mt-2 mb-5'>
            <section className='w-full md:w-[calc(100%-20rem)] lg:w-[calc(100%-25rem)] px-5 md:px-3 flex flex-col items-center'>
                <div className='w-full md:w-full lg:w-[95%]  flex'>
                   <div className='w-full'>
                        <h1 className='text-2xl lg:text-3xl  font-bold font-sans line-clamp-2'>{guestHouseDetails?.name}</h1>
                        <h2 className='text-[20px] text-[#a0a0a0] line-clamp-2'>{guestHouseDetails?.address}</h2>
                   </div>

                   <div className='mx-5'>
                        <div className="">
                            <div className='bg-[#b4da55] py-1 px-5 flex items-center justify-center gap-1'>
                                <div className='text-white flex justify-center text-[22px] font-bold'>
                                {guestHouseDetails?.rating?.rating} 
                                </div>
                                <Icon icon="material-symbols:star" width="25" height="25"  style={{color: '#ffffff'}} />
                            </div>
                            <div className='text-[14px] py-1 bg-[#e4e4e4] flex justify-center'>
                                {guestHouseDetails?.rating?.reviews} Ratings
                            </div>
                        </div>
                    </div>
                </div>

                <div className='w-full md:w-full lg:w-[95%]'>
                    <h1 className='text-2xl font-semibold py-5'>Amenities</h1>
                    <div className='w-ful flex flex-wrap'>
                        {/* <span className='w-[100px]'> */}
                            {guestHouseDetails?.amenities?.ac?(
                                <span className='w-[140px] flex gap-2'>
                                    <Icon icon="cbi:air-conditioner" width="30" height="30"  style={{color: '#000'}} />
                                    <span>AC</span>
                                </span>
                            ):(<></>)}
                        {/* </span> */}
                        {/* <span className=''> */}
                            {guestHouseDetails?.amenities?.tv?(
                                <span className='w-[140px] flex gap-2'>
                                    <Icon icon="cbi:air-conditioner" width="30" height="30"  style={{color: '#000'}} />
                                    <span>TV</span>
                                </span>
                            ):(<></>)}
                        {/* </span> */}
                        {/* <span className='w-[100px]'> */}
                            {guestHouseDetails?.amenities?.wifi?(
                                <span className='w-[140px] flex gap-2'>
                                    <Icon icon="cbi:air-conditioner" width="30" height="30"  style={{color: '#000'}} />
                                    <span>Wifi</span>
                                </span>
                            ):(<></>)}
                        {/* </span> */}
                        {/* <span className='w-[100px]'> */}
                            {guestHouseDetails?.amenities?.parking?(
                                <span className='w-[140px] flex gap-2'>
                                    <Icon icon="cbi:air-conditioner" width="30" height="30"  style={{color: '#000'}} />
                                    <span>Parking</span>
                                </span>
                            ):(<></>)}
                        {/* </span> */}
                        {/* <span className='w-[100px]'> */}
                            {guestHouseDetails?.amenities?.cctv?(
                                <span className='w-[140px] flex gap-2'>
                                    <Icon icon="cbi:air-conditioner" width="30" height="30"  style={{color: '#000'}} />
                                    <span>CCTV</span>
                                </span>
                            ):(<></>)}
                        {/* </span> */}
                        {/* <span className='w-[100px]'> */}
                            {guestHouseDetails?.amenities?.food?(
                                <span className='w-[140px] flex gap-2'>
                                    <Icon icon="cbi:air-conditioner" width="30" height="30"  style={{color: '#000'}} />
                                    <span>Food</span>
                                </span>
                            ):(<></>)}
                        {/* </span> */}
                        {/* <span className='w-[100px]'> */}
                            {guestHouseDetails?.amenities?.pool?(
                                <span className='w-[140px] flex gap-2'>
                                    <Icon icon="cbi:air-conditioner" width="30" height="30"  style={{color: '#000'}} />
                                    <span>Pool</span>
                                </span>
                            ):(<></>)}
                        {/* </span> */}
                    </div>
                </div>

                <div className='w-full md:w-full lg:w-[95%]'>
                    <h1 className='text-2xl font-semibold py-5'>All Types of Room</h1>
                    <div className='w-full flex flex-col lg:flex-row lg:flex-wrap gap-5 mb-5'>
                        {guestHouseDetails?.rooms?.map((room,index)=>(
                            <div key={index} className='w-full lg:w-[45%] p-2 border-[0.5px] border-[#bdbdbd] rounded-md'>
                                <div className='w-full flex justify-between'>
                                    <span className='text-[23px] font-semibold text-[#ff7b47]'>{room.type}</span>
                                    <img className='w-[30%] max-w-[150px]  aspect-video object-cover rounded-md' src={guestHouseDetails?.images[0]?.url} alt="" />
                                </div>
                                <div className="w-full flex border-dashed border-b-[1px] border-[#838383] my-2"></div>
                                <div className='w-full text-[18px]'>
                                &#8377; {room?.price}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className='scrollbar-none sticky top-20 px-5 md:px-3 h-[calc(100vh-5rem)] md:w-[20rem] lg:w-[25rem] overflow-y-scroll'>
                <h2 className="text-2xl font-bold py-2 bg-orange-600 rounded-tr-md rounded-tl-md text-center text-[#fff]">Hotel Booking Form</h2>
                <BookingForm rooms={guestHouseDetails?.rooms} guestHouse_id={guestHouseDetails?._id}/>
            </section>
        </div>
    </div>
  )
}
