export default function Header() {
  return (
    // PURE WHITE bg, very light border, shadow
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* LOGO area - Modern Bold Font */}
        <h1 className="text-xl font-bold text-gray-900 tracking-tight flex items-center gap-2">
          <span className="w-6 h-6 bg-blue-600 rounded-md"></span> {/* A small logo block */}
          AI Spend Auditor
        </h1>
        
        {/* RIGHT Side area - Modern Pill badge */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
            Day 3: Basic UI
          </span>
        </div>
      </nav>
    </header>
  );
} 