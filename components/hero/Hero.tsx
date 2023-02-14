import Image from 'next/image';
import Link from 'next/link';
import React, {FC} from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';

import BackgroundCircles from '../background-circles/BackgroundCircles';
import {HeroProps} from './typings';

const Hero: FC<HeroProps> = (): JSX.Element => {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Niklaus Geisser",
      'Guy-who-loves-coffee.tsx',
      'And build amazing projects',
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full mx-auto h-32 w-32 mx-auto object-cover"
        src={'/profile.jpg'}
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] p-x-4">
          Software Engineer
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>
          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
