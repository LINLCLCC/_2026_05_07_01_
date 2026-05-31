import { useState, useRef, useEffect } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface TimerCardProps {
  label: string;
  title: string;
  themeColor: "red" | "blue" | "emerald";
  delay: number;
}

export function TimerCard({ label, title, themeColor, delay }: TimerCardProps) {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const startTimeRef = useRef<number>(0);
  const intervalRef = useRef<number | null>(null);

  // 清除計時器以避免 memory leak
  useEffect(() => {
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleStart = () => {
    if (!isRunning) {
      startTimeRef.current = Date.now() - elapsed;
      intervalRef.current = window.setInterval(() => {
        setElapsed(Date.now() - startTimeRef.current);
      }, 50); // 每 50ms 更新一次畫面，維持順暢且不耗過多效能
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    if (isRunning && intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  };

  const handleReset = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setIsRunning(false);
    setElapsed(0);
  };

  // 格式化時間：HH(可選):MM:SS.ms
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const h = Math.floor(totalSeconds / 3600);
    const m = Math.floor((totalSeconds % 3600) / 60);
    const s = totalSeconds % 60;
    const cs = Math.floor((ms % 1000) / 10); // 百分之一秒（0-99）

    const parts = [];
    if (h > 0) parts.push(h.toString().padStart(2, "0"));
    parts.push(m.toString().padStart(2, "0"));
    parts.push(s.toString().padStart(2, "0"));

    return {
      main: parts.join(":"),
      cs: cs.toString().padStart(2, "0")
    };
  };

  const { main, cs } = formatTime(elapsed);

  // 主題樣式配置
  const themes = {
    red: {
      accentText: "text-red-500",
      accentBg: "bg-red-500",
      shadow: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
    },
    blue: {
      accentText: "text-blue-500",
      accentBg: "bg-blue-500",
      shadow: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
    },
    emerald: {
      accentText: "text-emerald-500",
      accentBg: "bg-emerald-500",
      shadow: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
    }
  };

  // @ts-ignore
  const activeTheme = themes[themeColor] || themes.blue;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className="bg-slate-800 rounded-3xl p-6 sm:p-10 border border-white/5 flex flex-col justify-between relative overflow-hidden h-full"
    >
      {/* Container left border line */}
      <div className={`absolute top-0 left-0 w-1 h-full ${activeTheme.accentBg}`}></div>

      <div>
        <div className="text-xs sm:text-sm uppercase tracking-[0.1em] text-slate-400 mb-2 font-semibold">
          {label}
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-6 sm:mb-10 text-white uppercase tracking-tight">
          {title}
        </h2>
      </div>

      <div className={`font-mono text-center mb-6 sm:mb-10 ${activeTheme.accentText} ${activeTheme.shadow} tabular-nums flex items-baseline justify-center tracking-tighter`}>
        <span className="text-[4rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] font-bold leading-none">
          {main}
        </span>
        <span className="text-2xl sm:text-3xl md:text-5xl font-medium ml-1 sm:ml-2">
          .{cs}
        </span>
      </div>

      {/* 控制面板 */}
      <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-auto">
        <motion.button
          whileHover={{ opacity: 0.9 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleStart}
          className={`h-14 sm:h-16 rounded-2xl border-none font-semibold cursor-pointer flex items-center justify-center transition-opacity text-white text-base sm:text-lg ${activeTheme.accentBg}`}
          aria-label="Start Timer"
        >
          <Play className="w-5 h-5 mr-2" fill="currentColor" /> START
        </motion.button>
        <motion.button
          whileHover={{ opacity: 0.9 }}
          whileTap={{ scale: 0.98 }}
          onClick={handlePause}
          className="h-14 sm:h-16 rounded-2xl border-none font-semibold cursor-pointer flex items-center justify-center transition-opacity text-white text-base sm:text-lg bg-slate-700 hover:bg-slate-600"
          aria-label="Pause Timer"
        >
          <Pause className="w-5 h-5 mr-2" fill="currentColor" /> PAUSE
        </motion.button>
        <motion.button
          whileHover={{ backgroundColor: "rgba(30, 41, 59, 1)" }}
          whileTap={{ scale: 0.98 }}
          onClick={handleReset}
          className="col-span-2 bg-transparent border border-slate-600 text-slate-400 h-10 sm:h-12 rounded-xl text-xs sm:text-sm font-semibold transition-colors mt-1 sm:mt-2 flex items-center justify-center group"
          aria-label="Reset Timer"
        >
          <RotateCcw className="w-4 h-4 mr-2 group-hover:rotate-180 transition-transform duration-500" /> RESET SYSTEM
        </motion.button>
      </div>
    </motion.div>
  );
}
