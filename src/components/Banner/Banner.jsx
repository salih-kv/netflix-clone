import { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../axios/axios";
import { imageURL, trending } from "../../constants/constants";

const Banner = () => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    let randomIndex = Math.round(Math.random() * 10);
    axios
      .get(trending)
      .then((response) => setMovie(response.data.results[randomIndex]))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const bannerStyle = {
    backgroundImage: `url(${imageURL}${movie?.backdrop_path})`,
  };


  return (
    <div className="bg-cover h-[448px] text-white" style={bannerStyle}>
      <div className="pt-36 h-48 pl-4">
        <h1 className="text-5xl font-extrabold pb-3">{movie?.title}</h1>
        <div>
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="w-[45rem] text-lg pt-4 h-20 max-w-2xl">{movie?.overview}</h1>
      </div>
      <div className="h-64 bg-gradient-to-t from-black text-white w-full z-10"></div>
    </div>
  );
};

export default Banner;
