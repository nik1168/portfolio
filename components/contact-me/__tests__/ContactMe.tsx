import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import ContactMe from '../ContactMe';

describe('ContactMe', () => {
  it('renders component', () => {
    const component = render(<ContactMe />);

    expect(component).toBeTruthy();
  });
});
