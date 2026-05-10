import Header from '../components/Header'

export default function Home() {
  return (
    // Premium SLATE-50 bg, adding some top space for fixed header
    <main className="min-h-screen bg-slate-50 pt-24 text-gray-900">
      <Header />
      
      {/* Hero Section Container */}
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 text-center">
        
        {/* Realistic Badge - Pill style */}
        <div className="inline-block mb-4 px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold shadow-sm border border-blue-200">
          Day 3: Project Setup Complete ✅
        </div>

        {/* HERO Heading - Huge, bold, tight tracking */}
        <h2 className="text-5xl md:text-7xl font-black leading-tight tracking-tighter text-gray-950 mb-6">
          Are you overspending <br /> on AI tools? 💸
        </h2>
        
        {/* HERO Sub-heading - Large text, slate color */}
        <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-3xl mx-auto leading-relaxed">
          Analyze your ChatGPT, Midjourney, and other subscriptions. 
          Discover smart ways to save up to <span className="text-blue-600 font-extrabold">₹4,000</span> every month.
        </p>

        {/* Main Interaction Box - The Calculator Card */}
        <div className="bg-white p-8 md:p-20 rounded-[3rem] shadow-2xl shadow-blue-100/70 border border-slate-100 border-opacity-70">
          
          {/* Card Icon Area */}
          <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-8 mx-auto border border-blue-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>

          {/* Card Content - Realistic SaaS typography */}
          <h3 className="text-3xl md:text-4xl font-extrabold text-gray-950 mb-4 tracking-tight">
            Ready to Audit?
          </h3>
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed">
            Tomorrow we will add the interface to select your AI tools and calculate your savings.
          </p>

          {/* CTA Button - Bold blue, pill shape, soft shadow */}
          <button className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-0.5">
            Calculation Logic (Day 4)...
          </button>
        </div>

        {/* Realistic Footer Line */}
        <footer className="mt-20 pt-8 border-t border-slate-100 text-sm text-slate-500 font-medium">
          © 2026 SpendWise. Developed by You 🇮🇳
        </footer>
      </div>
    </main>
  )
}