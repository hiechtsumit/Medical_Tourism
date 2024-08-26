import { createContext, useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";
import { base_url } from "../utils/constant";
import { toast } from "react-toastify";
    


export const LoginContext = createContext(null);


export const LoginState = ({children})=>{
    const [user,setUser] = useState({});
    const [cookies, setCookie, removeCookie] = useCookies(['ICM_AUTH_TOKEN']);
    const [relodeUser, setRelodeUser] = useState();
    const [isAuthenticate, setIsAuthenticate] = useState(!!cookies.ICM_AUTH_TOKEN);


    useEffect(()=>{
        try{
            // console.log("relode");
            if(cookies.ICM_AUTH_TOKEN){
                fun();
            }
        }catch(err){
            toast.error("Authentication Error !")
            // alert("Server Error",err)
            return;
        }
    },[relodeUser]);

    async function fun(){
        // await setIsAuthenticate(true);
        if(cookies.ICM_AUTH_TOKEN){
            let token = cookies.ICM_AUTH_TOKEN;
            let res = await fetch(`${base_url}/user`,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body : JSON.stringify({
                    token
                }),
            });
            let u = await res.json();
            if(u.status === 200){
                setIsAuthenticate(true);
                setUser(u.user);
            }else if(u.status === 404){
                removeCookie('ICM_AUTH_TOKEN');
                setIsAuthenticate(false);
                <Navigate to={'/login'} />
            }else{
                removeCookie('ICM_AUTH_TOKEN');
                // alert(u.message);
                setIsAuthenticate(false);
                toast.error("Authentication Error !")
            }
        }
    }

    return (
        <LoginContext.Provider value={{isAuthenticate, setIsAuthenticate, user, setUser, cookies, setCookie, removeCookie, relodeUser, setRelodeUser}}>
            {children}
        </LoginContext.Provider>
    )
}
