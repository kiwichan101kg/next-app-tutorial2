import Link from "next/link";
import { Suspense } from "react";
import PokemonList from "./pokemonList";

// ユーザーのリンクを取得し、ユーザーをクリックすると詳細ページにとぶuser/{id} ※user/1
// 子ページに[id]ディレクトリを作成
const Pages = async () => {
  return (
    <main className="p-2">
      <h1 className="text-lg font-bold">Pokemonページ</h1>
      <Suspense>
        <PokemonList />
      </Suspense>
    </main>
  );
};

export default Pages;
