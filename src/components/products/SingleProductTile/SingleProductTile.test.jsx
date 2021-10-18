import { cleanup, render, screen } from '@testing-library/react';
import TestWrapper from '../../TestWrapper';
import SingleProductTile from './index';

describe(`test SingleProductTile component`, () => {
  const product = {
    _id: '123abc',
    name: 'Test product',
    description: 'Product description',
    price: 2000,
    images: [{ url: 'https://testing-library.com/img/octopus-64x64.png' }],
  };

  test(`should render without throwing an error`, () => {
    render(
      <TestWrapper>
        <SingleProductTile product={product} />
      </TestWrapper>
    );
    cleanup();
  });

  beforeEach(() => {
    render(
      <TestWrapper>
        <SingleProductTile product={product} />
      </TestWrapper>
    );
  });

  afterEach(cleanup);

  test(`should have title 'Test product'`, () => {
    const heading = screen.getByRole('heading', { name: /test product/i });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/test product/i);
  });

  test(`description should match props`, () => {
    const element = screen.getByText(product.description);

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent(product.description);
  });

  test(`price should be correctly formatted`, () => {
    const element = screen.getByText('$20.00');

    expect(element).toBeInTheDocument();
    expect(element).toHaveTextContent('$20.00');
  });

  test(`add to cart button hould be enabled`, () => {
    const button = screen.getByRole('button', { name: /add to cart/i });

    expect(button).toBeInTheDocument();
    expect(button).toBeEnabled();
  });
});
