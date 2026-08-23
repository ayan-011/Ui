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

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const links = [
    { id: "home", label: "Home" },
    { id: "content", label: "Content" },
    { id: "point1", label: "Point 1" },
    { id: "point2", label: "Point 2" },
    { id: "point3", label: "Point 3" },
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
          ${isOpen ? "md:w-60 md:border-r" : "md:w-0 md:border-r-0"}
        `}
      >
        <div className="h-20 text-black flex items-center justify-center text-2xl">
          {/* Undo! */}
        </div>

        {isOpen && (
          <nav className="relative flex flex-col gap-2 items-center py-20 border-b border-t border-black/10">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 text-black text-xl"
            >
              ←
            </button>

            {links.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() =>
                  window.innerWidth < 768 && setIsOpen(false)
                }
                className={
                  activeSection === link.id
                    ? "text-black/40"
                    : "text-black"
                }
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}

        <div className="last text-black flex justify-center py-10">
          {/* Download & <br /> Contact */}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;