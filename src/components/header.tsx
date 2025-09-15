'use client'

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black w-full relative">
      <div className="flex justify-between mx-auto items-center max-w-7xl gap-6 p-4">
        {/* Logo */}
        <div>
          <Link href="/">
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={100}
            height={100}
          /></Link>
          
        </div>

        {/* Menu desktop */}
        <nav className="hidden md:flex gap-6 text-gray-400 md:text-lg">
          <Link href="/sobre" className="hover:text-green-300 hover:underline decoration-red-300 hover:scale-105 transition-200">Sobre</Link>
          <Link href="/porque" className="hover:text-green-300 hover:underline decoration-red-200  hover:scale-105 transition-300">Porque?</Link>
          <Link href="/+colabora" className="hover:text-green-300 hover:underline decoration-red-300  hover:scale-105 transition-300">+Colabora</Link>
        </nav>

        {/* Botão menu mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            // Ícone "X"
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white cursor" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Ícone hambúrguer
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <nav className="md:hidden flex flex-col gap-3 bg-black p-4 text-gray-400">
          <Link href="/sobre" className="hover:text-green-300 hover:underline decoration-red-300">Sobre</Link>
          <Link href="/porque" className="hover:text-green-300 hover:underline decoration-red-300">Porque?</Link>
          <Link href="/+colabora" className="hover:text-green-300 hover:underline decoration-red-300">+Colabora</Link>
        </nav>
      )}
    </header>
  );
};
