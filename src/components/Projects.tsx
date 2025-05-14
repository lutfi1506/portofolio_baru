// src/components/Projects.tsx
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Website Portofolio",
    description:
      "Website portofolio pribadi yang dibangun menggunakan React, TypeScript, dan ShadCN UI.",
    tech: ["React", "TypeScript", "Tailwind CSS", "ShadCN UI"],
    link: "https://lutfiar.my.id/",
    github: "https://github.com/lutfi/portfolio ",
    image: "/images/portfolio.png", // Path ke gambar proyek
  },
  {
    title: "Aplikasi Kasir",
    description:
      "Aplikasi kasir sederhana berbasis web yang membantu toko ritel dalam mengelola transaksi, stok barang, pelanggan, dan laporan keuangan secara efisien dan terpusat.",
    tech: ["Laravel", "JavaScript", "Tailwind CSS", "DaisyUI"],
    link: "https://kasirapp-main-tgdaso.laravel.cloud",
    github: "https://github.com/lutfi1506/kasir_ujikom",
    image: "/images/kasirapp.png",
  },
  {
    title: "Chatbot Groq ai",
    description:
      "Chatbot yang menggunakan AI untuk memberikan jawaban cepat dan akurat.",
    tech: ["React", "CSS", "Express", "Axios"],
    link: "https://groq-frontend.vercel.app/",
    github: "https://github.com/lutfi1506/groq_frontend",
    image: "/images/groq-ai.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Projects
        </motion.h2>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-5 h-full flex flex-col md:hover:shadow-lg transition-all md:hover:-translate-y-5 ease duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-32 object-cover rounded-md mb-3 mt-1.5 "
                  />
                </CardHeader>

                <CardContent>
                  {/* Deskripsi */}
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Teknologi */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2 py-1 rounded-md bg-primary/10 text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="mt-auto ms-auto">
                  {/* Tombol Aksi */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.461-1.11-1.461-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.03-2.682-.103-.253-.447-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.546 1.375.202 2.392.1 2.645.64.7 1.03 1.591 1.03 2.682 0 3.842-2.337 4.687-4.565 4.935.36.31.682.92.682 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.003 10.003 0 0022 12c0-5.523-4.477-10-10-10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.link}
                      className="text-primary hover:text-primary/80"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Demo"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 9V5.25a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v13.5a2.25 2.25 0 002.25 2.25h6.75a2.25 2.25 0 002.25-2.25V15M9 12h12m0 0l-3-3m3 3l-3 3"
                        />
                      </svg>
                    </a>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
