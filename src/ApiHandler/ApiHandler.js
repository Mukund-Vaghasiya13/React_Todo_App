import axios from "axios";

class ApiHandler{
    static async PostRequest({
        data,
        url,
        customHeader = {}
    }) {
      const headers = {
        "content-type":"application/json",
        ...customHeader
      }  
     try{
        const response =  await axios.post(url,data,headers)
        console.log(response.data)
     }catch{
        console.log("Error in Getting Resopnse")
     }
    }
}


export {
    ApiHandler
}