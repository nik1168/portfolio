import '@testing-library/jest-dom/extend-expect';

import {render, screen} from '@testing-library/react';

import Home from '../pages';

describe('Home', () => {
  it('Check for Getting Started Text', () => {
    render(<Home />);

    expect(screen.getByText('get in touch')).toBeInTheDocument();
  });
});
