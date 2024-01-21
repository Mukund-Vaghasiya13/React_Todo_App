import axios from "axios";

class ApiHandler{
    static async PostRequest({
        data=null,
        url,
        customHeader = {}
    }) {
      const headers = {
        "content-type":"application/json",
        ...customHeader
      }  
     try{
        const response =  await axios.post(url,data,{ headers })
        return response
     }catch{
        console.log("Error in Getting Resopnse")
        return null
     }
    }


    static async GetData({
      url,
      customHeader = {}
    }){
      try{
        const response =  await axios.get(url,{ headers: customHeader })
       return response
      }catch{
        console.log("get Error")
        return null
      }
    }
}


export {
    ApiHandler
}