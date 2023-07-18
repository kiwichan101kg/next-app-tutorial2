// user/{id}で遷移する

import { notFound } from "next/navigation";

// urlのidはpropsのparamsに含まれる
type Props = { params: { id: string } };

const getPokemon = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const pokemon = await response.json();
  console.log(pokemon);

  return pokemon;
};

const Pokemon = async ({ params: { id } }: Props) => {
  const pokemon = await getPokemon(id);
  if (!pokemon.id) {
    notFound();
  }
  return (
    <div className="p-2">
      <h1 className="font-bold text-lg">ポケモン詳細ページ </h1>
      <p>{pokemon.name}</p>
      <div>
        <img src={pokemon.sprites.front_default} alt="" />
      </div>
    </div>
  );
};

export default Pokemon;
