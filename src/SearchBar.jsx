// SearchBar.js
import { useState, useEffect } from "react";
import axios from "axios";
import "./SearchBar.css";

const API_KEY = "5fa9e5cd";

export default function SearchBar({ input, onInputChange }) {
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const fetchSuggestions = async (query) => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
      );
      if (res.data.Search) {
        setSuggestions(res.data.Search);
      } else {
        setSuggestions([]);
      }
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      setSuggestions([]);
    }
  };

  const handleChange = (evt) => {
    const newInput = evt.target.value;
    onInputChange(newInput);
    fetchSuggestions(newInput);
  };

  const handleSuggestionClick = (suggestion) => {
    onInputChange(suggestion.Title);
    setShowSuggestions(false);
  };

  const handleClick = () => {
    if (input === "Search Movie Title...") {
      onInputChange("");
    }
  };

  useEffect(() => {
    if (input && input !== "Search Movie Title...") {
      fetchSuggestions(input);
    }
  }, [input]);

  return (
    <form className="search-container">
      <h2>Search Movie:</h2>
      <input
        type="text"
        value={input}
        onClick={handleClick}
        onChange={handleChange}
        onFocus={() => setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 100)}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion.Title}
            </li>
          ))}
        </ul>
      )}
    </form>
  );
}
