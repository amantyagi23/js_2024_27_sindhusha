import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getMoviesData } from '../modules/movies/services'
import APIURL from '../config'
import { Box } from '@mui/material'

const MovieDetailPage = () => {
  const {id} = useParams()

  const [movie,setMovie] = useState(null)

  useEffect(()=>{
    const API = APIURL.getMovieDetailsById(id)
    getMoviesData(API).then((response)=>{
      console.log(response);
      setMovie(response.data);
    }).catch((error)=>{
      console.log(error);
      
    })
  },[])
  return (
    <div>
      {movie!==null && <>
      <Box sx={{height:700 , position:"absolute",backgroundImage:{}}}>
      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>
      </Box>
     
      </>}
    </div>
  )
}

export default MovieDetailPage