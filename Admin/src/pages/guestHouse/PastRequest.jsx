import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { postMethod } from '../../utils/methods';
import { toast } from 'react-toastify';

export const PastRequest = () => {

  const [pastRequest, setPastRequest] = useState([])
  // const [isReloadPage, setIsReloadPage] =useState(false)
  useEffect(()=>{
    async function getCounterFun(){
        try {
            const response = await postMethod('/admin/guest-house/past-request');
            if(response.status === 200){
                setPastRequest(response.pastRequest);
                // console.log(response.pastRequest);
            }else{
                toast.warn(response.message);
            }
        } catch (error) {
            toast.error("Somthing Went Wrong");
        }
    }
    getCounterFun()
},[]);

  return (
    <div className='w-full flex flex-col items-center'>
      <header className="p-3 w-full flex justify-start">
            <Link to={'/guest-house-controller'} className="px-2 py-1 text-xl rounded-md border-[2px] border-black">
                {"<"} Back
            </Link>
        </header>
      
      <h1 className='text-center'>Show All Past Request</h1>
      <div className='w-[90%] md:w-[80%] lg:w-[70%] flex flex-col items-center gap-5'>
        {pastRequest && pastRequest.map((request,i)=>(
          <div key={i} className='w-full border-[1px] border-[#8a8a8a] rounded-md'>
          <div className='w-full flex items-center justify-around gap-3 text-[16px] font-bold bg-[#2e6be6] text-white rounded-t-md'>
            <span>
              {request?.user.name} <br />
              {request?.user.phone}
            </span>
            <span >
              {request?.user._id} <br />
              <a href={`mailto:${request.user.email}`}>
                {request.user.email}
              </a>
            </span>
          </div>
          <div className='w-full p-2'>
            {/* {requestarr && requestarr.request?.map((request,j)=>(<> */}
              {/* <div className='border-b-[1px] border-[#8a8a8a] border-dashed my-2'></div> */}
              <div className='w-full py-2 flex justify-between'>
                <div className='w-full flex flex-col text-[14px]'>
                    <span>{request.name}</span>
                    <span>{request.phone}</span>
                    <a className='text-blue-500 hover:text-blue-700' href={`mailto:${request.email}`}>{request.email}</a>
                </div>
                <div className='w-full'>
                    <span className='text-[18px] font-semibold line-clamp-2'>{request.guestHouse.name}</span>
                    <span>{request.noOfRooms} x {request.room?.type} = {Number(request?.noOfRooms)*Number(request.room?.price)}</span> <br />
                    <span>In : {request.checkIn}</span> <br />
                    <span>Out : {request.checkOut}</span>

                </div>
              </div>
              {/* <div className='w-full flex justify-end gap-7'>
                <button onClick={()=>HandelAcceptOrder(request._id)} className='px-3 py-2 rounded-md text-xl font-semibold text-white bg-green-500 hover:bg-green-700'>Accept</button>
                <button onClick={()=>HandelDenyOrder(request._id)} className='px-3 py-2 rounded-md text-xl font-semibold text-white bg-red-500 hover:bg-red-700'>Deny</button>
              </div> */}
              {/* </>))} */}
          </div>
        </div>
        ))}
      </div>
      </div>
  )
}
