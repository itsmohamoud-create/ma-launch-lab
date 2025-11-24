export function Footer() {
  return (
    <footer className="bg-black-velvet border-t border-purple-royal/20 py-12 text-center">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gold-primary font-bold text-xl mb-2">
          MA TRANSFORM LAB
        </p>
        <p className="text-gray-400 mb-4">
          Systems for Mind, Body & Business Mastery
        </p>
        <div className="text-sm text-gray-500 space-y-1">
          <p>matransformlaunch@gmail.com</p>
          <p>WhatsApp: +252 63 8666133 | Support: +44 7392 374076</p>
          <p className="mt-4">© {new Date().getFullYear()} MA Transform Lab. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
