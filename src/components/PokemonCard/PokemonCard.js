import React from "react";

export default function PokemonCard({ pokemonName, pokemonImage }) {
  return (
    <div>
      <h4>{pokemonName}</h4>
      <img src={pokemonImage} />
    </div>
  );
}
