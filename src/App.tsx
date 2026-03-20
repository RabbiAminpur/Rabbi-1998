import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Page Components
const Overview = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">এক নজরে</h2>
    <div className="prose prose-slate max-w-none">
      <p className="text-lg text-slate-600 leading-relaxed">
        স্বাগতম! আমি মীর রাব্বি হোসেন। আমি একজন প্রযুক্তি প্রেমী এবং সৃজনশীল মানুষ। গত কয়েক বছর ধরে আমি বিভিন্ন প্রজেক্টে কাজ করছি এবং নতুন নতুন প্রযুক্তি শিখছি। আমার লক্ষ্য হলো প্রযুক্তির মাধ্যমে মানুষের সমস্যা সমাধান করা এবং সুন্দর কিছু তৈরি করা।
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100">
          <h3 className="text-xl font-semibold text-emerald-800 mb-2">দক্ষতা</h3>
          <p className="text-emerald-700">রিয়্যাক্ট, জাভাস্ক্রিপ্ট, টেলউইন্ড সিএসএস এবং আধুনিক ওয়েব ডিজাইন।</p>
        </div>
        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100">
          <h3 className="text-xl font-semibold text-blue-800 mb-2">লক্ষ্য</h3>
          <p className="text-blue-700">ভবিষ্যতে আরও বড় পরিসরে কাজ করা এবং নতুন উদ্ভাবনী আইডিয়া নিয়ে আসা।</p>
        </div>
      </div>
    </div>
  </div>
);

const Experience = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">কর্ম অভিজ্ঞতা</h2>
    <div className="space-y-8">
      {[
        { title: 'সিনিয়র ওয়েব ডেভেলপার', company: 'টেক সলিউশনস লিমিটেড', period: '২০২২ - বর্তমান', desc: 'এখানে আমি মূল ওয়েব অ্যাপ্লিকেশন ডেভেলপমেন্ট এবং টিম ম্যানেজমেন্টের কাজ করি।' },
        { title: 'জুনিয়র ডেভেলপার', company: 'ক্রিয়েটিভ আইটি', period: '২০২০ - ২০২২', desc: 'ফ্রন্টএন্ড ডিজাইন এবং ইউজার ইন্টারফেস তৈরিতে গুরুত্বপূর্ণ ভূমিকা পালন করেছি।' }
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

const Education = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">পড়াশোনা</h2>
    <div className="grid gap-6">
      {[
        { degree: 'কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং (বিএসসি)', institute: 'ঢাকা বিশ্ববিদ্যালয়', year: '২০২০', result: 'সিজিপিএ: ৩.৮০' },
        { degree: 'উচ্চ মাধ্যমিক (এইচএসসি)', institute: 'রাজউক উত্তরা মডেল কলেজ', year: '২০১৬', result: 'জিপিএ: ৫.০০' }
      ].map((edu, i) => (
        <div key={i} className="p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-bold text-slate-800">{edu.degree}</h3>
          <p className="text-slate-600">{edu.institute}</p>
          <div className="flex justify-between mt-4 text-sm font-medium">
            <span className="text-emerald-600">সাল: {edu.year}</span>
            <span className="text-slate-500">{edu.result}</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const OtherExperience = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">অন্যান্য অভিজ্ঞতা</h2>
    <ul className="grid gap-4">
      {[
        'বিভিন্ন ওপেন সোর্স প্রজেক্টে অবদান রাখা।',
        'জাতীয় পর্যায়ের হ্যাকাথনে অংশগ্রহণ এবং পুরস্কার জয়।',
        'টেকনিক্যাল ব্লগ রাইটিং এবং কমিউনিটি সাপোর্ট।',
        'গ্রাফিক্স ডিজাইন এবং ভিডিও এডিটিংয়ের প্রাথমিক জ্ঞান।'
      ].map((item, i) => (
        <li key={i} className="flex items-start space-x-3 p-4 bg-slate-50 rounded-xl">
          <span className="text-emerald-500 mt-1">✦</span>
          <span className="text-slate-700">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

const About = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">আমার সম্পর্কে</h2>
    <div className="prose prose-slate max-w-none text-slate-600 leading-relaxed">
      <p>
        আমি মীর রাব্বি হোসেন, একজন স্বপ্নদ্রষ্টা এবং পরিশ্রমী মানুষ। ছোটবেলা থেকেই প্রযুক্তির প্রতি আমার এক অন্যরকম টান ছিল। সেই টান থেকেই আজ আমি একজন ওয়েব ডেভেলপার হিসেবে নিজেকে গড়ে তুলেছি।
      </p>
      <p>
        কাজের বাইরে আমি বই পড়তে, নতুন নতুন জায়গা ঘুরতে এবং গান শুনতে পছন্দ করি। আমি বিশ্বাস করি যে, শেখার কোনো শেষ নেই। তাই প্রতিদিন নতুন কিছু শেখার চেষ্টা করি।
      </p>
      <p>
        আমার জীবনের মূলমন্ত্র হলো— "সততা এবং পরিশ্রমই সাফল্যের চাবিকাঠি।" আমি সবসময় ইতিবাচক চিন্তা করতে ভালোবাসি এবং অন্যদের অনুপ্রাণিত করতে পছন্দ করি।
      </p>
    </div>
  </div>
);

const Contact = () => (
  <div className="space-y-6">
    <h2 className="text-3xl font-bold text-slate-900">যোগাযোগ</h2>
    <div className="grid gap-6 md:grid-cols-2">
      <div className="space-y-4">
        <p className="text-slate-600">আমার সাথে যোগাযোগ করতে নিচের মাধ্যমগুলো ব্যবহার করতে পারেন:</p>
        <div className="space-y-3">
          <div className="flex items-center space-x-3 text-slate-700">
            <span className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">✉</span>
            <span>rabbi@example.com</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-700">
            <span className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">📞</span>
            <span>+৮৮০ ১২৩৪ ৫৬৭৮৯০</span>
          </div>
          <div className="flex items-center space-x-3 text-slate-700">
            <span className="w-10 h-10 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center">📍</span>
            <span>ঢাকা, বাংলাদেশ</span>
          </div>
        </div>
      </div>
      <form className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">নাম</label>
          <input type="text" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="আপনার নাম" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">ইমেইল</label>
          <input type="email" className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="আপনার ইমেইল" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">বার্তা</label>
          <textarea className="w-full px-4 py-2 rounded-xl border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none h-32" placeholder="আপনার বার্তা"></textarea>
        </div>
        <button type="button" className="w-full bg-emerald-600 text-white font-bold py-3 rounded-xl hover:bg-emerald-700 transition-colors">বার্তা পাঠান</button>
      </form>
    </div>
  </div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/education" element={<Education />} />
          <Route path="/other" element={<OtherExperience />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
