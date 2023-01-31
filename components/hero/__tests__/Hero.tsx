import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import Hero from '../Hero';

describe('Hero', () => {
  it('renders component', () => {
    const component = render(<Hero title={''} />);

    expect(component).toBeTruthy();
  });
});
