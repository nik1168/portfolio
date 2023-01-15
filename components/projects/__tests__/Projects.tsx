import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import Projects from '../Projects';

describe('Projects', () => {
  it('renders component', () => {
    const component = render(<Projects />);

    expect(component).toBeTruthy();
  });
});
