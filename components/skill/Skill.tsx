import {motion} from 'framer-motion';
import React, {FC} from 'react';

import {SkillProps} from './typings';

const Skill: FC<SkillProps> = ({percentage, image}): JSX.Element => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        className="rounded-full border-gray-500 object-cover w-14 h-14 xs:h-20 xs:w-20 sm:w-24 sm:h-24 xl:w-32 xl:h-32 md:w-28 md:h-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        src={`/${image}`}
        alt=""
      />

      <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-14 h-14 xs:h-20 xs:w-20 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {percentage}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
