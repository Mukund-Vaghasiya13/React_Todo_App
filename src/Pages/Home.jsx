import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.jsx";
import { Usage } from "../ApiHandler/ApiService.js";
import AddTodo from "../Components/AddTodo.jsx";

function HomePage() {
    

    const navigate = useNavigate()
    const [Todo,setTodo] = useState([])
    const [token,setToken]= useState("")

    useEffect(()=>{
        const Logintkn = localStorage.getItem("accesstoken")
        
        if(Logintkn){
            setToken(Logintkn); 
            // Do home things
            (async()=>{
                try {
                    const data = await Usage.FetchData(Logintkn);
                    setTodo(data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    // Handle the error, e.g., redirect to login or show an error message
                }
            })()
        }else{
            navigate("/login")  
        }
    },[])

    return ( 
        <> 
           <Header Token={token}/>
           <div className="h-screen w-screen flex flex-col items-center justify-center gap-10">
          
           <AddTodo FetchData={Usage.FetchData} Token={token} setData={setTodo}/>
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
                                          const data =  await Usage.EditTodo(token,message,e._id)
                                          setTodo(data)
                                       }
                                    }}>Edit</button>
                                    <button className="bg-blue-400 h-fit  text-white font-bold rounded p-2  active:bg-black" onClick={async()=>{
                                      const data = await Usage.RemoveTodo(token,e._id)
                                      setTodo(data)
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