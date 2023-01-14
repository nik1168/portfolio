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
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
