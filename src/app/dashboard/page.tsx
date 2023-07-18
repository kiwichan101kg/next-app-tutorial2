import { Suspense } from "react";
import Counter from "./counter";
import UsersList from "./userList";
import PostsList from "./postList";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <>
      <h1 className="text-blue-900 text-2xl font-bold">
        Hello, Dashboard Page!
      </h1>
      <Counter />
      {/** 非同期処理を行なっているコンポーネントをSuspenseでラップする。fallback属性に非同期処理実行中のUIをいれる */}
      <Suspense fallback={<p className="mt-4">ユーザデータ Loading...</p>}>
        <UsersList />
      </Suspense>
      <Suspense fallback={<p className="mt-4">記事一覧 Loading...</p>}>
        <PostsList />
      </Suspense>
    </>
  );
}
