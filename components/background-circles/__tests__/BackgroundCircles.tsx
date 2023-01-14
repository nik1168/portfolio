import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import BackgroundCircles from '../BackgroundCircles';

describe('BackgroundCircles', () => {
  it('renders component', () => {
    const component = render(<BackgroundCircles />);

    expect(component).toBeTruthy();
  });
});
