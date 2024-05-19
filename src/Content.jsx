// Content.js
import { useState } from "react";
import SearchBar from "./SearchBar";
import Card from "./Card";

export default function Content() {
  const [searchTerm, setSearchTerm] = useState("Search Movie Title...");

  const handleSearchInputChange = (newInput) => {
    setSearchTerm(newInput);
  };

  return (
    <div>
      <SearchBar input={searchTerm} onInputChange={handleSearchInputChange} />
      <Card searchTerm={searchTerm} />
    </div>
  );
}
