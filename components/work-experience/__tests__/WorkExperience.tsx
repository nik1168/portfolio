import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import WorkExperience from '../WorkExperience';

describe('WorkExperience', () => {
  it('renders component', () => {
    const component = render(<WorkExperience />);

    expect(component).toBeTruthy();
  });
});
