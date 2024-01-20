import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import { ApiHandler } from "../ApiHandler/ApiHandler";
import AddTodo from "../Components/AddTodo";

function HomePage() {
    

    const navigate = useNavigate()
    const [Todo,setTodo] = useState([])
    const [token,setToken]= useState("")

    const header = {
        "Authorization":`Bearer ${token}`
    }

    const FetchData = async ()=>{
        
       const response = await ApiHandler.GetData({
            url:"https://todo-xiii.onrender.com/api/todo/v1/Todos/todo/gettodo",
            customHeader: header
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
            url:"https://todo-xiii.onrender.com/api/todo/v1/Todos/todo/delete",
           customHeader: header
        })

        if(response?.data.success){
           await FetchData()
        }
    }

    const EditTodo = async (message,id)=>{
        const data = {
            "TodoID":id,
            "todo":message
        }

        const response = await ApiHandler.PostRequest({
            data:data,
            url:"https://todo-xiii.onrender.com/api/todo/v1/Todos/todo/update",
           customHeader: header
        })

        if(response?.data.success){
            await FetchData()
         }

    }

    useEffect(()=>{
        const Logintkn = localStorage.getItem("accesstoken")
        
        if(Logintkn){

            setToken(Logintkn); 

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
           <Header Token={token}/>
           <div className="h-screen w-screen flex flex-col items-center justify-center gap-10">
          
           <AddTodo FetchData={FetchData} Token={token}/>
        {/* TODO: Extract */}
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
                                    <button className="bg-blue-400 h-fit text-white font-bold rounded p-2 active:bg-black" onClick={async()=>{
                                       const message = window.prompt("Edit")
                                       if(message){
                                            await EditTodo(message,e._id)
                                       }
                                    }}>Edit</button>
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