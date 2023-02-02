import '@testing-library/jest-dom';

import {render} from '@testing-library/react';
import React from 'react';

import ExperienceCard from '../ExperienceCard';

describe('Experience Cards', () => {
  it('renders component', () => {
    const component = render(
      <ExperienceCard
        webpage={''}
        company={''}
        logo={''}
        date={''}
        summaryPoints={[]}
        technologies={[]}
        title={''}
      />,
    );

    expect(component).toBeTruthy();
  });
});
