import Link from "next/link";

const header = () => {
  return (
    <header>
      <nav className="p-2">
        <h1>Table</h1>
        <ul className="flex items-center space-x-2">
          <nav>
            <img src="/vercel.svg" className="w-18" />
          </nav>
        </ul>
      </nav>
    </header>
  );
};

export default header;
