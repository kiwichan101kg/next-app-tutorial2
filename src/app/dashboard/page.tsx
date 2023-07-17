import Counter from "./counter";
import UsersList from "./userList";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <h1 className="text-blue-900 text-2xl font-bold">
        Hello, Dashboard Page!
      </h1>
      <Counter />
      <UsersList />
    </>
  );
}
