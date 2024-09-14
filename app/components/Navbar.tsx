"use client"; // Indique que ce composant est un Client Component

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // Hook pour obtenir l'URL actuelle

  return (
    <nav className="bg-yellow-600 p-4">
      <ul className="flex justify-center space-x-4">
        <li>
          <Link href="/" className={`text-black hover:text-grey-500 ${pathname === "/" ? "font-bold" : ""}`}>
            Accueil
          </Link>
        </li>
        <li>
          <Link href="/about" className={`text-black hover:text-grey-600 ${pathname === "/about" ? "font-bold" : ""}`}>
            À propos
          </Link>
        </li>
      </ul>
    </nav>
  );
}
