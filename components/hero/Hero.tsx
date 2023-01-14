import React, {FC} from 'react';
import {Cursor, useTypewriter} from 'react-simple-typewriter';

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
    <div>
      <h1>
        <span>{text}</span>
        <Cursor cursorColor="#F7AB0A" />
      </h1>
    </div>
  );
};

export default Hero;
