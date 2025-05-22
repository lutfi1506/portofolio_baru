// src/components/Navbar.tsx
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

const navLinks = [
  { to: "home", label: "Home" },
  { to: "about", label: "About" },
  { to: "skills", label: "Skills" },
  { to: "projects", label: "Projects" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-sm bg-background/70 border-b">
      <div className="container flex h-16 items-center justify-between mx-auto px-4 md:px-8">
        {/* Logo */}
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Lutfiar Rahman Maarif
        </a>
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              href={"#" + link.to}
              onClick={(e) => {
                e.preventDefault();
                document
                  .querySelector("#" + link.to)
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-lg font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
              key={link.to}
            >
              {link.label}
            </motion.a>
          ))}
        </nav>
        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <button className="md:hidden p-2 rounded-md">
              <Menu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] px-5">
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link) => (
                <a
                  href={"#" + link.to}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector(link.to)
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="text-lg font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
