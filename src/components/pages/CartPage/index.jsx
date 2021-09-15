import React from 'react';
import { CartSection } from './CartPageStyles';
import { List } from '../../products/ProductList/ProductListStyles';
import SingleProductTile from '../../products/SingleProductTile';

const CartPage = () => {
  const isEmpty = true;

  const EmptyCart = () => <h3>Your cart is currently empty!</h3>;

  const FilledCart = ({ products }) => {
    <>
      <List>
        {products &&
          products.map(product => (
            <SingleProductTile key={product._id} product={product} />
          ))}
      </List>
    </>;
  };

  return (
    <>
      <CartSection>
        <h1>Your Cart</h1>

        {isEmpty ? <EmptyCart /> : <FilledCart />}
      </CartSection>
    </>
  );
};

export default CartPage;
