
import {useEffect,useContext, useState} from 'react'
import { Icon } from "@iconify/react";
import {toast} from 'react-toastify'
import { FilterOrderHistory } from '../FilterOrderHistory';
import { LoginContext } from '../../../contextApi/LoginState';
import { postMethod } from '../../../utils/methods';


export const OrderGuestHouse = ()=>{
  const loginContext = useContext(LoginContext);
  const [filter, setFilter]= useState({
    date:'',
    status:'all'
  });
  const [searchOrder, setSearchOrder] = useState('')
  const [ordersDetails, setOrdersDetails] = useState([])

  useEffect(()=>{
    // console.log("inside order page",loginContext.isAuthenticate)
    orderGuestHouse()
  },[filter])

  async function orderGuestHouse(){
    const token = loginContext?.cookies?.ICM_AUTH_TOKEN
    try {
     if(token){
      const response = await postMethod('/order/guest-house',{token, filter, searchOrder})
        if(response.status === 200){
            // console.log(response.status)
            setOrdersDetails(response.guestHouseOrder)
        }else if(response.status === 404){
            toast.error("User not found")
        }else if(response.status === 502){
            toast.error("Server Error")
        }
     }else{
      toast.error("Authentication Error")
     }
    } catch (error) {
      toast.error("Server Error")
    }
  }

  const HandelChangeSearch = async(e)=>{
    setSearchOrder(e.target.value)
  }

    return (
        <div className="flex justify-center w-full pb-5">
            <div className="sticky top-20 h-[calc(100vh-5rem)] hidden md:flex md:w-[15rem] lg:md:w-[20rem] border-r-[10px]">
                <FilterOrderHistory filter={filter} setFilter={setFilter}/>
            </div>
        
            <div className="w-[95%] md:w-[calc(100%-15rem)] lg:w-[calc(100%-20rem)]  flex flex-col items-center">
                <div className="w-full md:w-[80%] py-5 flex">
                    <input onChange={HandelChangeSearch} value={searchOrder} type="text" id="" placeholder="Search your orders here" className="border-[2px] p-2 rounded-l-md w-full outline-none" />
                    <button className="px-3  rounded-r-md flex gap-2 items-center bg-[#2a2eff]">
                        <Icon icon="ic:baseline-search" width="25" height="25"  style={{color: 'white'}} /> 
                        <span className="font-semibold text-[#fff] flex">
                            <span>Search&nbsp;</span>
                            {/* <span>Orders</span> */}
                        </span>
                    </button>
                </div>

                <div className="w-full flex flex-col items-center justify-center gap-5 px-3">
                    {ordersDetails.length>0?(<></>):(<div className='text-[20px]'>No orders found</div>)}
                    {ordersDetails && ordersDetails?.map((order,index)=>(
                        <div key={index} className=" w-[100%] border-[1.5px] p-2 rounded-md border-[#ff0000] flex justify-between md:items-center flex-col md:flex-row md:gap-3 cursor-pointer hover:shadow-2xl shadow-[#000]"> 
                            <div className="flex items-center">
                                <img className=" h-[20vw] md:h-[10vw] flex justify-center items-center"   src={order.guestHouse.images[0]?.url} alt="" />
                                <div className="">
                                    <h1 className="text-2xl font-semibold ml-5 text-[#4646ff] line-clamp-1">{order.guestHouse.name}</h1>
                                    <p className="text-[16px] font-semibold ml-5">{order.room.type} : {order.noOfRooms}</p>
                                </div>
                            </div>
                            <div className="hidden md:flex">
                                <p className="text-[18px] flex font-semibold">
                                  <span>&#8377;&nbsp;</span>
                                  <span>{Number(order?.noOfRooms)*Number(order.room?.price)}</span></p>
                            </div>
                            <div className="ml-[95px] md:m-0">
                                <p>
                                    Requested on {order.createdAt?.substring(0,10)}
                                </p>
                                <p>
                                    {order.status == ''?(<span className='text-orange-600 text-[18px] font-semibold'>Order Status : Request Sent</span>):(<></>)}
                                    {order.status == 'accept'?(<span className='text-green-600 text-[18px] font-semibold'>Order Status : Accepted</span>):(<></>)}
                                    {order.status == 'deny'?(<span className='text-red-600 text-[18px] font-semibold'>Order Status : Deny</span>):(<></>)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
               
             </div>
        </div>
    )
}


