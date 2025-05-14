// src/components/Footer.tsx
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t py-10 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Kalimat Ajakan */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-lg text-muted-foreground"
        >
          Tertarik untuk berkolaborasi atau memiliki pertanyaan? Jangan ragu
          untuk menghubungi saya.
        </motion.p>

        {/* Media Sosial & Email */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-5 text-muted-foreground"
        >
          {/* GitHub */}
          <a
            href="https://github.com/lutfi1506"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/lutfiar-maarif"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/lutfi_rahman_maarif "
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>

          {/* Email */}
          <a
            href="mailto:lutfirahman248@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>

        {/* Hak Cipta */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm text-muted-foreground mt-6"
        >
          © {new Date().getFullYear()} Lutfi. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}
