import { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import Api from 'pixabayApi';
import ImageGalleryItem from 'components/ImageGalleryItem';
import Loader from 'components/Loader';
import Button from 'components/Button';
import { List } from './ImageGallery.styled';

const API = new Api();

const status = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
};
const { PENDING, RESOLVED } = status;
export default function ImageGallery({ searchImages, onClick }) {
  const [collections, setCollections] = useState([]);
  const [status, setStatus] = useState(PENDING);
  const refSearchImages = useRef();

  const handleFetchApi = async () => {
    try {
      API.resetPage();

      const collections = await API.fetchImages();
      if (!collections.length) {
        toast.error('images not found');
      }
      setCollections(collections);
    } catch {
      toast.error('oops something went wrong');
    }
  };

  useEffect(() => {
    refSearchImages.current = searchImages;
    setStatus(PENDING);
    if (refSearchImages !== searchImages) {
      API.query = searchImages;
      setTimeout(() => {
        handleFetchApi();
        setStatus(RESOLVED);
      }, 1000);
    }
  }, [searchImages]);

  const handleLoadMoreImage = async () => {
    API.incrementPage();
    const nextPage = await API.fetchImages();
    setCollections([...collections, ...nextPage]);
    scrollDown();
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  if (status === PENDING) {
    return <Loader />;
  }

  if (status === RESOLVED) {
    return (
      <>
        <List>
          {collections.map(item => (
            <ImageGalleryItem key={item.id} params={item} onClick={onClick} />
          ))}
        </List>
        {collections.length > 0 && <Button onClick={handleLoadMoreImage} />}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchImages: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
