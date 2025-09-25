import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { products } from "./Data";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef(); 
  const navigate = useNavigate();

  useEffect(() => {
      const handleClickOutside = (event) => {
        if (suggestionsRef.current && !suggestionsRef.current.contains(event.target)) {
          setShowSuggestions(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);
  

  // Categories
  const categories = ["Men", "Women", "Kids", "Accessories"];

  // Suggestions
  const suggestions = [
    ...categories,
    ...products.slice(0, 5).map((p) => p.name),
  ];

  // Handle search button click
  const handleSearch = () => {
    if (!searchQuery) return;

    // Category match
    const cat = categories.find(
      (c) => c.toLowerCase() === searchQuery.toLowerCase()
    );
    if (cat) {
      navigate("/shop", { state: { category: cat.toLowerCase() } });
      return;
    }

    // Product match
    const product = products.find(
      (p) => p.name.toLowerCase() === searchQuery.toLowerCase()
    );
    if (product) {
      navigate(`/product/${product.id}`);
      return;
    }

    // shop with search query
    navigate("/shop", { state: { search: searchQuery } });
  };

  // clear input
  const handleClear = () => {
    setSearchQuery("");
    setShowSuggestions(false);
  };

  return (
    <div className="search-box position-relative flex-grow-1 order-2 order-lg-1 w-100"
    ref={suggestionsRef}>
      <div className="position-relative">
        <input
          type="text"
          className="form-control px-4 py-2"
          placeholder="Search products or categories..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(e) =>{
            if(e.key === "Enter"){
              e.preventDefault();
              handleSearch();
            }
            if(e.key ==="Escape"){
              navigate(-1)
            }
          }}
        />

        {searchQuery && (
        // Cancel Button
          <i
            className="bi bi-x-lg position-absolute top-50 end-0 pe-3 translate-middle-y me-5 text-muted cancel-btn"
            style={{ cursor: "pointer" }}
            onClick={handleClear}
          ></i>
        )}

        {/* search button */}
        <button
          className="btn btn-warning text-white position-absolute top-50 end-0 translate-middle-y px-3"
          onClick={handleSearch}
        >
          <i className="bi bi-search"></i>
        </button>
      </div>

      {/* Suggestions */}
      {showSuggestions && (
        <ul
          className="list-group position-absolute mt-1 w-100 shadow-sm"
          style={{ zIndex: 1000}}
        >
          {suggestions
            .filter((s) =>
              s.toLowerCase().includes(searchQuery.toLowerCase())
            )
            .map((s, i) => (
              <li
                key={i}
                className="list-group-item list-group-item-action"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setSearchQuery(s); // put suggestion into search box
                  setShowSuggestions(false);
                }}
              >
                {s}
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
