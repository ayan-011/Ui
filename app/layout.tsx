
"use client";
import { useState } from "react"; 
 
import { Geist, Geist_Mono, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/sidebar";

import localFont from "next/font/local";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rethink = localFont({
   src: "./fonts/Rethink/rethink.ttf",
  variable: "--font-rethink",
});

 

export default function LayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <html lang="en">
    <body>
    <div 
    className={`${geistSans.variable} ${geistMono.variable}  ${rethink.variable} h-full antialiased flex min-h-screen`}>

        
    
      <Sidebar
        isOpen={isSidebarOpen}
        setIsOpen={setIsSidebarOpen}
      />

      <main className="flex-1 relative ">
        {!isSidebarOpen && (
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="fixed p-13 z-50 text-xl text-black "
          >
            <div className="menu flex flex-col gap-[2px]  cursor-pointer">
              <div className="menuline w-[17px] h-[2px] bg-black/40 rounded-full   "></div>
            <div className="menuline w-[17px] h-[2px] bg-black/40 rounded-full   "></div>
            <div className="menuline w-[17px] h-[2px] bg-black/40 rounded-full "></div>
            </div>
            
          </button>
        )}

          
     <div className="flex-1 [container-type:inline-size] [container-name:page]">
    {children}
  </div>
   
      </main>
    </div>
        </body>
        </html>
  );
} 

