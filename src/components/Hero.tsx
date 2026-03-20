import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center py-12 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tight">
          মীর রাব্বি হোসেন
        </h1>
        
        <div className="relative w-48 h-48 md:w-64 md:h-64 mx-auto mb-8">
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src="https://i.ibb.co/HTdwrmF9/20260320-034028.png"
            alt="মীর রাব্বি হোসেন"
            className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -inset-1 bg-emerald-500/10 rounded-3xl -z-10 blur-xl"></div>
        </div>
      </motion.div>
    </section>
  );
}
