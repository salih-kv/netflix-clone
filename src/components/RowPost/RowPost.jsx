import { useEffect, useState } from "react";
import ReactYoutube from "react-youtube";
import "./RowPost.css";
import axios from "../../axios/axios";
import { API_KEY, imageURL } from "../../constants/constants";

const RowPost = ({ url, title, isSmall }) => {
  const [movies, setMovies] = useState([]);
  const [urlId, setUrlId] = useState();

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.results);
      setMovies(response.data.results);
    });
  }, []);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const handleMovie = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log("Array empty");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="ml-5 text-white mt-8 overflow-y-hidden">
      <h2>{title}</h2>
      <div className="posters flex p-5 scroll-smooth">
        {movies?.map((movie) => (
          <img
            key={movie.id}
            className={isSmall ? "small-poster" : "poster"}
            alt="poster"
            src={`${imageURL}${movie.backdrop_path}`}
            onClick={() => handleMovie(movie.id)}
          />
        ))}
      </div>
      {urlId && <ReactYoutube videoId={urlId.key} opts={opts} />}
    </div>
  );
};

export default RowPost;
