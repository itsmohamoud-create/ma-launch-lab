import { Users } from 'lucide-react';

export default function SocialBanner() {
  return (
    <div className="w-full py-3 bg-gradient-to-r from-[#7C3AED] to-[#10B981] text-white text-center">
      <div className="flex items-center justify-center gap-2">
        <Users className="w-4 h-4" />
        <span className="text-sm font-medium">Join 1,000+ students @matransformlab</span>
      </div>
    </div>
  );
}
