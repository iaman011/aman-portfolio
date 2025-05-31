import React from "react";
import { experiences, skills } from "../constants";
import { motion } from "framer-motion";

// Skill Icon Component
export const SkillIcon = ({ icon, name }) => (
  <div className="flex flex-col items-center">
    <span className="text-white text-[30px] hover:text-teal-200">
      {React.createElement(icon)}
    </span>
    <p className="font-poppins text-dimWhite text-[12px] mt-2">{name}</p>
  </div>
);

// Skill Card Component
const SkillCard = ({ title, items }) => (
  <motion.div
    whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
    className="mt-4 mb-6 border-l border-gray-200 dark:border-gray-700 mx-4"
  >
    <div className="relative w-3 h-3 bg-gray-200 rounded-full top-5 right-[6.2px] border dark:border-gray-900 dark:bg-gray-700"></div>
    <div className="flex flex-row items-center mb-6 ml-6">
      <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px]">
        {title}
      </h4>
    </div>
    <div className="grid grid-cols-3 lg:grid-cols-5 gap-6 ml-8">
      {items.map((item) => (
        <SkillIcon key={item.id} {...item} />
      ))}
    </div>
  </motion.div>
);

// Experience Content Item
const Content = ({ text, link }) => (
  <p className="font-poppins font-normal text-[14px] text-dimWhite mt-2">
    {text}
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-teal-200 underline ml-2"
      >
        {link}
      </a>
    )}
  </p>
);

// Experience Card Component
const ExperienceCard = ({ logo, organisation, positions }) => (
  <motion.div
    whileInView={{ y: [-20, 0], opacity: [0, 1] }}
    transition={{ duration: 1 }}
    className="mb-8"
  >
    <div className="flex flex-row items-center mb-6">
      <img
        src={logo}
        alt={organisation}
        className="w-[52px] h-[52px] rounded-full z-[2]"
      />
      <h4 className="font-poppins font-semibold text-[20px] text-gradient leading-[32px] ml-2">
        {organisation}
      </h4>
    </div>
    <ol className="relative border-l border-gray-200 dark:border-gray-700 ml-6">
      {positions.map((position, index) => (
        <li
          key={index}
          className={`${index === positions.length - 1 ? "mb-0" : "mb-4"} ml-4`}
        >
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {position.title}
          </h3>
          <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            {position.duration}
          </time>
          {position.content.map((info, i) => (
            <Content key={i} {...info} />
          ))}
        </li>
      ))}
    </ol>
  </motion.div>
);

// Final Skills & Experience Section
const SkillsAndExperience = () => (
  <section id="skills" className="mb-12">
    <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px] mb-6">
      {/* Skills & Experience */}
    </h1>

    {/* Skills Section */}
    <div className="mb-12">
      <h1 className="flex-1 font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Skills
      </h1>
      {skills.map((skill, index) => (
        <SkillCard key={index} {...skill} />
      ))}
    </div>

    {/* Experience Section */}
    <div>
      <h2 className="font-poppins text-[28px] text-white mb-6">
        {/* Experience */}

      </h2>
      {experiences.map((exp, index) => (
        <ExperienceCard key={index} {...exp} />
      ))}
    </div>
  </section>
);

export default SkillsAndExperience;
