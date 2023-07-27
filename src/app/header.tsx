import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-red-300  p-7 mt-auto ">
      <nav className="p-2 h-12 flex justify-between ">
        <h1>
          <img src="/vercel.svg" className="w-32" />
        </h1>
        <ul className="flex items-center space-x-5  text-white text-xl">
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
          <li>
            <Link href="/pokemon">pokemon</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
