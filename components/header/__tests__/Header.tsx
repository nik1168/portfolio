import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import Header from '../Header';

describe('Header', () => {
  it('renders component', () => {
    const component = render(<Header title={''} />);

    expect(component).toBeTruthy();
  });
});
