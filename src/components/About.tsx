// src/components/About.tsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-1 flex justify-center"
          >
            {/* Foto Profil */}
            <img
              src="/images/me.webp"
              alt="Foto Profil Lutfi"
              className="w-48 md:w-60 object-cover rounded-full transition-transform duration-300 hover:scale-105"
            />
          </motion.div>

          {/* Isi Tentang Saya */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="md:col-span-2 space-y-4"
          >
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Halo! Nama saya <strong>Lutfi</strong>, saya adalah seorang{" "}
              <strong>Fresh Graduate</strong> dari{" "}
              <strong>SMK Negeri 1 Kadipaten</strong> Dengan jurusan{" "}
              <strong>Rekayasa Perangkat Lunak</strong>.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Saya tertarik pada bidang <strong>Web Development</strong>,
              khususnya bagian Fullstack Development. Selama masa studi, saya
              banyak belajar teknologi seperti <strong>HTML</strong>,{" "}
              <strong>CSS</strong>, <strong>JavaScript</strong>,{" "}
              <strong>php</strong>, <strong>MySQL</strong>, dan{" "}
              <strong>Laravel</strong>. Tetapi saya juga mempelajari beberapa
              teknologi seperti <strong>React</strong>, <strong>Next.js</strong>
              , <strong>Tailwind CSS</strong> secara otodidak melewati youtube
              dan dokumentasi resmi.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Saya senang belajar hal baru dan siap bekerja dalam tim untuk
              mengembangkan produk digital yang bermanfaat bagi pengguna.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed text-justify">
              Saat ini saya sedang mencari peluang untuk berkembang sebagai
              developer dan terus meningkatkan kemampuan saya.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
