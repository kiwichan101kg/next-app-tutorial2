import Link from "next/link";

type User = {
  id: number;
  name: string;
  email: string;
};

const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  return users;
};

// ユーザーのリンクを取得し、ユーザーをクリックすると詳細ページにとぶuser/{id} ※user/1
// 子ページに[id]ディレクトリを作成
const Users = async () => {
  const users = await getUsers();
  return (
    <main className="p-2">
      <h1 className="text-lg font-bold">Userページ</h1>
      <ul>
        {users &&
          users.map((user) => (
            <li key={user.id}>
              <Link href={`/user/${user.id}`} prefetch={false}>
                {user.name}
              </Link>
            </li>
          ))}
      </ul>
    </main>
  );
};

export default Users;
