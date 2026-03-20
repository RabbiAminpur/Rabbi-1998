import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className="flex flex-col items-center justify-center pt-8 pb-4 px-4 bg-white overflow-visible">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center relative"
      >
        <div className="relative w-40 h-40 md:w-56 md:h-56 mx-auto">
          {/* Rotating Dashed Stroke Animation */}
          <motion.div
            animate={{ 
              rotate: 360,
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -inset-3 rounded-full border-4 border-dashed border-emerald-400/60"
          />
          
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: "easeInOut"
            }}
            className="absolute -inset-6 rounded-full border border-emerald-300/30"
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
          
          {/* Animated Text: রিয়া❤️রাব্বি - Heartbeat Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: 1, 
              scale: [1, 1.1, 1],
            }}
            transition={{ 
              opacity: { delay: 1, duration: 0.5 },
              scale: { duration: 1, repeat: Infinity, ease: "easeInOut" }
            }}
            className="absolute -right-4 bottom-2 z-20 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-md border border-rose-100 flex items-center space-x-1"
          >
            <span className="text-[10px] md:text-xs font-bold text-slate-800 whitespace-nowrap">
              {t.coupleName.split('❤️')[0]}<span className="text-rose-500 mx-0.5">❤️</span>{t.coupleName.split('❤️')[1]}
            </span>
          </motion.div>

          <div className="absolute -inset-4 bg-emerald-500/5 rounded-full -z-10 blur-2xl"></div>
        </div>
      </motion.div>
    </section>
  );
}
