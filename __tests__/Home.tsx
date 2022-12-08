import '@testing-library/jest-dom/extend-expect';

import {render, screen} from '@testing-library/react';

import Home from '../pages';

describe('Home', () => {
  it('Check for Getting Started Text', () => {
    const {getByText} = render(<Home />);

    expect(getByText('Get started by editing')).toBeInTheDocument();
  });

  it('Renders appropriately', () => {
    render(<Home />);
    expect(
      screen.getByRole('heading', {name: 'Welcome to Next.js!'}),
    ).toBeInTheDocument();
  });
});
