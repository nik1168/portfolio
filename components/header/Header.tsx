import React, {FC} from 'react';
import {SocialIcon} from 'react-social-icons';

import {HeaderProps} from './typings';

const Header: FC<HeaderProps> = (): JSX.Element => {
  return (
    <header>
      <div>
        <SocialIcon url="https://twitter.com/jaketrent" />
      </div>
    </header>
  );
};

export default Header;
