import {EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/solid';
import {motion} from 'framer-motion';
import React, {FC} from 'react';
const ContactMe: FC = (): JSX.Element => {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="flex flex-col space-y-10 ">
        <h4 className="text-4xl font-semibold text-center">
          I have got just what you need!{' '}
          <span className="decoration-[#F7AB0A]/50 underline">
            Let&apos;s talk
          </span>
        </h4>
        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">+591 72095530</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">ngeisser32@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <p className="text-2xl">La Paz, Bolivia</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactMe;
