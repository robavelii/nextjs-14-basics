import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="logo">
          <h1 className="text-3xl font-bold">Logo</h1>
        </div>
        <div className="links-container flex space-x-4">
          <Link href="/" className="link text-lg hover:text-gray-400">
            Home
          </Link>
          <Link href="/dashboard" className="link text-lg hover:text-gray-400">
            Dashboard
          </Link>
          <Link href="/portfolio" className="link text-lg hover:text-gray-400">
            Portfolio
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
