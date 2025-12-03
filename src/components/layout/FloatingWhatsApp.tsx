import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  return (
    <a 
      href="https://wa.me/971501472676" 
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20bd5a] p-4 rounded-full shadow-[0_4px_12px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle className="w-8 h-8 text-white fill-current" />
    </a>
  )
}
