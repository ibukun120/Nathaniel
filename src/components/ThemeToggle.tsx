"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { applyTheme, getPreferredTheme, toggleTheme, type Theme } from "@/lib/theme";

type Props = {
  className?: string;
  /** Inverse colors for the dark mobile menu. */
  tone?: "nav" | "inverse";
};

export default function ThemeToggle({ className = "", tone = "nav" }: Props) {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const initial = getPreferredTheme();
    applyTheme(initial, false);
    setTheme(initial);
    setReady(true);

    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onSystem = () => {
      if (window.localStorage.getItem("theme")) return;
      const next = media.matches ? "dark" : "light";
      applyTheme(next, false);
      setTheme(next);
    };
    media.addEventListener("change", onSystem);
    return () => media.removeEventListener("change", onSystem);
  }, []);

  return (
    <button
      type="button"
      onClick={() => setTheme((current) => toggleTheme(current))}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Light mode" : "Dark mode"}
      className={`relative flex size-10 items-center justify-center rounded-full border transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:scale-95 ${
        tone === "inverse"
          ? "border-white/15 text-white hover:border-gold hover:text-gold"
          : "border-fg/15 text-fg hover:border-fg hover:bg-fg hover:text-paper"
      } ${className}`}
    >
      <span className="relative size-[18px]">
        <Sun
          aria-hidden
          className={`absolute inset-0 size-[18px] transition-all duration-300 ease-cinematic ${
            ready && theme === "dark" ? "scale-100 rotate-0 opacity-100" : "scale-50 -rotate-90 opacity-0"
          }`}
        />
        <Moon
          aria-hidden
          className={`absolute inset-0 size-[18px] transition-all duration-300 ease-cinematic ${
            !ready || theme === "light" ? "scale-100 rotate-0 opacity-100" : "scale-50 rotate-90 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
