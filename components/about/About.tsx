import {motion} from 'framer-motion';
import React, {FC} from 'react';
const About: FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute hidden sm:flex md:flex lg:flex xl:flex top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>
      <motion.img
        initial={{x: -200, opacity: 0}}
        whileInView={{x: 0, opacity: 1}}
        transition={{duration: 1.2}}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
        src={'/IMG_3625.png'}
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">little</span>{' '}
          background
        </h4>
        <p className="text-md text-justify">
          Hi there! 💯 I&apos;m Niklaus. I&apos;m a Fullstack software Engineer
          with 7 years of experience. I&apos;ve worked with both startups and
          large corporations to help build & scale their companies. I really
          love coding and building amazing projects. I&apos;m grateful to say
          that I found what I really love which is Software Engineering,
          I&apos;m really passionate about what I do so you can count on me that
          I will always bring my &quot;A&quot; game. Let&apos;s build something
          Amazing together!
        </p>
      </div>
    </motion.div>
  );
};

export default About;
