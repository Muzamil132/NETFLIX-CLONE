import React ,{useEffect,useState} from 'react'
import axios from './axios'
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import './App.css'

const Row = ({title,rashid,large}) => {
   const[movies,setmovies]=useState([])
   const [trailerUrl, setTrailerUrl] = useState("");
  
    // useEffect(()=>{
         

    //     async function fetchdata(){
    //       const request =await axios.get(`https://api.themoviedb.org/3${rashid}`)
    //        setmovies(request.data.results)
    //     }
      
    //     fetchdata()
      
      
    //   },[rashid])


      useEffect(()=>{
         

        async function fetchdata(){
          const request =await axios.get(rashid)
           setmovies(request.data.results)
        }
      
        fetchdata()
      
      
      },[rashid])

      const handleClick = (movie) => {
        // set trailer url to stop playing other video if one is playing
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          console.log(movie.name);
          movieTrailer(movie?.title || movie?.name || movie?.source)
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              console.log(urlParams);
              setTrailerUrl(urlParams.get("v"));
              console.log("the url for the trailer is " + trailerUrl);
            })
            .catch((error) => console.log(error));
    
          // async function fetchVideo() {
          //   // create a variable to store response from server
          //   const request = await axios.get(
          //     `/movie/${movie.id}/videos?api_key=4d39fff22390e1871bfb88ccc0ac8426&language=en-US`
          //   );
          //   // check that there are results
          //   console.log(request);
          //   console.log(request.data);
          //   console.log(request.data.results);
          //   console.log(request.data.results[0].key);
    
          //   setTrailerUrl(
          //     request.data.results[0].key
          //     // https://api.themoviedb.org/3/movie/3/videos?api_key=4d39fff22390e1871bfb88ccc0ac8426&language=en-US
          //   );
          //   // return the variable with data to the row
          //   return request;
          // }
          // fetchVideo();
    
          console.log(trailerUrl);
        }
      };
    
      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoPlay: 1,
        },
      };
     


    return (
        <div className="row">
            <h2 className="text">{title} </h2>
            <div className="row_posters">
            {
                movies.map(movie=>(
               
                        <img  
                          onClick={() => handleClick(movie)}
                        
                        key={movie.id} className={large?'large_poster':"row_poster"} src={`https://image.tmdb.org/t/p/original/${large?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
              
                ))
            }
                
            </div>
            <div className="row_video_player">
        {/* https://www.youtube.com/watch?v=H9Ht27r7ROk */}
        {console.log(typeof trailerUrl)}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>

        </div>
    )
}

export default Row
