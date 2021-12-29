import { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import {
  SearchButton,
  Form,
  ButtonLabel,
  SearchInput,
} from './Searcbar.styled';

export default function Searchbar({ onSubmit }) {
  const [query, setQuery] = useState('');

  const searchChangeHandler = ({ target: { value } }) => {
    setQuery(value);
  };

  const submitFormHandler = event => {
    event.preventDefault();
    if (query.trim() === '') {
      console.log(query);
      toast.error('Enter the name of the pictures or photos!');
      setQuery('');
      return;
    }

    onSubmit(query.toLowerCase());
    setQuery('');
  };

  return (
    <Form onSubmit={submitFormHandler}>
      <SearchButton type="submit">
        <ButtonLabel />
      </SearchButton>

      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={searchChangeHandler}
      />
    </Form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
