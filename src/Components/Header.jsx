import { useNavigate } from "react-router-dom";
import { ApiHandler } from "../ApiHandler/ApiHandler.js";

function Header({Token}) {
    const navigate = useNavigate() 

    const logout = async()=>{
        // const headers = {
        //     "Authorization":`Bearer ${Token}`
        // }
        // try {
        //     const response = await ApiHandler.PostRequest({
        //         url: "/api/todo/v1/logout",
        //         customHeader:headers
        //     });
        //     console.log(response)
        //     if (response?.data.success) {
        //         localStorage.removeItem("accesstoken");
        //         navigate("/login");
        //     } else {
        //         localStorage.removeItem("accesstoken");
        //         navigate("/login");
        //     }
        // } catch (error) {
        //     console.error("Error during logout:", error);
        // }

        localStorage.removeItem("accesstoken");
        navigate("/login");
    }
    return (  
        <>
        
            <div className="h-12 flex justify-between items-center bg-black p-3 text-white font-bold md:h-24">
                <h1 className="text-2xl md:text-5xl">
                    Todo
                </h1>
                <button className="md:text-3xl bg-white text-black rounded p-2 active:bg-black active:text-white" onClick={async()=>{
                await logout()
                }}>
                    Logout
                </button>
            </div>

        </>
    );
}

export default Header;