import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import queryString from 'query-string';
import { fetchApi } from '../../../util/fetchApi';
import Searchbar from '../../Searchbar';
import { SearchSection } from '../../Searchbar/SearchbarStyles';
import ProductList from '../../products/ProductList';
import PageIndicators from './PageIndicators';

const SearchPage = () => {
  const [originalProducts, setOriginalProducts] = useState(null);
  const [products, setProducts] = useState(null);
  const [pages, setPages] = useState();

  const [priceAsc, setPriceAsc] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const parsedQuery = queryString.parse(location.search);
    const search = parsedQuery.s;
    const page = parsedQuery.page;

    fetchApi(`/products?search=${search}${page ? `&page=${page}` : ''}`)
      .then(res => res.json())
      .then(data => {
        setOriginalProducts(data.products);
        setPages(data.pages);
      });
  }, [location]);

  useEffect(() => {
    if (!originalProducts) return;
    if (!priceAsc) return setProducts([...originalProducts]);

    const sortedProducts = [...originalProducts].sort((a, b) => {
      return a.price - b.price;
    });

    setProducts([...sortedProducts]);
  }, [originalProducts, priceAsc]);

  // Toggle between unsorted and ascending price (cheapest first)
  const togglePriceSort = () => {
    setPriceAsc(prev => !prev);
  };

  return (
    <>
      <SearchSection>
        <Searchbar />
        <label htmlFor='price'>Cheapest First: </label>
        <input
          type='checkbox'
          id='price'
          value={priceAsc}
          onChange={togglePriceSort}
        />
      </SearchSection>
      <ProductList products={products} />
      {pages && <PageIndicators pages={pages} />}
    </>
  );
};

export default SearchPage;
