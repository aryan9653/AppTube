"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full p-4 bg-transparent z-50">
      <div className="flex items-center">
        <Link href="/">
          <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-green-400 text-transparent bg-clip-text transition duration-300 hover:scale-110">
            AppTube
          </span>
        </Link>
      </div>
    </nav>
  );
}
