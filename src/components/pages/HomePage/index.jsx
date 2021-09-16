import useSWR from 'swr';
import Searchbar from '../../Searchbar';
import ProductList from '../../products/ProductList';
import { SearchSection, ProductsSection } from './HomePageStyles';
import { fetchApi } from '../../../util/fetchApi';

const fetcher = (...args) => fetchApi(...args).then(res => res.json());

const HomePage = () => {
  const { data } = useSWR(`/products/featured`, fetcher);

  return (
    <>
      <SearchSection>
        <Searchbar />
      </SearchSection>
      <ProductsSection>
        {/* Should render featured products on homepage */}
        {data?.products && <ProductList products={data.products} />}
      </ProductsSection>
    </>
  );
};

export default HomePage;
