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
              className="w-60 md:w-80"
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
            <p className="text-muted-foreground text-lg text-justify leading-relaxed">
              Halo! Nama saya <strong>Lutfiar Rahman Maarif</strong>, seorang
              Fresh Graduate dari SMK Negeri 1 Kadipaten, jurusan Rekayasa
              Perangkat Lunak. Saya sangat tertarik pada bidang{" "}
              <strong>Web Development</strong>, terutama Fullstack Development.
              Selama masa studi, saya banyak belajar teknologi seperti{" "}
              <strong>HTML, CSS, JavaScript, PHP, MySQL</strong>, dan{" "}
              <strong>Laravel</strong>. Selain itu, saya juga aktif mempelajari
              teknologi modern seperti{" "}
              <strong>React, Next.js, dan Tailwind CSS</strong> melalui YouTube
              dan dokumentasi resmi.
            </p>
            <p className="text-muted-foreground text-lg text-justify leading-relaxed">
              Saya memiliki semangat belajar hal baru dan selalu siap bekerja
              dalam tim untuk mengembangkan produk digital yang bermanfaat bagi
              pengguna. Saat ini, saya sedang mencari peluang untuk berkembang
              sebagai developer dan terus meningkatkan kemampuan saya.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
