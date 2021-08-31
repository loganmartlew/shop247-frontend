import { BsSearch } from 'react-icons/bs';
import { SearchbarContainer, TextInput, SubmitBtn } from './SearchbarStyles';

const Searchbar = () => {
  return (
    <SearchbarContainer>
      <TextInput type='text' />
      <SubmitBtn>
        <BsSearch />
      </SubmitBtn>
    </SearchbarContainer>
  );
};

export default Searchbar;
