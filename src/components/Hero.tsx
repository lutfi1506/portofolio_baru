// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10"
      >
        <div className="md:w-1/2 flex justify-center relative group">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-1 w-72 md:w-[25rem] transition-all rotate-45 opacity-30 duration-300 group-hover:scale-105"
          >
            <path
              fill="#51A2FF"
              d="M40.9,-67.3C49.8,-57.9,51.7,-41.2,54.3,-27.2C56.8,-13.3,59.9,-2.1,59.1,9C58.2,20,53.3,31,47.4,45.1C41.5,59.2,34.5,76.4,23.5,79.4C12.5,82.4,-2.6,71.2,-18.4,65.3C-34.2,59.4,-50.8,58.9,-60.3,50.7C-69.9,42.5,-72.5,26.6,-69.6,13.1C-66.8,-0.5,-58.6,-11.7,-54.1,-26C-49.6,-40.3,-48.8,-57.5,-40.5,-67.2C-32.1,-76.9,-16,-79,0,-79C16,-79,31.9,-76.8,40.9,-67.3Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            src="/images/me.webp"
            alt="Foto Profil Lutfi"
            className="w-48 md:w-60 object-cover transition-all duration-300 z-10 group-hover:scale-105"
          />
        </div>

        <div className="md:w-1/2 text-center md:text-left space-y-4">
          <p className="text-xl text-primary font-medium">Halo semua, saya</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
            Lutfiar Rahman M
          </h1>
          <p className="text-lg text-muted-foreground">
            Fresh Graduate | Web Developer
          </p>
          <p className="text-base ">
            Saya adalah seorang pengembang web yang antusias dan bersemangat
            untuk belajar.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild>
              <a href="#projects">Lihat Proyek</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="/cv-lutfi.pdf" download>
                Download CV
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
