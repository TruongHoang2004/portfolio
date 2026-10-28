"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="p-3 rounded-full border border-border bg-background text-muted-foreground hover:text-accent transition-colors focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      aria-label="Toggle light and dark theme"
    >
      <Sun className="h-5 w-5 hidden dark:block" aria-hidden="true" />
      <Moon className="h-5 w-5 block dark:hidden" aria-hidden="true" />
    </button>
  );
}
