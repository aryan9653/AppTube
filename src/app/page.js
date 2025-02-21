"use client";

import { useAuth } from "@/context/AuthContext";
import Navbar from "@/components/Navbar";
import VideoUpload from "@/components/VideoUpload";
import VideoList from "@/components/VideoList";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const { user, login, logout } = useAuth();

  const categories = [
    { name: "Trending", path: "/trending" },
    { name: "Subscriptions", path: "/subscriptions" },
    { name: "New Releases", path: "/new-releases" },
    { name: "Music", path: "/music" },
    { name: "Gaming", path: "/gaming" },
    { name: "Movies", path: "/movies" },
    { name: "News", path: "/news" },
  ];

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-all duration-300`}>
      <Navbar />

      <div className="absolute top-4 right-6">
        <button 
          onClick={toggleTheme} 
          className="p-2 rounded-full bg-gray-300 dark:bg-gray-700 transition-all duration-300 hover:scale-110"
        >
          {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-900" />}
        </button>
      </div>

      <main className="flex flex-col items-center justify-center min-h-screen text-center p-4 sm:p-6">
        
        <h1 className="text-5xl sm:text-6xl font-extrabold mb-2 sm:mb-4 
                      text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500
                      transition-transform duration-300 hover:scale-105 hover:drop-shadow-lg"
        >
          AppTube
        </h1>
        <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-gray-500 dark:text-gray-300">
          Welcome to AppTube
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-6 w-full max-w-2xl">
          {categories.map((category, index) => (
            <Link key={index} href={category.path}>
              <button 
                className="px-4 sm:px-6 py-2 sm:py-3 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-md 
                           transition transform hover:scale-110 hover:shadow-lg text-sm sm:text-base
                           relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r 
                           before:from-pink-500 before:via-purple-500 before:to-blue-500 before:opacity-0 
                           before:transition-opacity before:duration-300 hover:before:opacity-100"
              >
                <span className="relative z-10">{category.name}</span>
              </button>
            </Link>
          ))}
        </div>

        {user ? (
          <>
            <div className="mb-4">
              <p>Welcome, {user.displayName}!</p>
              <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded text-sm sm:text-base">
                Logout
              </button>
            </div>
            <VideoUpload />
            <VideoList />
          </>
        ) : (
          <div className="flex flex-col items-center">
            <Image src="/empty-state.svg" alt="No Videos Yet" width={250} height={150} className="mb-4" />
            <h2 className="text-lg sm:text-xl font-semibold">No videos available</h2>
            <p className="text-gray-500 text-sm sm:text-base">Sign in to upload or watch videos.</p>

            <button 
              onClick={login} 
              className="mt-4 px-5 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white rounded text-sm sm:text-lg 
                         transition transform hover:scale-110 hover:shadow-lg 
                         relative overflow-hidden before:absolute before:inset-0 
                         before:bg-gradient-to-r before:from-pink-500 before:via-purple-500 
                         before:to-blue-500 before:opacity-0 
                         before:transition-opacity before:duration-300 hover:before:opacity-100"
            >
              <span className="relative z-10">Login with Google</span>
            </button>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center p-4 mt-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} AppTube. All rights reserved.</p>
        <p className="text-xs">Your one-stop platform for trending videos, music, movies, and more.</p>
      </footer>
    </div>
  );
}
