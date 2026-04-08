import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 backdrop-blur  z-50">
      
      {/* Logo */}
      <h1 className="text-xl font-bold">Roxicons</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 items-center">
        <a href="#">Icons</a>
        <a href="#">Pricing</a>
        <a href="#">Docs</a>

        <Button>Download</Button>

        {/* Dark Mode Toggle */}
        <button onClick={toggleDark}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-3">
        <button onClick={toggleDark}>
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <button onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-black border-t border-gray-800 flex flex-col items-center gap-4 py-6 md:hidden text-white">
          <a href="#">Icons</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <Button>Download</Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;