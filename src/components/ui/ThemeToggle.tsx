"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import { signal } from "@preact/signals";
import { cn } from "@/lib/utils";

export const signalTheme = signal("light");
export function ThemeToggle({ className }: { className?: string | undefined }) {
  const { setTheme } = useTheme();

  const setThemeHelper = (theme: "dark" | "light" | string) => {
    setTheme(theme);
    signalTheme.value = theme;
  };

  const changeTheme = () => {
    const savedTheme = window.localStorage.getItem("theme");
    setThemeHelper(savedTheme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    if (savedTheme) {
      setThemeHelper(savedTheme);
    } else {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setThemeHelper(isDark ? "dark" : "light");
    }
  });

  return (
    <button
      aria-label="Toggle Dark Mode"
      role="switch"
      aria-checked={
        window.localStorage.getItem("theme") == "dark" ? "true" : "false"
      }
      className={cn(
        "border-input hover:text-accent-foreground h-10 border bg-background px-4 hover:bg-accent",
        className
      )}
      onClick={() => changeTheme()}>
      <Sun className="dark:hidden" />
      <Moon className="hidden dark:block" />
    </button>
  );
}
