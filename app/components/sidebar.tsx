"use client";

import { useEffect, useState } from "react";

type SidebarProps = {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
};

const Sidebar = ({ isOpen, setIsOpen }: SidebarProps) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");

  const handleScroll = () => {
    let currentSection = "home";
    const offset = 150;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();

      if (rect.top <= offset) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  const links = [
    { id: "home", number: "01", label: "Home" },
    { id: "content",number: "02", label: "Content" },
    { id: "point1", number: "03",label: "Point 1" },
    { id: "point2", number: "04",label: "Point 2" },
    { id: "point3", number: "05",label: "Point 3" },
    { id: "point4", number: "06",label: "Point 4" }, 
  ];

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          h-screen font-rethink bg-white transition-all duration-300 z-50
          fixed top-0 left-0 w-60 border-r border-black/10
          ${isOpen ? "translate-x-0" : "-translate-x-full"}

          md:sticky md:translate-x-0
          ${isOpen ? "md:w-63 md:border-r" : "md:w-0 md:border-r-0"}
        `}
      >
         

        {isOpen && (
          <nav className="relative flex flex-col     py-5    ">

            <div className="   flex  py-5 items-center border-b border-black/10 ">

            <span className="logo    text-black font-semibold text-2xl  px-6 ">
                Undo!
            </span>

            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-10 right-5 text-black text-xl  cursor-pointer"
            >
              ←
            </button>
            </div>

    <div className="middle bg-red-  flex flex-col px-6 py-10 gap-1">

            {links.map((link) => (
   <a
    key={link.id}
    href={`#${link.id}`}
    onClick={() =>
      window.innerWidth < 768 && setIsOpen(false)
    }
    className={`flex flex-col group ${
      activeSection === link.id
        ? "text-orange-500/60"
        : "text-black"
    }`}
  >
    <span>{link.label}</span>
    {/* group-hover:text-orange-500 text-[12px] font-semibold */}
    <span 
    className={`group-hover:text-orange-500 text-[12px] font-semibold ${
      activeSection === link.id
        ? "text-black/60"
        : "text-black/60"
    }`}>{link.number}</span>
  </a>
))}
    </div>
            
        <div className="last text-black flex   border-t-1 border-black/10 w-full p-6">
            Download & <br /> Contact 
        </div>
          </nav>
        )}

      </aside>
    </>
  );
};

export default Sidebar;