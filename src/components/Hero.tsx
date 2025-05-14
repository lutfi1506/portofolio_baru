// src/components/Hero.tsx
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 md:px-8 py-16 bg-gradient-to-br from-primary/5 via-background to-primary/5"
    >
      <div className="max-w-5xl md:order-last w-full mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="md:w-1/2 flex justify-center relative group"
        >
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute z-1 w-72 md:w-[30rem] transition-all rotate-45 opacity-35 "
          >
            <path
              fill="#51A2FF"
              d="M40.9,-67.3C49.8,-57.9,51.7,-41.2,54.3,-27.2C56.8,-13.3,59.9,-2.1,59.1,9C58.2,20,53.3,31,47.4,45.1C41.5,59.2,34.5,76.4,23.5,79.4C12.5,82.4,-2.6,71.2,-18.4,65.3C-34.2,59.4,-50.8,58.9,-60.3,50.7C-69.9,42.5,-72.5,26.6,-69.6,13.1C-66.8,-0.5,-58.6,-11.7,-54.1,-26C-49.6,-40.3,-48.8,-57.5,-40.5,-67.2C-32.1,-76.9,-16,-79,0,-79C16,-79,31.9,-76.8,40.9,-67.3Z"
              transform="translate(100 100)"
            />
          </svg>
          <img
            src="/images/profile.webp"
            alt="Foto Profil Lutfi"
            className="w-50 md:w-80 object-cover transition-all z-10 "
          />
        </motion.div>

        <div className="md:w-1/2 md:order-first text-center md:text-left space-y-4">
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-xl text-primary font-medium mb-1.5"
          >
            Halo semua, saya
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold ">
              Lutfiar Rahman M
            </h1>
            <span className="text-2xl sm:text-3xl font-semibold text-muted-foreground">
              <Typewriter
                words={[
                  "Fresh Graduate",
                  "Web Developer",
                  "Fullstack Developer",
                ]}
                loop={0}
                cursor
                typeSpeed={120}
                deleteSpeed={100}
                delaySpeed={1000}
                cursorBlinking={false}
                cursorColor="#51A2FF"
              />
            </span>

            <p className="text-base text-muted-foreground">
              Welcome to my personal website!
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild>
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .querySelector("#projects")
                      ?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Lihat Proyek
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/cv-lutfiar.pdf" download>
                  Download CV
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
