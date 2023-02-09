import {motion} from 'framer-motion';
import React, {FC} from 'react';

import ExperienceCard from '../experience-card/ExperienceCard';
const WorkExperience: FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute hidden sm:flex md:flex lg:flex xl:flex  top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
        <ExperienceCard
          title={'Software Engineer II'}
          date={'2020/10-present'}
          company={'Arctic Wolf'}
          logo={'aw-logomark.png'}
          technologies={[
            'react-logo.png',
            'spring.png',
            'typecript.png',
            'java-logo.png',
            'aws-logo.jpeg',
          ]}
          summaryPoints={[
            'Fullstack Engineer',
            'Develop applications that handle Cyber Security operations for several companies',
            'React, Spring, Cypress, Redux, JPA',
          ]}
          webpage={'https://arcticwolf.com/'}
        />
        <ExperienceCard
          title={'Software Engineer II'}
          date={'2020/10-present'}
          company={'AssureSoft'}
          logo={'assure-logo.png'}
          technologies={[
            'react-logo.png',
            'angular.png',
            'node-logo.png',
            'spring.png',
            'typecript.png',
            'java-logo.png',
            'aws-logo.jpeg',
          ]}
          summaryPoints={[
            'Fullstack Engineer',
            'Outsourcing Software Development Company',
            'React, Spring, NodeJs, Java, Typescript, Redux, JPA',
          ]}
          webpage={'https://www.assuresoft.com/'}
        />
        <ExperienceCard
          title={'Software Engineer II'}
          date={'2020/10-2021/09'}
          company={'Aaqua'}
          logo={'aaqua-logo.webp'}
          technologies={[
            'react-logo.png',
            'typecript.png',
            'node-logo.jpg',
            'graphql-logo.png',
            'aws-logo.jpeg',
          ]}
          summaryPoints={[
            'Fullstack Engineer',
            'Develop a Social Network Mobile Application',
            'React Native, React, CodeceptJs, NodeJs, GraphQL, Figma, Circle CI',
          ]}
          webpage={'https://about.aaqua.live/'}
        />
        <ExperienceCard
          title={'Software Engineer I'}
          date={'2020/08-2021/11'}
          company={'Sentiance'}
          logo={'sentiance-logo.png'}
          technologies={[
            'react-logo.png',
            'typecript.png',
            'node-logo.jpg',
            'graphql-logo.png',
            'aws-logo.jpeg',
          ]}
          summaryPoints={[
            'Fullstack Engineer',
            'React Native, React, CodeceptJs, NodeJs, GraphQL, Figma, Circle CI',
          ]}
          webpage={'https://sentiance.com/'}
        />
        <ExperienceCard
          title={'Software Engineer'}
          date={'2016/06-2018/09'}
          company={'Mojix'}
          logo={'mojix-logo.png'}
          technologies={[
            'angular.png',
            'spring.png',
            'java-logo.png',
            'node-logo.jpg',
          ]}
          summaryPoints={[
            'Fullstack Engineer',
            'Angular, Ionic, Spring, NodeJs',
          ]}
          webpage={'https://www.mojix.com/'}
        />
      </div>
    </motion.div>
  );
};

export default WorkExperience;
