import Image from 'next/image';
import React, {FC} from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';

import BackgroundCircles from '../background-circles/BackgroundCircles';
import {HeroProps} from './typings';

const Hero: FC<HeroProps> = (): JSX.Element => {
  const [text] = useTypewriter({
    words: [
      "Hi, The Name's Niklaus Geisser",
      'Guy-who-loves-coffee.tsx',
      '<ButLoveaToCodeMore />',
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
      <div>
        <h1>
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>
      </div>
    </div>
  );
};

export default Hero;
