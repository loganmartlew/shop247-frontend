import Searchbar from '../../Searchbar';
import ProductList from '../../products/ProductList';
import { SearchSection, ProductsSection } from './HomePageStyles';
import testProducts from '../../products/ProductList/testProducts';

const HomePage = () => {
  return (
    <>
<<<<<<< HEAD
      <h1>Shop247</h1>
      <Link to='/profile'>Profile</Link>
=======
      <SearchSection>
        <Searchbar />
      </SearchSection>
      <ProductsSection>
        {/* Should render featured products on homepage */}
        <ProductList products={testProducts} />
      </ProductsSection>
>>>>>>> main
    </>
  );
};

export default HomePage;
