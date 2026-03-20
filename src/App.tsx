import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  User, 
  Briefcase, 
  GraduationCap, 
  Sparkles, 
  Info, 
  Mail,
  Facebook,
  Linkedin,
  Music
} from 'lucide-react';
import Layout from './components/Layout';
import { useLanguage } from './LanguageContext';

// Page Components
const Overview = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6 py-4">
      <div className="prose prose-slate max-w-none text-justify">
        <p className="text-lg text-slate-600 leading-relaxed">
          {t.welcome}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
            <h3 className="text-xl font-semibold text-emerald-800 mb-2">{t.skills}</h3>
            <p className="text-emerald-700">{t.skillsDesc}</p>
          </div>
          <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{t.goals}</h3>
            <p className="text-blue-700">{t.goalsDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6 py-4">
      <div className="space-y-8 text-justify">
        {[
          { title: t.job1Title, company: t.job1Company, period: t.job1Period, desc: t.job1Desc },
          { title: t.job2Title, company: t.job2Company, period: t.job2Period, desc: t.job2Desc }
        ].map((job, i) => (
          <div key={i} className="relative pl-8 border-l-2 border-emerald-200">
            <div className="absolute -left-[9px] top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-white shadow-sm" />
            <h3 className="text-xl font-bold text-slate-800">{job.title}</h3>
            <p className="text-emerald-600 font-medium mb-2">{job.company} | {job.period}</p>
            <p className="text-slate-600">{job.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Education = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6 py-4">
      <div className="grid gap-6 text-justify">
        {[
          { degree: t.edu1Degree, institute: t.edu1Institute, year: t.edu1Year, result: t.edu1Result },
          { degree: t.edu2Degree, institute: t.edu2Institute, year: t.edu2Year, result: t.edu2Result }
        ].map((edu, i) => (
          <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
            <p className="text-slate-600">{edu.institute}</p>
            <div className="flex justify-between mt-4 text-sm font-medium">
              <span className="text-emerald-600">{t.yearLabel}{edu.year}</span>
              <span className="text-slate-500">{edu.result}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const OtherExperience = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6 py-4">
      <ul className="grid gap-4 text-justify">
        {t.otherExp.map((item, i) => (
          <li key={i} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
            <span className="text-emerald-500 mt-1">✦</span>
            <span className="text-slate-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6 py-4">
      <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed text-justify">
        <p>{t.aboutText1}</p>
        <p>{t.aboutText2}</p>
        <p>{t.aboutText3}</p>
      </div>
    </div>
  );
};

const Contact = () => {
  const { t } = useLanguage();
  return (
    <div className="space-y-6 py-4">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-4">
            <p className="text-slate-600">{t.contactTitle}</p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-slate-700">
                <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">✉</span>
                <span>rabbi@example.com</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">📞</span>
                <span>{t.phoneValue}</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-700">
                <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">📍</span>
                <span>{t.locValue}</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100">
            <p className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">{t.socialMedia}</p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/rabbi.aminpur" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#1877F2]/10 text-[#1877F2] rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-[#0A66C2]/10 text-[#0A66C2] rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black/10 text-black rounded-2xl flex items-center justify-center hover:scale-110 transition-transform">
                <Music className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <form className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.formName}</label>
            <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder={t.formPlaceholderName} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.formEmail}</label>
            <input type="email" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder={t.formPlaceholderEmail} />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">{t.formMsg}</label>
            <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none h-32" placeholder={t.formPlaceholderMsg}></textarea>
          </div>
          <button type="button" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors">{t.formSubmit}</button>
        </form>
      </div>
    </div>
  );
};

export default function App() {
  const [activeId, setActiveId] = useState<string>('overview');
  const { t } = useLanguage();

  const menuItems = [
    { id: 'overview', title: t.overview, component: <Overview />, icon: User, color: 'text-emerald-500', bgColor: 'bg-emerald-50' },
    { id: 'experience', title: t.experience, component: <Experience />, icon: Briefcase, color: 'text-blue-500', bgColor: 'bg-blue-50' },
    { id: 'education', title: t.education, component: <Education />, icon: GraduationCap, color: 'text-purple-500', bgColor: 'bg-purple-50' },
    { id: 'other', title: t.other, component: <OtherExperience />, icon: Sparkles, color: 'text-amber-500', bgColor: 'bg-amber-50' },
    { id: 'about', title: t.about, component: <About />, icon: Info, color: 'text-rose-500', bgColor: 'bg-rose-50' },
    { id: 'contact', title: t.contact, component: <Contact />, icon: Mail, color: 'text-indigo-500', bgColor: 'bg-indigo-50' },
  ];

  // Scroll to top when activeId changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeId]);

  const handleSwipe = (direction: 'left' | 'right') => {
    const currentIndex = menuItems.findIndex(item => item.id === activeId);
    if (direction === 'left' && currentIndex < menuItems.length - 1) {
      setActiveId(menuItems[currentIndex + 1].id);
    } else if (direction === 'right' && currentIndex > 0) {
      setActiveId(menuItems[currentIndex - 1].id);
    }
  };

  const activeItem = menuItems.find(item => item.id === activeId);

  return (
    <Layout>
      <div className="pb-20 overflow-x-hidden">
        {/* Top-Left Navigation - Sticky and 2 Rows */}
        <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4 mb-8">
          <div className="max-w-4xl mx-auto px-4">
            <div className="grid grid-cols-3 gap-2 md:gap-4">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`flex items-center justify-center px-2 md:px-4 py-2.5 rounded-xl transition-all duration-300 group ${
                    activeId === item.id
                      ? `${item.bgColor} shadow-sm border border-slate-100`
                      : 'hover:bg-slate-50'
                  }`}
                >
                  <span className={`text-[11px] md:text-sm font-bold transition-colors text-center ${
                    activeId === item.id ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'
                  }`}>
                    {item.title}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeId}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              const swipeThreshold = 50;
              if (info.offset.x < -swipeThreshold) {
                handleSwipe('left');
              } else if (info.offset.x > swipeThreshold) {
                handleSwipe('right');
              }
            }}
            className="cursor-grab active:cursor-grabbing px-4"
          >
            {activeItem?.component}
          </motion.div>
        </AnimatePresence>
      </div>
    </Layout>
  );
}


