// "use client";

// import Navbar from "./Navbar";
// import Hero from "./Hero";
// import { motion } from "framer-motion";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* BACKGROUND IMAGE */}
//       <div className="absolute inset-0 -z-10">
//         <div
//           className="
//             absolute inset-0
//             bg-[url('/images/hero-light.jpg')]
//             dark:bg-[url('/images/hero-light.jpg')]
//             bg-cover bg-center
//             opacity-100 dark:opacity-100
//           "
//         />

//         {/* GRADIENT MASK */}
//         <div
//           className="absolute inset-0 bg-gradient-to-b
//           from-white/90 via-white/70 to-white
//           dark:from-[#0B0B0C]/90 dark:via-[#0B0B0C]/70 dark:to-[#0B0B0C]"
//         />
//       </div>

//       {/* CONTENT */}
//       <div className="relative max-w-7xl mx-auto px-6">
//         <Navbar />

//         <div className="grid lg:grid-cols-2 gap-12 items-center py-24">
//           <Hero />

//           {/* PROFILE IMAGE */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ delay: 0.2, duration: 0.6 }}
//             className="hidden lg:flex justify-center"
//           >
//             <div className="relative">
//               <img
//                 src="/images/profile_Sam.png"
//                 alt="Sumit Bhargav"
//                 className="w-72 h-72 object-cover rounded-3xl shadow-2xl"
//               />

//               {/* SOFT GLOW */}
//               <div
//                 className="absolute -inset-6 rounded-3xl
//                 bg-indigo-500/20 dark:bg-indigo-400/10
//                 blur-3xl -z-10"
//               />
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


"use client";

import Navbar from "./Navbar";
import Hero from "./Hero";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[85vh]">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute inset-0 grid-overlay opacity-70" />
        <div className="absolute inset-0 scanlines opacity-40" />
        <div className="absolute -top-40 -left-20 h-72 w-72 rounded-full glow-orb animate-float-slow" />
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full glow-orb animate-float-slow" />
        <div className="absolute bottom-[-120px] left-1/2 h-80 w-80 rounded-full glow-orb animate-float-slow" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-7xl mx-auto px-6 pt-6">
        <Navbar />

        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center py-16 sm:py-20 lg:py-28">
          <div className="order-2 lg:order-1">
            <Hero />
          </div>

          {/* ================= PROFILE IMAGE ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <div className="orbit hidden sm:block" />
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-white/10 via-white/5 to-transparent blur-2xl" />
              <img
                src="/images/profile_Sam.png"
                alt="Sumit Bhargav"
                className="relative w-44 h-44 sm:w-56 sm:h-56 lg:w-80 lg:h-80 object-cover rounded-[28px] border border-white/10 shadow-2xl"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 glass-surface rounded-full px-5 py-2 text-xs text-white/70">
                Currently building iOS + AI experiences
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
