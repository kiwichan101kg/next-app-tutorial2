// user/{id}で遷移する

import { notFound } from "next/navigation";

// urlのidはpropsのparamsに含まれる
type Props = { params: { id: string } };

type User = {
  id: number;
  name: string;
  email: string;
};

const getUser = async (id: string) => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const user: User = await response.json();
  console.log("取得中", user);

  return user;
};

const User = async ({ params: { id } }: Props) => {
  const user = await getUser(id);
  if (!user.id) {
    notFound();
  }
  return (
    <div className="p-2">
      <h1 className="font-bold text-lg">User詳細ページ {id}</h1>
      <div>
        <div>名前: {user.name}</div>
        <div>メールアドレス: {user.email}</div>
      </div>
    </div>
  );
};

// SSG
// ユーザー一覧を取得して、urlを構成するidを全て取り出して配列にする
// 動的ルートの場合でも静的なファイルとして作成できる
export async function generateStaticParams() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();

  return users.map((user) => ({
    id: user.id.toString(),
  }));
}

export default User;
