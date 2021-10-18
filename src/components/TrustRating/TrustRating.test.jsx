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

  afterEach(cleanup);

  test('clicking a star will change the rating', () => {
    let rating = 0;
    const setRating = number => {
      rating = number;
    };

    render(
      <TestWrapper>
        <TrustRating rating={rating} setRating={setRating} />
      </TestWrapper>
    );

    const star = screen.getByTestId('star-1');
    userEvent.click(star);

    expect(rating).toBe(1);
  });
});
