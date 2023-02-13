import {motion} from 'framer-motion';
import React, {FC} from 'react';

import Skill from '../skill/Skill';
import {skillsData} from './__data__/data';

const Skills: FC = (): JSX.Element => {
  return (
    <motion.div className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
      <h3 className="absolute hidden sm:flex md:flex lg:flex xl:flex top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Skills
      </h3>
      <h3 className="absolute hidden sm:flex md:flex lg:flex xl:flex top-24 top-36 uppercase tracking-[3px] text-gray-500 text-sm">
        Hover over a skill for a current proficiency{' '}
      </h3>
      <div className="grid grid-cols-5 gap-5">
        {skillsData.map((skill, idx) => {
          return <Skill key={`skill-${skill.name}-${idx}`} {...skill} />;
        })}
      </div>
    </motion.div>
  );
};

export default Skills;
