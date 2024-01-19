import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { ApiHandler } from "../ApiHandler/ApiHandler";
import AddTodo from "../Components/AddTodo";

function HomePage() {

    const navigate = useNavigate()
    const [Todo,setTodo] = useState([])

    const FetchData = async ()=>{

       const response = await ApiHandler.GetData({
            url:"/api/todo/v1/Todos/todo/gettodo"
        })

        if(response?.data.success){
            const ArrayOfdata = response.data
            setTodo(ArrayOfdata?.data)
        }
    }

    const RemoveTodo = async(id)=>{
       const data = {
            "TodoID":id
        }
        const response = await ApiHandler.PostRequest({
            data:data,
            url:"/api/todo/v1/Todos/todo/delete"
        })

        if(response?.data.success){
           await FetchData()
        }
    }

    const EditTodo = (id)=>{
        
    }

    useEffect(()=>{
        const Logintkn = localStorage.getItem("accesstoken")
        
        if(Logintkn){
            // Do home things
            (async()=>{
                console.log("Fetching data...");
               await FetchData()
                console.log("Data fetched successfully");
            })()
        }else{
            navigate("/login")  
        }
    },[])

    return ( 
        <> 
           <Header/>
           <div className="h-screen w-screen flex flex-col items-center justify-center gap-10">
          
           <AddTodo FetchData={FetchData}/>

            <div className="h-1/2 w-10/12 overflow-scroll flex flex-col items-center">
                {
                   !Todo ? (<>
                    <div>Null</div>
                   </>) : Todo.map((e,i)=>{
                        return (
                            <div key={i} className="h-20 w-full border flex justify-between p-3">
                                <label className=" text-xl md:text-2xl font-bold">
                                    {e.todo}
                                </label>

                                <div className="flex gap-5">
                                    <button className="bg-blue-400 h-fit text-white font-bold rounded p-2 active:bg-black">Edit</button>
                                    <button className="bg-blue-400 h-fit  text-white font-bold rounded p-2  active:bg-black" onClick={async()=>{
                                        await RemoveTodo(e._id)
                                    }}>Remove</button>
                                </div>

                            </div>
                        )
                   })
                }
            </div>
           </div>
        </>
    );
}

export default HomePage;