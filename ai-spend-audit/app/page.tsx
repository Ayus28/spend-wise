"use client";
import React, { useState } from 'react';

export default function Dashboard() {
  const [audits, setAudits] = useState([
    { id: 1, name: "ChatGPT Plus", cost: 20, date: "2026-05-10" },
    { id: 2, name: "Midjourney", cost: 30, date: "2026-05-11" }
  ]);

  const [toolName, setToolName] = useState("");
  const [cost, setCost] = useState("");

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
    setToolName("");
    setCost("");
  };

  // --- NAYA: DELETE FUNCTION ---
  const deleteAudit = (id: number) => {
    setAudits(audits.filter(item => item.id !== id));
  };

  const totalSpend = audits.reduce((acc, curr) => acc + curr.cost, 0);
  
  // --- NAYA: AI BUDGET LOGIC ($60 ka limit) ---
  const isOverBudget = totalSpend > 60;

  return (
    <main className="p-8 bg-slate-50 min-h-screen text-slate-800 font-sans">
      <div className="max-w-5xl mx-auto">
        <header className="mb-10 flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-extrabold text-blue-600 tracking-tight">AI Spend Auditor 📊</h1>
            <p className="text-slate-500 mt-2">Final Day: Professional Audit Mode</p>
          </div>
          {isOverBudget && (
            <div className="bg-red-100 text-red-600 px-4 py-2 rounded-lg font-bold animate-pulse">
              ⚠️ Over Budget Alert!
            </div>
          )}
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <div className={`p-6 rounded-2xl shadow-sm border-t-8 transition-all ${isOverBudget ? 'bg-red-50 border-red-500' : 'bg-white border-blue-500'}`}>
            <p className="text-sm text-slate-500 font-semibold">Total Monthly Spend</p>
            <h2 className={`text-4xl font-black mt-1 ${isOverBudget ? 'text-red-600' : 'text-slate-800'}`}>
              ${totalSpend.toFixed(2)}
            </h2>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border-t-8 border-green-500">
            <p className="text-sm text-slate-500 font-semibold">Optimization Score</p>
            <h2 className="text-4xl font-black mt-1 text-green-600">
              {isOverBudget ? "60%" : "95%"}
            </h2>
          </div>
        </div>

        {/* Add Form */}
        <section className="bg-white p-8 rounded-2xl shadow-sm mb-10 border border-slate-200">
          <form onSubmit={addAudit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <input type="text" placeholder="Tool Name" className="p-3 bg-slate-50 border rounded-xl" value={toolName} onChange={(e)=>setToolName(e.target.value)} required />
            <input type="number" placeholder="Cost ($)" className="p-3 bg-slate-50 border rounded-xl" value={cost} onChange={(e)=>setCost(e.target.value)} required />
            <button type="submit" className="bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-all">Add to Audit</button>
          </form>
        </section>

        {/* Table with Delete Button */}
        <section className="bg-white rounded-2xl shadow-sm overflow-hidden border border-slate-200">
          <table className="w-full text-left">
            <thead className="bg-slate-50 text-slate-500 text-sm">
              <tr>
                <th className="p-5">AI Tool</th>
                <th className="p-5">Cost</th>
                <th className="p-5 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {audits.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50">
                  <td className="p-5 font-bold">{item.name}</td>
                  <td className="p-5 text-blue-600 font-bold">${item.cost}</td>
                  <td className="p-5 text-right">
                    <button onClick={() => deleteAudit(item.id)} className="text-red-400 hover:text-red-600 font-medium">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </main>
  );
}