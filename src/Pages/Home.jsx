import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {

    const navigate = useNavigate()

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("accesstoken"))

        if(token){
            // Do home things
        }else{
            navigate("/login")  
        }
    },[])

    return ( 
        <> 
            Home
        </>
    );
}

export default HomePage;