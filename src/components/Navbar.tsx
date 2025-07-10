import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-border/50 shadow-sm sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="inline-block bg-primary/10 rounded-full p-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11c0 4.97 4.53 9 9.5 9s9.5-4.03 9.5-9c0-4.97-4.53-9-9.5-9Zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.87-3.13 7-7 7Zm-1-7V7h2v4h-2Zm0 2h2v2h-2v-2Z" fill="currentColor"/></svg>
          </span>
          Organic Store
        </Link>
        {/* Desktop nav */}
        <div className="hidden md:flex gap-6 items-center">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-semibold text-lg md:text-xl">Home</Link>
          <Link to="#products" className="text-foreground hover:text-primary transition-colors font-semibold text-lg md:text-xl">Products</Link>
          <Link to="#about" className="text-foreground hover:text-primary transition-colors font-semibold text-lg md:text-xl">About</Link>
          <Link to="#contact" className="text-foreground hover:text-primary transition-colors font-semibold text-lg md:text-xl">Contact</Link>
        </div>
        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center px-2 py-1 border rounded text-primary border-primary focus:outline-none"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 border-b border-border/50 shadow-sm px-4 py-3">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-foreground hover:text-primary transition-colors font-semibold text-lg" onClick={() => setOpen(false)}>Home</Link>
            <Link to="#products" className="text-foreground hover:text-primary transition-colors font-semibold text-lg" onClick={() => setOpen(false)}>Products</Link>
            <Link to="#about" className="text-foreground hover:text-primary transition-colors font-semibold text-lg" onClick={() => setOpen(false)}>About</Link>
            <Link to="#contact" className="text-foreground hover:text-primary transition-colors font-semibold text-lg" onClick={() => setOpen(false)}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
