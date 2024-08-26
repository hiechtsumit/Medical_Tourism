import { useEffect } from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { toast } from "react-toastify";
import { postMethod } from '../../utils/methods';

export const GuestHouseController = () => {
    const [receivedRequestCount, setReceivedRequestCount] = useState(0)


    useEffect(()=>{
        async function getCounterFun(){
            try {
                const response = await postMethod('/admin/guest-house/request');
                if(response.status === 200){
                    setReceivedRequestCount(response.receivedRequestCount)
                }else{
                    toast.warn(response.message)
                }
            } catch (error) {
                toast.error("Somthing Went Wrong")
            }
        }
        getCounterFun()
    },[])

  return (
    <div className='w-full'>
        <header className="p-3 w-full flex justify-start">
            <Link to={'/'} className="px-2 py-1 text-xl rounded-md border-[2px] border-black">
                {"<"} Back
            </Link>
        </header>
        <h1 className='w-full text-center text-3xl py-5 font-semibold'>Guest House Controller</h1>
        <div className='w-full flex flex-wrap gap-5 justify-around'>
        <Link to={'/guest-house-controller/received-request'} className='relative px-3 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold text-xl rounded-md'>
                Received Request
                <div className='absolute -top-5 -right-5 h-10 w-10 bg-blue-700 flex items-center justify-center rounded-full text-[18px]'>{receivedRequestCount}</div>
            </Link>

            {/* <Link to={'/guest-house-controller/progress-request'} className='relative px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-xl rounded-md'>
            Progress Request

            <div className='absolute -top-5 -right-5 h-10 w-10 bg-blue-700 flex items-center justify-center rounded-full text-[18px]'>{receivedRequest}</div>
            </Link> */}

            <Link to={'/guest-house-controller/past-request'} className='px-3 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-xl rounded-md'>
                Past Request
            </Link>
        </div>

    </div>
  )
}
