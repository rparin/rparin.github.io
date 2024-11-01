"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string | undefined }) {
  const { setTheme, theme } = useTheme();
  const [checked, setCheck] = useState(false);

  const changeTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
    setCheck(!checked);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={`Toggle Theme`}
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
