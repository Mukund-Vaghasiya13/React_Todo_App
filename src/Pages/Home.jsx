import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { ApiHandler } from "../ApiHandler/ApiHandler";
import AddTodo from "../Components/AddTodo";

function HomePage() {

    const navigate = useNavigate()
    const [Todo,setTodo] = useState({})

    const FetchData = async ()=>{

       const response = await ApiHandler.GetData({
            url:"/api/todo/v1/Todos/todo/gettodo"
        })

        if(response.data.success){
            const ArrayOfdata = response.data
            console.log(ArrayOfdata)
        }
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
           <div className="h-screen w-screen flex flex-col justify-center">
           <AddTodo FetchData={FetchData}/>
           <div className="he">

           </div>
           </div>
        </>
    );
}

export default HomePage;