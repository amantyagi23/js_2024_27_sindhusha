import axios from 'axios'
import React, { useEffect, useState } from 'react'


// older method

// const getMovieDetails = async ()=>{
//   try {
//     const response = await fetch('https://fakestoreapi.com/products')
//     // 4s
//     //data
//     //status
//     //message
//     // headers
//     //url
//     if(response.status ===200){
//         // 4s
//         return await response.json()
//     }
//     else{
//         throw new Error("No Found")
//     }
//   } catch (error) {
//     throw new Error("Api Not Working")
//   }
    
// }

const getMovieDetails = async ()=>{
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      // 4s
      //data
      //status
      //message
      // headers
      //url
      if(response.status ===200){
          // 4s
          return response
      }
      else{
          throw new Error("No Found")
      }
    } catch (error) {
      throw new Error("Api Not Working")
    }
      
  }

const ShowMovie = () => {

    useEffect(()=>{
        getMovieDetails().then((response)=>{
            console.log(response);
            
        }).catch((error)=>{
            console.log(error);
            
        })
    },[]);

   


  return (
    <div>ShowMovie{open}
        <button >Increase</button>
    </div>
  )
}

export default ShowMovie