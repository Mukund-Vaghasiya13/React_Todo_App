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
            <div className="flex justify-center w-full">
                <input className="Component_AddTodo" placeholder="Add Todo" onChange={(e)=>{
                    addTodo(e.currentTarget.value)
                }}></input>
                <button className="Component_AddTodo_Button" onClick={ async()=>{
                    await AddTodo()
                }}>Add</button>
            </div>
        </>
    );
}

export default AddTodo;