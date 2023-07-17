import Link from "next/link";

const header = () => {
  return (
    <header>
      <nav className="p-2 h-12">
        <ul className="flex items-center space-x-2">
          <li>
            <img src="/vercel.svg" className="w-32" />
          </li>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/user">user</Link>
          </li>
          <li>
            <Link href="/ui">ui</Link>
          </li>
          <li>
            <Link href="/dashboard">dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default header;
