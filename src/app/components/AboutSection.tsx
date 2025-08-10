"use client";

import { motion } from "framer-motion";
import { FiZap } from "react-icons/fi";
import { ABOUT_SECTION } from "../../constants/portfolio";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">{ABOUT_SECTION.title}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">
              {ABOUT_SECTION.subtitle}
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {ABOUT_SECTION.description}
            </p>
            <p className="text-gray-300 mb-8 leading-relaxed">
              {ABOUT_SECTION.additionalDescription}
            </p>

            <div className="grid grid-cols-2 gap-4">
              {ABOUT_SECTION.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gray-800 rounded-lg">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.number}</div>
                  <div className="text-sm text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <FiZap size={64} className="mx-auto mb-4" />
                <h4 className="text-xl font-semibold">
                  {ABOUT_SECTION.card.title}
                </h4>
                <p className="text-blue-100">
                  {ABOUT_SECTION.card.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
