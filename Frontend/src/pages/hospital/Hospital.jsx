import { useEffect, useState } from "react"
import { getMethod, postMethod } from "../../utils/methods"
import { Icon } from "@iconify/react/dist/iconify.js"
import { Link } from "react-router-dom"
import { toast } from "react-toastify"
import ClipLoader from "react-spinners/ClipLoader";


export const Hospital = () => {
    const [hospitals, setHospitals] = useState([]);
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(()=>{
        SearchFun();
    },[search])

    useEffect(()=>{
        async function HandelAllHospital(){
            try {
                setIsLoading(true)
                const response = await getMethod('/hospital');
                if(response.status === 200){
                    setHospitals(response.hospitals)
                    setIsLoading(false)
                }else{
                    toast.error(response.message)
                }
            } catch (error) {
                toast.error("Somthing went wrong")
            }
        }
        HandelAllHospital();
    },[])


    function HandelSearch(e){
        if(e.key == "Enter"){
            if(search !== ''){
                SearchFun();
            }
        }
    }

    async function SearchFun(){
        try {
            setIsLoading(true)
            const response = await postMethod('/hospital/search',{search});
            if(response.status === 200){
                setHospitals(response.hospitals)
                setIsLoading(false)
            }else{
                toast.error(response.message)
            }
        } catch (error) {
            toast.error("Somthing went wrong")
        }
    }

  return (
        <div className="w-full flex flex-col items-center p-2">
            <header className="w-full md:w-[70%] lg:w-[60%] p-2 relative flex items-center">
                <input value={search} onChange={(e)=>{setSearch(e.target.value);SearchFun()}} onKeyUp={(e)=>HandelSearch(e)} className="w-full p-2 pl-10 border-[2px] rounded-full" type="text" placeholder="Search hospital name or hospital location" />
                <Icon className="absolute left-4" icon="mingcute:search-line" width="30" height="30"  style={{color: 'black'}} />
                {/* <Icon className="absolute left-2" icon="ic:round-search" width="30" height="30"  style={{color: 'black'}} /> */}
            </header>
            <div className="w-full flex flex-col items-center gap-3">
                {isLoading?(
                    <div className="h-[calc(100vh-5rem)] flex justify-center items-center">
                        <ClipLoader size={50}/>
                    </div>
                ):(
                    <>
                    {hospitals.length>0?(
                        <>
                            {hospitals?.map((hospital,index)=>(
                                <div key={index} className="w-[95%] md:w-[70%] lg:w-[60%] flex gap-2 border-[1px] bg-white p-2 rounded-md">
                                    <img className="w-[35%] aspect-video rounded-md" src={hospital.images[0]?.url} alt={hospital.name} />
                                    <div className="w-full">
                                        <Link to={`/services/hospital/${hospital._id}`} className="text-xl font-semibold">{hospital.name.toUpperCase()}</Link>
                                        <a href={hospital.locationUrl} target="_blank" className="text-[14px] mt-2 line-clamp-1 underline text-[#3e74ff]">{hospital.locationTxt}</a>
                                        <p className="text-[14px] line-clamp-2">{hospital.about}</p>
                                    </div>
                                </div>
                            ))}
                        </>
                    ):(<div className="h-[calc(100vh-5rem)] flex items-center justify-center text-xl font-semibold">Data Not Found</div>)}
                    </>
                )}
            </div>
        </div>
  )
}
