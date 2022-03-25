export default function getAllPokemons() {
  fetch(`https://pokeapi.co/api/v2/pokemon/?limit=151`)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
