import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './App.css'

const Banner = () => {

    const Request ={
        fetchTrending :`/trending/all/week?api_key=f6abad6678e9958f2e2dbcd3bb303d65&language=en-US`,
        fetchNetflixoriginals :`/discover/movie?api_key=f6abad6678e9958f2e2dbcd3bb303d65&with_networks=213`,
        fetTopRated :`/movie/top_rated?api_key=f6abad6678e9958f2e2dbcd3bb303d65&language=en-US`,
        fetchActionmovies :`discover/movie?api_key=f6abad6678e9958f2e2dbcd3bb303d65&with_genres=28`,
        fetchComedymovies :`discover/movie?api_key=f6abad6678e9958f2e2dbcd3bb303d65&with_genres=35`,
        fetchHorrormovies :`discover/movie?api_key=f6abad6678e9958f2e2dbcd3bb303d65&with_genres=27`,
        fetchRomancemovies :`discover/movie?api_key=f6abad6678e9958f2e2dbcd3bb303d65&with_genres=10749`,
        fetchdocumentaries :`discover/movie?api_key=f6abad6678e9958f2e2dbcd3bb303d65&with_genres=99`,
    }

    const[movie,setmovies]=useState([])
    useEffect(()=>{
         

        async function fetchdata(){
          const request =await axios.get(`https://api.themoviedb.org/3${Request.fetchNetflixoriginals}`)
           setmovies(request.data.results[Math.floor(Math.random()*request.data.results.length)])
        
        }
      
        fetchdata()
      
      
      },[])
     

    return (
        <div  style={{
            backgroundSize:'cover',
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`
            ,backgroundPosition:"center center"
        }}   className="banner">
        <div className="banner_content p-5">
            <h1 className="">{
                movie?.title || movie?.name || movie?.original_name
            }</h1>
        <div className="banner_buttons">
            <button type="button" className="    text-light banner_button btn ">
               Play
            </button>
            <button type="button"  className="  mx-2   text-light banner_button btn ">
            My List
        </button>  
        </div>
        <h1 className=" my-2  description">{movie?.overview}</h1>
        </div>    
        <div  className="banner-fade"/>
        </div>
       
    )
}

export default Banner
