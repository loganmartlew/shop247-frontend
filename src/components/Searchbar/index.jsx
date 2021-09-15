import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { SearchbarContainer, TextInput, SubmitBtn } from './SearchbarStyles';

const Searchbar = ({ placeholder, onSearch }) => {
  const inputRef = useRef(null);

  const submit = e => {
    e.preventDefault();

    if (!onSearch) return;
    if (typeof onSearch !== 'function') return;
    onSearch(inputRef.current.value);
  };

  return (
    <SearchbarContainer onSubmit={submit}>
      <TextInput
        type='text'
        placeholder={placeholder ?? 'Search...'}
        ref={inputRef}
      />
      <SubmitBtn type='submit'>
        <BsSearch />
      </SubmitBtn>
    </SearchbarContainer>
  );
};

export default Searchbar;
