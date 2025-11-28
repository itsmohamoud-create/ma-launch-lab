import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] border-t border-[#374151] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-4">MA Transform Lab</h3>
            <p className="text-[#D1D5DB] mb-4">
              Transforming lives across mental, physical, business, and AI dimensions. 
              Join thousands who have transformed their lives through our integrated system.
            </p>
            <div className="flex items-center gap-4 text-[#D1D5DB]">
              <Mail className="w-4 h-4" />
              <span>matformlab@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 text-[#D1D5DB] mt-2">
              <Phone className="w-4 h-4" />
              <span>+971 50 147 2676 (WhatsApp Business)</span>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><Link href="/courses/personal-transformation" className="text-[#D1D5DB] hover:text-[#7C3AED]">Personal Transformation</Link></li>
              <li><Link href="/courses/executive-mastery" className="text-[#D1D5DB] hover:text-[#7C3AED]">Executive Mastery</Link></li>
              <li><Link href="/courses/business-accelerator" className="text-[#D1D5DB] hover:text-[#7C3AED]">Business Accelerator</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link href="/assessment" className="text-[#D1D5DB] hover:text-[#7C3AED]">Assessment</Link></li>
              <li><Link href="/guide" className="text-[#D1D5DB] hover:text-[#7C3AED]">Transformation Guide</Link></li>
              <li><Link href="/toolkit" className="text-[#D1D5DB] hover:text-[#7C3AED]">Wellness Toolkit</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#374151] mt-8 pt-8 text-center">
          <p className="text-[#9CA3AF]">
            © 2024 MA Transform Lab. Transforming lives across 5 continents. 
            <span className="block mt-2">@matransformlab</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
