"use client";
import React, { useState } from 'react';

export default function Dashboard() {
  // Data store karne ke liye list (Starting data)
  const [audits, setAudits] = useState([
    { id: 1, name: "ChatGPT Plus", cost: 20, date: "2026-05-10" },
    { id: 2, name: "Midjourney", cost: 30, date: "2026-05-11" }
  ]);

  // Naye input ke liye states
  const [toolName, setToolName] = useState("");
  const [cost, setCost] = useState("");

  // Naya audit add karne ka function
  const addAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!toolName || !cost) return;
    
    const newAudit = {
      id: Date.now(),
      name: toolName,
      cost: parseFloat(cost),
      date: new Date().toISOString().split('T')[0]
    };
    
    setAudits([...audits, newAudit]);
    setToolName(""); // Form clear karne ke liye
    setCost("");
  };

  // Total spend calculate karne ka logic
  const totalSpend = audits.reduce((acc, curr) => acc + curr.cost, 0);
  const potentialSavings = totalSpend * 0.2; // Maan lo 20% bacha sakte hain

  return (
    <main className="p-8 bg-slate-50 min-h-screen text-slate-800">
      <div className="max-w-5xl mx-auto">
        
        {/* Main Heading */}
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">
            AI Spend Auditor 📊
          </h1>
          <p className="text-slate-500 mt-2">Track and optimize your AI subscriptions effectively.</p>
        </header>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-8 border-l-blue-500">
            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Total Monthly Spend</p>
            <h2 className="text-4xl font-black mt-1">${totalSpend.toFixed(2)}</h2>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 border-l-8 border-l-green-500">
            <p className="text-sm text-slate-500 font-semibold uppercase tracking-wider">Estimated Savings</p>
            <h2 className="text-4xl font-black mt-1 text-green-600">${potentialSavings.toFixed(2)}</h2>
          </div>
        </div>

        {/* Action Section: Form */}
        <section className="bg-white p-8 rounded-2xl shadow-sm mb-10 border border-slate-200">
          <h3 className="text-lg font-bold mb-6 flex items-center">
            <span className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-3">➕</span>
            Add New Tool Audit
          </h3>
          <form onSubmit={addAudit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input 
              type="text" 
              placeholder="Tool Name (e.g. Claude.ai)" 
              className="p-3 bg-slate-50 border border-slate-200 rounded-xl outline-blue-500 transition-all"
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
              required
            />
            <input 
              type="number" 
              placeholder="Cost per month ($)" 
              className="p-3 bg-slate-50 border border-slate-200 rounded-xl outline-blue-500 transition-all"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
            />
            <button 
              type="submit" 
              className="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 hover:shadow-lg transition-all active:scale-95"
            >
              Add to Audit
            </button>
          </form>
        </section>

        {/* Data Table Section */}
        <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
          <div className="p-6 border-b border-slate-100 bg-slate-50/50">
            <h3 className="font-bold text-slate-700">Audit History</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 text-slate-500 text-sm uppercase">
                <tr>
                  <th className="p-5 font-semibold">AI Tool Name</th>
                  <th className="p-5 font-semibold">Monthly Cost</th>
                  <th className="p-5 font-semibold">Audit Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {audits.map((item) => (
                  <tr key={item.id} className="hover:bg-blue-50/30 transition-colors">
                    <td className="p-5 font-bold text-slate-700">{item.name}</td>
                    <td className="p-5">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-bold">
                        ${item.cost.toFixed(2)}
                      </span>
                    </td>
                    <td className="p-5 text-slate-400 text-sm">{item.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Footer info */}
        <p className="text-center text-slate-400 text-xs mt-10">
          Day 4 Complete • All systems operational
        </p>
      </div>
    </main>
  );
} 