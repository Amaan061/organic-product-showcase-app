import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white/80 backdrop-blur border-b border-border/50 shadow-sm sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <span className="inline-block bg-primary/10 rounded-full p-2">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11c0 4.97 4.53 9 9.5 9s9.5-4.03 9.5-9c0-4.97-4.53-9-9.5-9Zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.87-3.13 7-7 7Zm-1-7V7h2v4h-2Zm0 2h2v2h-2v-2Z" fill="currentColor"/></svg>
          </span>
          Organic Store
        </Link>
        <div className="flex gap-6 items-center">
          <Link to="/" className="text-foreground hover:text-primary transition-colors font-medium">Home</Link>
          <Link to="#products" className="text-foreground hover:text-primary transition-colors font-medium">Products</Link>
          <Link to="#about" className="text-foreground hover:text-primary transition-colors font-medium">About</Link>
          <Link to="#contact" className="text-foreground hover:text-primary transition-colors font-medium">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
