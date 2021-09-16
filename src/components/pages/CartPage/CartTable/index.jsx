import { AiFillDelete } from 'react-icons/ai';
import formatDisplayPrice from '../../../../util/formatDisplayPrice';
import {
  Table,
  TableHeader,
  Row,
  Heading,
  TableBody,
  ProductField,
  DeleteBtn,
  TableFooter,
} from './CartTableStyles';

const CartTable = ({ cart, cartPrice, removeItem }) => {
  return (
    <Table>
      <TableHeader>
        <Row>
          <Heading>Name</Heading>
          <Heading>Product Price</Heading>
          <Heading>Quantity</Heading>
          <Heading>Item Price</Heading>
          <Heading>Seller Name</Heading>
          <Heading></Heading>
        </Row>
      </TableHeader>
      <TableBody>
        {cart.map(item => (
          <Row key={item.product._id}>
            <ProductField>{item.product.name}</ProductField>
            <ProductField>
              {formatDisplayPrice(item.product.price)}
            </ProductField>
            <ProductField>{item.quantity}</ProductField>
            <ProductField>
              {formatDisplayPrice(item.product.price * item.quantity)}
            </ProductField>
            <ProductField>{item.product.sellerId}</ProductField>
            <ProductField>
              <DeleteBtn onClick={() => removeItem(item.product._id)}>
                <AiFillDelete />
              </DeleteBtn>
            </ProductField>
          </Row>
        ))}
      </TableBody>
      <TableFooter>
        <Row>
          <Heading>Total Price: </Heading>
          <Heading>{formatDisplayPrice(cartPrice)}</Heading>
          <Heading></Heading>
          <Heading></Heading>
          <Heading></Heading>
          <Heading></Heading>
        </Row>
      </TableFooter>
    </Table>
  );
};

export default CartTable;