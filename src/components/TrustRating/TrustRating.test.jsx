import { cleanup, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TrustRating from './index';
import TestWrapper from '../TestWrapper';

describe('test TrustRating component', () => {
  test('Should render without throwing an error', () => {
    render(
      <TestWrapper>
        <TrustRating />
      </TestWrapper>
    );
    cleanup();
  });

  beforeEach(() => {
    render(
      <TestWrapper>
        <TrustRating />
      </TestWrapper>
    );
  });

  afterEach(cleanup);

  test('hovering over a star will change its hover state', () => {
    const star = screen.getByTestId('star-1');
    userEvent.hover(star);

    expect(star).toHaveStyle('color: rgb(255, 255, 0)');
  });

  test('clicking a star will change the rating', () => {});
});
