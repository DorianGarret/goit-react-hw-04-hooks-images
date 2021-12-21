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
    setStatus(PENDING);
    try {
      const collections = await API.fetchImages();

      if (!collections.length) {
        toast.error('images not found');
      }

      setCollections(collections);
      setStatus(RESOLVED);
    } catch {
      toast.error('oops something went wrong');
    }
  };

  useEffect(() => {
    refSearchImages.current = searchImages;

    if (refSearchImages !== searchImages) {
      API.resetPage();
      API.query = searchImages;
      handleFetchApi();
    }
  }, [searchImages]);

  const handleLoadMoreCollections = async () => {
    API.incrementPage();

    const nextCollections = await API.fetchImages();
    setCollections([...collections, ...nextCollections]);
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
            <ImageGalleryItem key={item.id} params={item} />
          ))}
        </List>
        {collections.length > 0 && (
          <Button onClick={handleLoadMoreCollections} />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  searchImages: PropTypes.string.isRequired,
};
