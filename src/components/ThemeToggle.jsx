import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"; 
import {cn} from "@/lib/utils";
import { useTheme } from "@/context/ThemeContext"; 

export const ThemeToggle = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    /*
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } 
    }, []);

     const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    }; */

    return (
        <button
        onClick={toggleTheme}
        className={cn(
            "fixed max-sm:hidden bottom-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}
        >
            {isDarkMode ? (
                <Sun className="text-yellow-400" size={24} />
            ) : (
                <Moon className="text-gray-800" size={24} />
            )}
        </button>
    );
};