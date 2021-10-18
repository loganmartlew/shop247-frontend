import { cleanup, render, screen } from '@testing-library/react';
import SocialLinks from './index';

describe('test SocialLinks component', () => {
  test('should render without throwing an error', () => {
    render(<SocialLinks />);
    cleanup();
  });

  afterEach(cleanup);

  test('renders facebook link if present on user object', () => {
    const user = {
      social: { facebook: 'any' },
    };

    render(<SocialLinks user={user} />);

    const element = screen.getByTestId('facebook');

    expect(element).toBeInTheDocument();
  });

  test('renders instagram link if present on user object', () => {
    const user = {
      social: { instagram: 'any' },
    };

    render(<SocialLinks user={user} />);

    const element = screen.getByTestId('instagram');

    expect(element).toBeInTheDocument();
  });

  test('does not render facebook link if not present on user object', () => {
    const user = {
      social: {},
    };

    render(<SocialLinks user={user} />);

    expect(() => screen.getByTestId('facebook')).toThrow();
  });

  test('does not render instagram link if not present on user object', () => {
    const user = {
      social: {},
    };

    render(<SocialLinks user={user} />);

    expect(() => screen.getByTestId('instagram')).toThrow();
  });
});
