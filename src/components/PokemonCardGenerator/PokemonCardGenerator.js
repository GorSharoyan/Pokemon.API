import React, { useState, useEffect } from "react";

//components
import PokemonCard from "../PokemonCard/PokemonCard";

//services
import getAllPokemons from "./../../services/fetch.service";

export default function PokemonCardGenerator() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    getAllPokemons();
  }, []);

  return (
    <div>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          pokemonName={pokemon.name}
          pokemonImage={pokemon.image}
        />
      ))}
    </div>
  );
}
