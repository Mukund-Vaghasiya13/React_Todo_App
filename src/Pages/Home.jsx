import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { ApiHandler } from "../ApiHandler/ApiHandler";

function HomePage() {

    const navigate = useNavigate()

    const FetchData = async ()=>{

       await ApiHandler.GetData({
            url:"/api/todo/v1/Todos/todo/gettodo"
        })
    }

    useEffect(()=>{
        const Logintkn = localStorage.getItem("accesstoken")
        
        if(Logintkn){
            // Do home things
            (async()=>{
                await FetchData()
            })()
        }else{
            navigate("/login")  
        }
    },[])

    return ( 
        <> 
           <Header/>
        </>
    );
}

export default HomePage;