import Link from 'next/link';
import { Rocket } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#374151]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <Rocket className="w-6 h-6 text-[#7C3AED]" />
            <span className="text-xl font-bold text-white">MA Transform Lab</span>
          </Link>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/courses" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Courses</Link>
            <Link href="/blog" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Blog</Link>
            <Link href="/assessment" className="text-[#D1D5DB] hover:text-[#7C3AED] transition-colors">Assessment</Link>
            <Link href="/dashboard" className="bg-[#7C3AED] text-white px-4 py-2 rounded-lg hover:bg-[#6D28D9] transition-colors">
              Dashboard
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
