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

  const handleSearchChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.error('Tap some word for searching!');
      setQuery('');
      return;
    }

    onSubmit(query);
    setQuery('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SearchButton type="submit">
        <ButtonLabel />
      </SearchButton>

      <SearchInput
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={handleSearchChange}
      />
    </Form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
