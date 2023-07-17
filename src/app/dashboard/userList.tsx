type User = {
  id: number;
  name: string;
  email: string;
};

// fetch処理はサーバー側で行われる
// dashboardページに最初にアクセスするとfetch処理が走る(ターミナルにusers情報が出る)
// fetch結果をキャッシュするため、他ページに移動して再度dashboardページに戻るとfetch処理が行われない
const getUsers = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await response.json();
  console.log(users);

  return users;
};

const UsersList = async () => {
  const users = await getUsers();
  return (
    <>
      <h2 className="text-lg font-bold mt-4">ユーザ一覧</h2>
      <ul>
        {users && users.map((user) => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  );
};

export default UsersList;
