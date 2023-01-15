import {motion} from 'framer-motion';
import React, {FC} from 'react';
const Projects: FC = (): JSX.Element => {
  const projects = [1, 2, 3, 4, 5];

  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
        {/*<motion.div></motion.div>*/}
        {projects.map((item, idx) => (
          <div
            key={`project-key-${idx}`}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p44 h-screen">
            <motion.img
              initial={{y: -300, opacity: 0}}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              src="https://github.com/nik1168/tinder-clone/raw/develop/demo/main_view_p_1.png"
              alt=""
              className="h-64"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]">
                  Case Study:
                </span>{' '}
                Tinder Clone
              </h4>
              <p className="text-lg text-center md:text-left">
                Tinder clone with the following features
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
