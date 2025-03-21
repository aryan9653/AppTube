"use client"; // Ensure this is at the top

import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";
import "@/app/globals.css";


export default function RootLayout({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <html lang="en">
          <body>{children}</body>
        </html>
      </ThemeProvider>
    </AuthProvider>
  );
}
