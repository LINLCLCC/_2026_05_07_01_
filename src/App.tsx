/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { TimerCard } from "./components/TimerCard";

export default function App() {
  return (
    <div className="h-screen bg-slate-900 text-slate-50 flex flex-col font-sans overflow-hidden">
      <header className="h-20 px-4 md:px-10 flex items-center justify-between border-b border-white/10 bg-slate-900/80 backdrop-blur-md shrink-0">
        <h1 className="text-lg md:text-2xl font-bold tracking-tight uppercase text-slate-400">
          Arena Dual Match
        </h1>
        <div className="flex gap-3 items-center">
          <span className="bg-slate-700 px-3 py-1 rounded-full text-xs font-semibold text-slate-400 hidden md:inline-block">LIVE SESSION</span>
          <span className="bg-slate-700 px-3 py-1 rounded-full text-xs font-semibold text-slate-400 hidden md:inline-block">2.4GHZ SYNC</span>
        </div>
      </header>

      <main className="flex-1 min-h-0 container mx-auto p-4 md:p-6 pb-24 md:pb-6 grid grid-cols-1 md:grid-cols-2 gap-6 overflow-y-auto w-full">
        <TimerCard 
          label="CHALLENGER A"
          title="A 組 (Team A)" 
          themeColor="red" 
          delay={0.1} 
        />
        <TimerCard 
          label="CHALLENGER B"
          title="B 組 (Team B)" 
          themeColor="blue" 
          delay={0.2} 
        />
      </main>

      <footer className="h-10 px-4 md:px-10 flex items-center justify-center text-xs text-slate-600 bg-slate-900 border-t border-white/5 shrink-0">
        <div className="flex items-center mr-6">
          <div className="w-2 h-2 rounded-full bg-emerald-500 mr-2 shadow-[0_0_10px_#10B981]"></div>
          <span>SYSTEM READY</span>
        </div>
        <div>VITE-TS-TIMER V1.0.4</div>
      </footer>
    </div>
  );
}
