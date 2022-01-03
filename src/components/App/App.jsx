import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import fetchPictureCollection from 'API';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Modal from 'components/Modal';
import Loader from 'components/Loader';
import { Header, Container, Main } from './App.styled';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
};

export default function App() {
  const [query, setQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [collection, setCollection] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState({});
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const pictureCollectionHandler = async () => {
      setStatus(STATUS.PENDING);
      try {
        const { hits, total } = await fetchPictureCollection(
          query,
          currentPage,
        );

        if (!total) {
          toast.error('images not found');
        }

        setCollection(prevCollection => [...prevCollection, ...hits]);
        setStatus(STATUS.RESOLVED);

        setTimeout(() => {
          scrollDown();
        }, 500);
      } catch {
        toast.error('oops something went wrong');
      }
    };
    pictureCollectionHandler();
  }, [query, currentPage]);

  const formSubmitHandler = query => {
    setQuery(query);
    setCurrentPage(1);
    setCollection([]);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const loadMoreHandler = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const fullSizeImageHandler = ({ target: { id, alt, dataset } }) => {
    let src = dataset.full_size;

    setLargeImage({ id, alt, src });

    toggleModal();
  };
  const { id, alt, src } = largeImage;
  return (
    <>
      <Header>
        <Container>
          <Searchbar onSubmit={formSubmitHandler} />
        </Container>
      </Header>
      <Container>
        <Main>
          {status === STATUS.PENDING && (
            <Modal onClose={toggleModal}>
              <Loader />
            </Modal>
          )}
          <ImageGallery
            collection={collection}
            onClick={fullSizeImageHandler}
          />
          {collection.length > 0 && <Button onClick={loadMoreHandler} />}
        </Main>
      </Container>
      <ToastContainer autoClose={2500} />
      {showModal && (
        <Modal onClose={toggleModal}>
          {<img id={id} alt={alt} src={src} />}
        </Modal>
      )}
    </>
  );
}
