import Searchbar from '../../Searchbar';
import ProductList from '../../products/ProductList';
import { SearchSection, ProductsSection } from './HomePageStyles';
import testProducts from '../../products/ProductList/testProducts';

const HomePage = () => {
  return (
    <>
      <SearchSection>
        <Searchbar />
      </SearchSection>
      <ProductsSection>
        {/* Should render featured products on homepage */}
        <ProductList products={testProducts} />
      </ProductsSection>
    </>
  );
};

export default HomePage;
