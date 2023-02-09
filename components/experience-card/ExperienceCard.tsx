import {motion} from 'framer-motion';
import Link from 'next/link';
import React, {FC} from 'react';

import {ExperienceCardProps} from './typings';

const ExperienceCard: FC<ExperienceCardProps> = ({
  logo,
  title,
  company,
  technologies,
  summaryPoints,
  date,
  webpage,
}): JSX.Element => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-start md:snap-center sm:snap-center lg:snap-center xl:snap-center p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.2}}
        whileInView={{opacity: 1, y: 0}}
        viewport={{once: true}}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={`/${logo}`}
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{title}</h4>
        <p className="font-bold text-2xl mt-1">
          {company} -{' '}
          <Link href={webpage} passHref>
            {webpage}
          </Link>
        </p>
        <div className="flex space-x-2 my-2">
          {technologies.map((item, idx) => {
            return (
              <img
                key={`tech-${idx}`}
                className="h-10 w-10 rounded-full"
                src={item}
                alt=""
              />
            );
          })}
        </div>
        <p className="uppercase py-5 text-gray-300">{date}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {summaryPoints.map((item, idx) => {
            return <li key={`summary-point-${idx}`}>{item}</li>;
          })}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
