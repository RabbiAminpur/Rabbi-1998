import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="flex flex-col items-center justify-center pt-8 pb-4 px-4 bg-white">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto">
          {/* Heartbeat Stroke Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -inset-2 rounded-full border-4 border-emerald-400/40"
          />
          <motion.div
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ 
              duration: 1.5, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 0.1
            }}
            className="absolute -inset-4 rounded-full border-2 border-emerald-300/20"
          />
          
          <motion.img
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            src="https://i.ibb.co/HTdwrmF9/20260320-034028.png"
            alt={t.name}
            className="w-full h-full object-cover rounded-full shadow-xl border-4 border-emerald-500/20 p-1 bg-white relative z-10"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -inset-4 bg-emerald-500/5 rounded-full -z-10 blur-2xl"></div>
        </div>
      </motion.div>
    </section>
  );
}
