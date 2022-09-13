import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Header from "../components/Header";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let movieArray = [];
    let moviesId = window.localStorage.movies
      ? window.localStorage.movies.split(",")
      : [];
    // console.log(moviesId);

    for (let i = 0; i < moviesId.length; i++) {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
        )
        .then((res) => setListData((listData) => [...listData, res.data]));
    }
  }, []);

  return (
    <div className="home-page">
      <Header />
      <h2>
        Coups de coeur <span>💖</span>
      </h2>
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => <Card movie={movie} key={movie.id} />)
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
};

export default LikePage;
