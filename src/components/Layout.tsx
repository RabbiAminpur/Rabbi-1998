import { ReactNode } from 'react';
import { useLanguage } from '../LanguageContext';
import Hero from './Hero';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="text-xl font-bold text-emerald-600 tracking-tight">
            {t.name}
          </div>
          <div className="flex items-center bg-slate-100 p-1 rounded-lg">
            <button
              onClick={() => setLanguage('bn')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                language === 'bn'
                  ? 'bg-white text-emerald-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              বাং
            </button>
            <button
              onClick={() => setLanguage('en')}
              className={`px-3 py-1 text-xs font-bold rounded-md transition-all ${
                language === 'en'
                  ? 'bg-white text-emerald-600 shadow-sm'
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              ENG
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-16 pb-20">
        <Hero />
        <div className="max-w-4xl mx-auto px-6 py-8">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 z-50">
        {/* Navigation is handled in App.tsx */}
      </footer>
    </div>
  );
}
