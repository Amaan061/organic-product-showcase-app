import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-muted/50 border-t border-border/50 mt-16">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2 text-lg font-semibold text-primary">
          <span className="inline-block bg-primary/10 rounded-full p-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M12 2C7.03 2 2.5 6.03 2.5 11c0 4.97 4.53 9 9.5 9s9.5-4.03 9.5-9c0-4.97-4.53-9-9.5-9Zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.87-3.13 7-7 7Zm-1-7V7h2v4h-2Zm0 2h2v2h-2v-2Z" fill="currentColor"/></svg>
          </span>
          Organic Store
        </div>
        <div className="text-muted-foreground text-sm">
          &copy; {new Date().getFullYear()} Organic Store. All rights reserved.
        </div>
        <div className="flex gap-4 items-center">
          <a href="#" className="hover:text-primary transition-colors text-muted-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-primary transition-colors text-muted-foreground">Terms of Service</a>
          <span className="mx-2 h-5 w-px bg-border/50 hidden md:inline-block" />
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-primary transition-colors text-muted-foreground">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors text-muted-foreground">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" rx="11" fill="currentColor" fillOpacity="0.08"/><path d="M15.5 8.5h-2a.5.5 0 0 0-.5.5v2h2.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H13v4a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-4H8.5a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5H10v-2a2 2 0 0 1 2-2h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5Z" fill="currentColor"/></svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors text-muted-foreground">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><rect width="22" height="22" rx="11" fill="currentColor" fillOpacity="0.08"/><path d="M19 7.5a6.5 6.5 0 0 1-1.89.52A3.28 3.28 0 0 0 18.5 6a6.56 6.56 0 0 1-2.08.8A3.28 3.28 0 0 0 12 6c-1.8 0-3.25 1.45-3.25 3.25 0 .25.03.5.08.73A9.32 9.32 0 0 1 5 7.13a3.25 3.25 0 0 0 1.01 4.34c-.18-.01-.36-.06-.52-.14v.01c0 1.57 1.12 2.88 2.6 3.18-.27.07-.56.1-.85.1-.21 0-.41-.02-.61-.06.41 1.28 1.6 2.22 3.01 2.25A6.57 6.57 0 0 1 5 18.07a9.29 9.29 0 0 0 5.03 1.47c6.04 0 9.35-5 9.35-9.34 0-.14 0-.28-.01-.42A6.7 6.7 0 0 0 19 7.5Z" fill="currentColor"/></svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
