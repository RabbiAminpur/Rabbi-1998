import { ReactNode } from 'react';
import Hero from './Hero';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-md z-50 border-b border-slate-100 shadow-sm flex items-center px-6">
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="text-xl font-bold text-emerald-600 tracking-tight">
            রাব্বি হোসেন
          </div>
          <div className="hidden md:flex space-x-4 text-sm text-slate-500 font-medium">
            <span>পোর্টফোলিও ২০২৬</span>
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
      <footer className="fixed bottom-0 left-0 right-0 h-16 bg-slate-50 border-t border-slate-200 z-50 flex items-center justify-center">
        <p className="text-slate-500 font-medium text-sm">
          রিয়া-রাব্বি ২০২৬
        </p>
      </footer>
    </div>
  );
}
