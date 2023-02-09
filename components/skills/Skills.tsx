import {motion} from 'framer-motion';
import React, {FC} from 'react';

import Skill from '../skill/Skill';
import {skillsData} from './__data__/data';

const Skills: FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute hidden sm:flex md:flex lg:flex xl:flex top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute hidden sm:flex md:flex lg:flex xl:flex top-24 top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for a current proficiency{' '}
      </h3>
      <div className="grid grid-cols-4 xs:grid-cols-4 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
        {skillsData.map((skill, idx) => {
          return <Skill key={`skill-${skill.name}-${idx}`} {...skill} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
