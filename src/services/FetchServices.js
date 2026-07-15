//const BaseUrl='http://localhost:3001'
import BaseUrl from './BaseUrl';
const axios = require('axios');


const getData=async(url)=>{
  try{
    var response=await fetch(`${BaseUrl}/lock${url}`,{
      method:'GET',
      mode:'cors',
      headers:{'content-type':"application/json;charset=utf-8"}  
    })
    var result=await response.json()
    return(result)
  }catch(e){
  return(false)
}}

const postData = async ( url , body )=>{ 
  var response=await fetch(`${BaseUrl}/lock${url}`,{
    method:'post',
    mode:'cors',
    body:JSON.stringify(body),
    headers:{'content-type':"application/json;charset=utf-8"}
  })
  var result=await response.json()
  console.log(result)
  return(result)
}

  
const  postDataAndImage=async(url,formData,config)=>{
    try{
     const response=await axios.post(`${BaseUrl}/lock${url}`,formData,config)
      var result=response.data[0].RESULT
      return(result) 
    }catch(e)
    {
     return(false)
    }
} 

export   { getData , postDataAndImage, postData }


