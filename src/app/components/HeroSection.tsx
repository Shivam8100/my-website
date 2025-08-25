"use client";

import { motion } from "framer-motion";
import { FiDownload, FiChevronDown } from "react-icons/fi";
import { HERO_SECTION, RESUME_URL } from "../../constants/portfolio";

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ onScrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="pt-20 pb-16 mt-8 px-4 sm:px-6 lg:px-8 scroll-mt-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <span className="text-4xl font-bold text-white">{HERO_SECTION.initials}</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Hi, I&apos;m{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {HERO_SECTION.name}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {HERO_SECTION.title}
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              {HERO_SECTION.description}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button 
              onClick={() => onScrollToSection("projects")}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              {HERO_SECTION.primaryButton}
            </button>
            <button 
              onClick={() => window.open(RESUME_URL, '_blank', 'noopener,noreferrer')}
              className="px-8 py-3 border-2 border-gray-600 text-gray-300 rounded-full font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              <FiDownload className="inline mr-2" size={20} />
              {HERO_SECTION.secondaryButton}
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16"
          >
            <button
              onClick={() => onScrollToSection("about")}
              className="animate-bounce p-2 rounded-full bg-gray-800 shadow-lg hover:shadow-xl transition-shadow"
            >
              <FiChevronDown
                size={24}
                className="text-gray-300"
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
