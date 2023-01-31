import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import Skill from '../Skill';

describe('Skill', () => {
  it('renders component', () => {
    const component = render(<Skill />);

    expect(component).toBeTruthy();
  });
});
