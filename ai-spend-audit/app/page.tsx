import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar & Header Navigation */}
      <nav className="bg-blue-600 p-4 shadow-lg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-white text-2xl font-bold tracking-tight">
            AI <span className="text-blue-200">Spend Auditor</span>
          </h1>
          <div className="flex space-x-4">
            <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition">
              New Audit
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-6 lg:p-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-slate-800">Day 4: Dashboard Preview</h2>
          <p className="text-slate-600">Track your AI costs and savings in real-time.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase">Total Spend</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">$1,240.50</p>
            <span className="text-green-500 text-sm font-medium">↓ 12% from last month</span>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase">AI Efficiency</p>
            <p className="text-3xl font-bold text-slate-900 mt-1">84%</p>
            <span className="text-blue-500 text-sm font-medium">Optimize further?</span>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <p className="text-sm font-medium text-slate-500 uppercase">Est. Savings</p>
            <p className="text-3xl font-bold text-blue-600 mt-1">$450.00</p>
            <span className="text-slate-400 text-sm italic">Predicted by AI</span>
          </div>
        </div>

        {/* Placeholder for Charts/Data */}
        <div className="bg-white p-10 rounded-3xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
          <div className="bg-blue-100 p-4 rounded-full mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-800">Your Audit Data will appear here</h3>
          <p className="text-slate-500 max-w-sm mt-2">Connect your API keys or upload a billing CSV to start the AI analysis.</p>
        </div>
      </main>
    </div>
  );
}