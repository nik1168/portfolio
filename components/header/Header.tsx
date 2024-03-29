import {motion} from 'framer-motion';
import Link from 'next/link';
import React, {FC} from 'react';
import {SocialIcon} from 'react-social-icons';

import {HeaderProps} from './typings';

const Header: FC<HeaderProps> = (): JSX.Element => {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center ">
      <motion.div
        initial={{x: -500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className="flex flex-row items-center">
        <SocialIcon
          url="https://twitter.com/nik1168"
          fgColor="gray"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://www.youtube.com/@NiklausGeisser"
          fgColor="gray"
          bgColor="transparent"
        />
      </motion.div>

      <motion.div
        initial={{x: 500, opacity: 0, scale: 0.5}}
        animate={{x: 0, opacity: 1, scale: 1}}
        transition={{duration: 1.5}}
        className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <Link href="#contact">
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            get in touch
          </p>
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
