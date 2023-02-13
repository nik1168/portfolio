import {motion} from 'framer-motion';
import Link from 'next/link';
import React, {FC} from 'react';

import {projects} from './__data__/data';
const Projects: FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute hidden sm:flex md:flex lg:flex xl:flex top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        {projects.map((item, idx) => (
          <div
            key={`project-key-${idx}`}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-6 items-center justify-center p-20 md:p44 h-screen">
            <motion.img
              initial={{y: -300, opacity: 0}}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              src={item.localImage ? `/${item.image}` : item.image}
              alt=""
              className="h-64"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Case Study:
                </span>{' '}
                {item.name}
              </h4>
              <p className="text-lg text-center md:text-left">
                {item.description}
              </p>
              <Link
                className="text-lg text-center md:text-left"
                href={item.demoUrl}>
                <span className="text-xl font-semibold underline decoration-[#F7AB0A]">
                  Demo:
                </span>{' '}
                {item.demoUrl}
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
