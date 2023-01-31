import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import About from '../About';

describe('About', () => {
  it('renders component', () => {
    const component = render(<About />);

    expect(component).toBeTruthy();
  });
});
