"use client";

import { useState } from "react";
import { Menu, X, Phone, MessageCircle, Sun } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/90 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
        >
          <div className="rounded-full bg-yellow-400 p-2">
            <Sun className="h-6 w-6 text-slate-900" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Arka Solar Energy
            </h1>

            <p className="text-xs text-slate-500">
              Powering Tomorrow, Today
            </p>
          </div>
        </a>

        <div className="hidden items-center gap-8 font-medium md:flex">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="#services" className="hover:text-blue-700">Services</a>
          <a href="#subsidy" className="hover:text-blue-700">Subsidy</a>
          <a href="#about" className="hover:text-blue-700">About</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+917906461166"
            className="flex items-center gap-2 rounded-xl border px-5 py-3 font-semibold"
          >
            <Phone size={18} />
            Call
          </a>

          <a
            href="https://wa.me/917906461166"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white"
          >
            <MessageCircle size={18} />
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#subsidy" onClick={closeMenu}>Subsidy</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      )}
    </header>
  );
}