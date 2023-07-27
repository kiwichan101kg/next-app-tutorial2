"use client";

import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  return (
    <>
      Apppage
      <button
        className="bg-red-400 hover:bg-red-300 text-white rounded px-4 py-2"
        type="button"
        onClick={() => router.push("/dashboard")}
      >
        Dashboardボタン
      </button>
    </>
  );
}
