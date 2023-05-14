import React, { useEffect, useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MovieItem from './Movies/MovieItem'
import { Link, } from 'react-router-dom'
import { getAllMovie } from '../Api-helpers/api-helpers'

const HomePage = () => {
     const [movies,setMovies] = useState([]);
     useEffect(() => {
       getAllMovie().then((data)=>setMovies(data.movies)).catch((err)=>console.log(err));
     }, [])
     console.log(movies);
     
  return (
   <Box width={'100%'} height='100%' margin="auto" marginTop={2}>
   <Box margin={'auto'} width="70%" height={"40vh"} padding={2}> 
   <img  src="https://www.koimoi.com/wp-content/new-galleries/2023/04/priyanka-chopra-jonas-was-better-than-mcu-stars-robert-downey-jr-chris-evans-revealed-citadel-director-joe-russo-01.jpg" alt='CITADEL'
     width={"100%"}
     height={"100%"}
    /> 
    </Box>
    <Box padding={5} margin="auto">
    <Typography variant="h4" textAlign={"center"}>
        Latest Release
    </Typography>     
    </Box>
    <Box display="flex" margin="auto" width="80%" justifyContent={"center"} flexWrap="wrap">
       {movies && movies.slice(0,6).map((item,index)=>
        <MovieItem id={item._id} title={item.title} posterUrl={item.posterUrl} releaseDate={item.releaseDate} key={index}/>
       )}
    </Box>
    <Box display="flex" padding={5} margin="auto">
    <Button LinkComponent={Link} to="/movies"
    variant='outlined'
    sx={{margin:'auto',color: "#2b2d32"}}>
    View All Movies    
    </Button>
    </Box>
   </Box>
  )
}

export default HomePage

