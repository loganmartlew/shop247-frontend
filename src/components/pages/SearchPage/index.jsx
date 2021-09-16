import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { fetchApi } from '../../../util/fetchApi';
import Searchbar from '../../Searchbar';
import { SearchSection } from '../../Searchbar/SearchbarStyles';
import ProductList from '../../products/ProductList';

const SearchPage = () => {
  const [products, setProducts] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);
    const search = parsedQuery.s;

    fetchApi(`/products?search=${search}`)
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, [location]);

  return (
    <>
      <SearchSection>
        <Searchbar />
      </SearchSection>
      <ProductList products={products} />
    </>
  );
};

export default SearchPage;
