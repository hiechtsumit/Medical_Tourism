import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import { postMethod } from '../../utils/methods';
import { toast } from "react-toastify";
import { useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";

export const ReceivedRequest = () => {
  const [receivedRequest, setReceivedRequest] = useState([])
  const [isReloadPage, setReloadPage] = useState(false)
  const [isReloadBtn, setIsReloadBtn] = useState(false)

  useEffect(()=>{
    async function getCounterFun(){
        try {
            const response = await postMethod('/admin/guest-house/received-request');
            if(response.status === 200){
              setIsReloadBtn(false);
              setReloadPage(prev=>!prev);
                setReceivedRequest(response.receivedRequest);
                // console.log(response.receivedRequest);
            }else{
                toast.warn(response.message);
            }
        } catch (error) {
            toast.error("Somthing Went Wrong");
        }
    }
    getCounterFun()
},[isReloadPage]);


 async function HandelAcceptOrder(id){
     try {
      const con = confirm("Are you want to accept this request?")
      if(!con){
        return;
      }
            const response = await postMethod(`/admin/guest-house/received-request/accept/${id}`);
            if(response.status === 200){
              setReloadPage(prev=>!prev);
              toast.success("Accept",{autoClose:1000});
            }else{
                toast.warn(response.message);
            }
        } catch (error) {
            toast.error("Somthing Went Wrong");
        }
 }


 async function HandelDenyOrder(id){
  try {
    const con = confirm("Are you want to Deny this request?")
    if(!con){
      return;
    }
    const response = await postMethod(`/admin/guest-house/received-request/deny/${id}`);
    if(response.status === 200){
      setReloadPage(prev=>!prev)
      toast.success("Deny",{autoClose:1000});
    }else{
        toast.warn(response.message)
    }
  } catch (error) {
      toast.error("Somthing Went Wrong")
  }
}

  return (
    <div className='w-full'>
      <header className="fixed top-0 z-10 p-3 w-full flex justify-between bg-slate-300">
            <Link to={'/guest-house-controller'} className="px-2 py-1 text-xl rounded-md border-[2px] border-black">
                {"<"} Back
            </Link>

            {!isReloadBtn?(
              <button onClick={()=>setIsReloadBtn(true)} className="w-24 text-xl rounded-md border-[2px] border-black">Reload</button>
            ):(
              <div className="w-24 px-2 py-1 text-xl text-center items-center rounded-md border-[2px] border-black">
                <ClipLoader size={20} color="#000" />
              </div>
            )
          }
        </header>

        <h1 className='w-full text-center text-3xl pt-20 pb-5'>All Request For Booking</h1>

        <div className='w-full flex flex-col items-center'>
          <div className='w-[90%] md:w-[80%] lg:w-[70%] flex flex-col items-center gap-5'>
            {receivedRequest && receivedRequest.map((requestarr,i)=>(
              <div key={i} className='w-full border-[1px] border-[#8a8a8a] rounded-md'>
                <div className='w-full flex items-center justify-around gap-3 text-[16px] font-bold bg-[#2e6be6] text-white rounded-t-md'>
                  <span>
                    {requestarr?.request[0]?.user.name} <br />
                    {requestarr?.request[0]?.user.phone}
                  </span>
                  <span >
                    {requestarr?.request[0]?.user._id} <br />
                    <a href={`mailto:${requestarr?.request[0]?.user.email}`}>
                      {requestarr?.request[0]?.user.email}
                    </a>
                  </span>
                </div>
                <div className='w-full p-2'>
                  {requestarr && requestarr.request?.map((request,j)=>(
                    <div key={j} className='w-full'>
                      <div className='border-b-[1px] border-[#8a8a8a] border-dashed my-2'></div>
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
                      <div className='w-full flex justify-end gap-7'>
                        <button onClick={()=>HandelAcceptOrder(request._id)} className='px-3 py-2 rounded-md text-xl font-semibold text-white bg-green-500 hover:bg-green-700'>Accept</button>
                        <button onClick={()=>HandelDenyOrder(request._id)} className='px-3 py-2 rounded-md text-xl font-semibold text-white bg-red-500 hover:bg-red-700'>Deny</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
    </div>
  )
}

