import { useRef } from 'react';
import { useHistory } from 'react-router';
import { BsSearch } from 'react-icons/bs';
import { SearchbarContainer, TextInput, SubmitBtn } from './SearchbarStyles';

const Searchbar = ({ placeholder }) => {
  const inputRef = useRef(null);

  const history = useHistory();

  const submit = e => {
    e.preventDefault();

    history.push(`/search?s=${inputRef.current.value}`);
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
