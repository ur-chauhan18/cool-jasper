import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const animeData = [
  { id: 0, title: "Naruto", image: "./naruto.jpg" },
  { id: 1, title: "Attack on Titan", image: "./aot.jpg" },
  { id: 2, title: "Demon Slayer", image: "./Demon.jpg" },
  { id: 3, title: "One Piece", image: "./one.jpg" },
  { id: 4, title: "Jujutsu Kaisen", image: "./jjk.jpg" },
  { id: 5, title: "Bleach", image: "./Bleach.jpg" },
  { id: 6, title: "Class Room Of The Elite", image: "./Ayano.jpg" },
  { id: 7, title: "Solo Leveling", image: "./Solo.jpg" },
  { id: 8, title: "Death Note", image: "./death.jpg" },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredAnime = animeData.filter((anime) =>
    anime.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        {/* LEFT EMPTY */}
        <div></div>

        {/* CENTER TITLE */}
        <h1 className="logo">
          {"Anime World".split("").map((char, i) => (
            <span key={i}>{char}</span>
          ))}
        </h1>

        {/* SEARCH */}
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
          filteredAnime.map((anime) => (
            <div
              className="card"
              key={anime.id}
              onClick={() => navigate(`/anime/${anime.id}`)}
            >
              <img src={anime.image} alt={anime.title} />

              <div className="overlay">
                <h3>{anime.title}</h3>
                <button>View Details ▶</button>
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
