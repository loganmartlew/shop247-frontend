import { BsSearch } from 'react-icons/bs';
import { SearchbarContainer, TextInput, SubmitBtn } from './SearchbarStyles';

const Searchbar = ({ onSearch }) => {
  const submit = e => {
    e.preventDefault();

    if (!onSearch) return;
    if (typeof onSearch !== 'function') return;
    onSearch();
  };

  return (
    <SearchbarContainer onSubmit={submit}>
      <TextInput type='text' value='new pants please' />
      <SubmitBtn type='submit'>
        <BsSearch />
      </SubmitBtn>
    </SearchbarContainer>
  );
};

export default Searchbar;
