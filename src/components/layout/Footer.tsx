import { Twitter, Linkedin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-bold text-white mb-4">MA TRANSFORM LAB</h3>
            <p className="text-gray-400 text-sm mb-6">
              The strategic educational ecosystem for total performance. Transforming lives across 5 continents.
            </p>
            <div className="flex gap-4">
               {/* Socials Placeholder */}
               <Twitter className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
               <Linkedin className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
               <Instagram className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
               <Youtube className="w-5 h-5 text-gray-500 hover:text-white cursor-pointer" />
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Programs</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/courses" className="hover:text-purple">Mind & Body Mastery</Link></li>
              <li><Link href="/courses" className="hover:text-purple">Digital Entrepreneurship</Link></li>
              <li><Link href="/courses" className="hover:text-purple">AI Productivity Systems</Link></li>
              <li><Link href="/courses" className="hover:text-purple">Executive Coaching</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/contact" className="hover:text-purple">Contact Us</Link></li>
              <li><Link href="/legal/privacy" className="hover:text-purple">Privacy Policy</Link></li>
              <li><Link href="/legal/terms" className="hover:text-purple">Terms of Service</Link></li>
              <li><Link href="/legal/refund" className="hover:text-purple">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <p className="text-sm text-gray-400 mb-4">Dubai, UAE</p>
            <a href="https://wa.me/971501472676" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300">
              <MessageCircle className="w-4 h-4" />
              +971 50 147 2676
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">© 2024 MA Transform Lab. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-gray-600">
             <span>Legacy Built for Her.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
