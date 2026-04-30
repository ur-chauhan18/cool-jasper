import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function AnimeDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div style={{ color: "white", padding: "40px" }}>
      <button onClick={() => navigate("/")}>⬅ Back</button>

      <h1>Anime ID: {id}</h1>
      <p>Yaha tum details dikha sakte ho</p>
    </div>
  );
}
