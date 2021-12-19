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
  const [searchImages, setSearchImages] = useState('');

  const handleSearchChange = event => {
    setSearchImages(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchImages.trim() === '') {
      toast.error('Enter the name of the pictures or photos!');
      setSearchImages('');
      return;
    }

    onSubmit(searchImages);
    setSearchImages('');
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
        value={searchImages}
        onChange={handleSearchChange}
      />
    </Form>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
