import {render, screen} from '@testing-library/react';
import {App} from './app';

describe('<App />', () => {
  it('renders headline', () => {
    render(<App />);
    const heading = screen.getByRole('heading', {level: 1});
    expect(heading).toHaveTextContent('Seed');
  });
});
