import Link from "next/link";

const getPokemons = async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
  const pokemons: any = await response.json();
  console.log("ポケモン", pokemons);

  return pokemons.results;
};

// ユーザーのリンクを取得し、ユーザーをクリックすると詳細ページにとぶuser/{id} ※user/1
// 子ページに[id]ディレクトリを作成
const Pokemons = async () => {
  const pokemons: any[] = await getPokemons();
  // const pokemonId = pokemons.map((pokemon)=>{
  //   const parts = pokemon.url.split('/');
  //   const result = parts.slice(-2)
  // })
  return (
    <main className="p-2">
      <h1 className="text-lg font-bold">Pokemon一覧</h1>
      {pokemons &&
        pokemons.map((pokemon, i) => (
          <li key={pokemon.name}>
            <Link href={`/pokemon/${i + 1}`}>{pokemon.name}</Link>
          </li>
        ))}
    </main>
  );
};

export default Pokemons;
