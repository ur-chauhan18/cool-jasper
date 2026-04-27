import React, { useState } from "react";

import "./App.css";

const animeData = [
  { title: "Naruto", image: "./naruto.jpg" },
  {
    title: "Attack on Titan",
    image: "./aot.jpg",
  },
  {
    title: "Demon Slayer",
    image: "./Demon.jpg",
  },
  { title: "One Piece", image: "./one.jpg" },
  {
    title: "Jujutsu Kaisen",
    image: "./jjk.jpg",
  },
  { title: "Bleach", image: "./Bleach.jpg" },

  { title: "Class Room Of The Elite", image: "./Ayano.jpg" },
  
  { title: "Solo Leveling", image: "./Solo.jpg"},
];

export default function App() {
  const [search, setSearch] = useState("");

  const filteredAnime = animeData.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1 className="wave">
          {"Anime World".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h1>

        <div className="search-wrap">
          <input
            type="text"
            placeholder=" "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />
          <label className="search-label">Search anime...</label>
        </div>
      </header>

      <div className="anime-grid">
        {filteredAnime.length > 0 ? (
          filteredAnime.map((anime, index) => (
            <div className="card" key={index}>
              <img src={anime.image} alt={anime.title} />

              <div className="overlay">
                <h3>{anime.title}</h3>
                <button>Watch Now ▶</button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-result">No anime found 😢</p>
        )}
      </div>
    </div>
  );
}
