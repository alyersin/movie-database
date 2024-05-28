// Card.js
import { useEffect, useState } from "react";
import axios from "axios";
import "./Card.css";

const API_KEY = "5fa9e5cd";

export default function Card({ searchTerm }) {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    if (searchTerm && searchTerm !== "Search Movie Title...") {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`
        );
        console.log(res.data);
        if (res.data.Search) {
          setMovies(res.data.Search);
        }
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
  };

  useEffect(() => {
    getMovies();
  }, [searchTerm]);

  return (
    <div className="cards-container">
      {movies.map((movie, index) => (
        <div className="card" key={index}>
          <img src={movie.Poster} alt={movie.Title} className="card-image" />
          <div className="card-content">
            <h2 className="card-title">{movie.Title}</h2>
            <p className="card-year">Year: {movie.Year}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
