
import './App.css';
import Row from './Row'
import {useEffect} from 'react'
import axios from 'axios'
import Banner from './Banner'
import Nav from './Nav'


function App() {


const API_KEY = "f6abad6678e9958f2e2dbcd3bb303d65";



const Request = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovie: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovie: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovie: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovie: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};



  return (
    <div className="app">
    <Nav/>
  <Banner/>
  
    <Row large  title='Netflix Original' rashid={Request.fetchTrending}   />
    <Row  title='Trending Now' rashid={Request.fetchNetflixOriginals}   />
    <Row  title='Top Rated' rashid={Request.fetchTopRated}   />
    
    <Row  title='Action Movies' rashid={Request.fetchActionMovie}   />
    <Row  title='Comedy Movies' rashid={Request.fetchComedyMovie}   />
    <Row  title='Romantic Movies' rashid={Request.fetchRomanceMovie}   />
    <Row  title='Horror Movies' rashid={Request.fetchHorrorMovie}   />
    <Row  title='Documentaries' rashid={Request.fetchDocumentaries}   />
 
    </div>
  );
}

export default App;
