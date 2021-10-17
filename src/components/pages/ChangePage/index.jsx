import { useState, useEffect } from 'react'
import { fetchApi } from '../../../util/fetchApi';
import { useParams } from 'react-router-dom';

import ProductForm from '../../products/ProductForm';
import { Header } from './ChangePageStyle';

const ChangePage = () => {

  const [product, setProduct] = useState(null)

  const { productid } = useParams()

  useEffect(() => {
    fetchApi(`/products/${productid}`)
    .then(res => res.json())
    .then(data => setProduct(data.product))
  },[productid])

  return (
    <>
      <Header>Change Product Details</Header>
      {product && <ProductForm product={product}/>}
    </>
  );
};

export default ChangePage;
