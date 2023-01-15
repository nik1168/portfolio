import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import Skills from '../Skills';

describe('Skills', () => {
  it('renders component', () => {
    const component = render(<Skills />);

    expect(component).toBeTruthy();
  });
});
