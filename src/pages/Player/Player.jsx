import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZGNlZTcxMThlZGZiNjhiMDM0YTQ3ZmRhOWIyODk1YiIsInN1YiI6IjY2NWM4NzU2ZjU5ZTdjOTU4Yjc3MzIxOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.adsdvgFvXXftQm0YfF0w19hMuMdcrzeRqgZXuQgogsc",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        } else {
          console.error("No video data found");
        }
      })
      .catch((err) => console.error("Error fetching data: ", err));
  }, [id, options]);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="Back Arrow" onClick={() => navigate(-2)} />
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameBorder="0"
        allowFullScreen
        title="trailer"
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at ? apiData.published_at.slice(0, 10) : ""}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
