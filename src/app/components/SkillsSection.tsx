"use client";

import { motion } from "framer-motion";
import { 
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiStrapi,
  SiTailwindcss,
  SiAndroid,
  SiRedux,
  SiJenkins,
  SiJira,
  SiConfluence,
  SiGit
} from "react-icons/si";
import { FiMonitor } from "react-icons/fi";
import { SKILLS_SECTION } from "../../constants/portfolio";

// Icon mapping
const iconMap = {
  React: SiReact,
  Nextjs: SiNextdotjs,
  TypeScript: SiTypescript,
  Strapi: SiStrapi,
  Tailwind: SiTailwindcss,
  Mobile: SiAndroid,
  Redux: SiRedux,
  Playwright: FiMonitor,
  Jenkins: SiJenkins,
  Jira: SiJira,
  Confluence: SiConfluence,
  Git: SiGit,
};

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800 scroll-mt-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            {SKILLS_SECTION.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {SKILLS_SECTION.skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <IconComponent
                  size={40}
                  className={`mx-auto mb-3 ${skill.color}`}
                />
                <h3 className="font-semibold text-white">
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
