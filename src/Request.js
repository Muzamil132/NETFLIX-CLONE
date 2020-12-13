


  const API_KEY ="ff6abad6678e9958f2e2dbcd3bb303d65"

  const Request ={
      fetchTrending :`/trending/all/week?api_key=${API_KEY}&language=en-US`,
      fetchNetflixoriginals :`/discover/tv?api_key=${API_KEY}&with_networks=213`,
      fetTopRated :`/movie/top_rated?api_key=${API_KEY}&language=en-US`,
      fetchActionmovies :`discover/movie?api_key=${API_KEY}&with_genres=28`,
      fetchComedymovies :`discover/movie?api_key=${API_KEY}&with_genres=35`,
      fetchHorrormovies :`discover/movie?api_key=${API_KEY}&with_genres=27`,
      fetchRomancemovies :`discover/movie?api_key=${API_KEY}&with_genres=10749`,
      fetchdocumentaries :`discover/movie?api_key=${API_KEY}&with_genres=99`,
  }

  export default Request