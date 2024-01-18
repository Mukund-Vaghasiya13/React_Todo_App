import { useState } from "react";
import { ApiHandler } from "../ApiHandler/ApiHandler";

function AddTodo({
    FetchData
}) {

    const [Todo,addTodo] = useState("")

    const AddTodo = async ()=>{
        const todo = {
            "todo":Todo
        }
       const response =  await ApiHandler.PostRequest({
            url:"/api/todo/v1/Todos/todo/add",
            data:todo
        })
        if (response.data.success){
            await FetchData()
        }
    }   


    return ( 
        <>
            <div className="flex justify-center">
                <input className="h-10 w-9/12 shadow shadow-gray-400 rounded-l border-2 border-r-0  border-black outline-none pl-2" placeholder="Add Todo" onChange={(e)=>{
                    addTodo(e.currentTarget.value)
                }}></input>
                <button className="h-10 w-fit bg-blue-400 shadow  shadow-gray-400 p-2 text-white font-bold rounded-r border-2 border-black border-l-0 active:bg-black active:text-white" onClick={ async()=>{
                    await AddTodo()
                }}>Add</button>
            </div>
        </>
    );
}

export default AddTodo;