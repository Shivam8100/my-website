"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

interface MobileNavProps {
  onNavigate: (section: string) => void;
  activeSection: string;
}

export default function MobileNav({ onNavigate, activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);

  const sections = ["home", "about", "skills", "projects", "contact"];

  const handleNavigate = (section: string) => {
    onNavigate(section);
    setIsOpen(false);
  };

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
      >
        {isOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-0 right-0 bg-gray-900 border-b border-gray-700 shadow-lg"
          >
            <div className="px-4 py-2 space-y-1">
              {sections.map((section) => (
                <button
                  key={section}
                  onClick={() => handleNavigate(section)}
                  className={`w-full text-left px-4 py-3 rounded-lg capitalize transition-colors ${
                    activeSection === section
                      ? "bg-blue-900 text-blue-400"
                      : "text-gray-300 hover:bg-gray-800"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
