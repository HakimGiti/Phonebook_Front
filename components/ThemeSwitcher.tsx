import { useConfig } from "@utils/hooks/config.provider";
import { useEffect, useMemo, useState } from "react";

type THEME = "dark" | "light";

export default function ThemeSwitcher() {
  const { configs, setConfig } = useConfig();
  const [theme, setTheme] = useState("light");
  const _theme = useMemo(() => configs?.theme ?? "dark", [configs]);

  // On mount, check for the user's theme preference in localStorage or system setting
  useEffect(() => {
    if (_theme === "dark") {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // Toggles between light and dark modes
  const toggleTheme = () => {
    if (theme == "light") {
      document.documentElement.classList.add("dark");
      setConfig("theme", "dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setConfig("theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full text-center w-full"
    >
      {theme === "light" ? "🌙 حالت تیره" : "☀️ حالت روشن"}
    </button>
  );
}
