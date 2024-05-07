import React ,{ useState, useEffect }from 'react';
import './row.css';
import axios from '../../../Utils/Axios'; 
import movieTrailer from "movie-trailer";
import YouTube from 'react-youtube';    

function Row ({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
       const base_url = "https:image.tmdb.org/t/p/original/";
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const request = await axios.get(fetchUrl);
          console.log("Response:", request);
          setMovies(request.data.results);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData(); // Call the fetchData function inside useEffect
    }, [fetchUrl]); // Add fetchUrl as a dependency to re-run useEffect when it changes
  const opts = {
    height: "390",
    width: "100%",
  
    playerVars: {
      autoplay: 1,
    },
  };
      const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.name || "")
            .then((url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
        }
      };

  return (
    <div className="row">
        <h2 className="row_title">{title}</h2>
        <div className="row_posters">
          {movies?.map((movie, i) => (
            <img
              key={i}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              onClick={() => handleClick(movie)}
            />
          ))}
        </div>
            <div className="youtube">{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}</div>
            
      </div>
     
            

    );
};

export default Row;


 
            
            

  


      


