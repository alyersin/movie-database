// Content.js
import { useState } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";
import "./Content.css";

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("Search Movie Title...");

  const handleSearchInputChange = (newInput) => {
    setSearchTerm(newInput);
  };

  return (
    <div className="content-container">
      <SearchBar input={searchTerm} onInputChange={handleSearchInputChange} />
      <Card searchTerm={searchTerm} />
    </div>
  );
}
