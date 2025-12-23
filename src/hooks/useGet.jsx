import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useGet = (url) => {
  const [data, setData] = useState([])

 async function getData(){
    try{
      let res = await axios.get(`https://69208abe31e684d7bfcd6e40.mockapi.io/${url}`)
      setData(res.data)
    }catch(err){
      console.log(err.response.data);
      
    }
  }
  useEffect(() => {
    getData()
  } ,[])
  return {data, getData}
}

export default useGet
