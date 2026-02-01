"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black flex items-center justify-center px-6">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-12 text-center shadow-2xl"
      >
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Chikkanna S
        </h1>

        <p className="text-zinc-400 text-lg mb-6">
          AI • IoT • Computer Vision • Full-Stack Developer
        </p>

        <button className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 transition">
          View Projects →
        </button>
      </motion.div>

    </main>
  );
}
