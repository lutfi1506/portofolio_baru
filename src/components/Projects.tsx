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
    title: "Portofolio Website",
    description:
      "Website portofolio pribadi dibangun menggunakan React, TypeScript, dan ShadCN UI.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
    github: "https://github.com/lutfi/portfolio ",
    image: "/images/portfolio.png", // Path ke gambar proyek
  },
  {
    title: "To-Do List App",
    description:
      "Aplikasi manajemen tugas sederhana menggunakan React dan localStorage.",
    tech: ["React", "JavaScript", "CSS"],
    link: "#",
    github: "https://github.com/lutfi/todo-app ",
    image: "/images/projects/todo-list.png",
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard prakiraan cuaca real-time menggunakan API OpenWeatherMap.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "https://github.com/lutfi/weather-app ",
    image: "/images/projects/weather-dashboard.png",
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
              <Card className="p-5 h-full flex flex-col hover:shadow-lg transition-all hover:-translate-y-5 ease duration-300">
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>

                <CardContent>
                  {/* Gambar Proyek */}
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-40 object-cover rounded-md mb-3 "
                  />

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

                <CardFooter className="mt-auto">
                  {/* Tombol Aksi */}
                  <div className="flex gap-3">
                    <a
                      href={project.link}
                      className="text-sm underline text-primary hover:no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Demo
                    </a>
                    <a
                      href={project.github}
                      className="text-sm underline text-muted-foreground hover:text-primary hover:no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
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
