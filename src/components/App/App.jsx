import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from 'components/Searchbar';
import ImageGallery from 'components/ImageGallery';
import Modal from 'components/Modal';
import { FullSizeImageContext } from 'context/FullSizeImageContext';
import { Header, Container, Main } from './App.styled';

export default function App() {
  const [searchImages, setSearchImages] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [largeImage, setLargeImage] = useState({});
  const handleFormSubmit = searchImages => {
    setSearchImages(searchImages);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
    if (showModal) {
      setLargeImage({});
    }
  };

  const handlerFullSizeImage = event => {
    const { id, alt, dataset } = event.target;
    setLargeImage({
      id,
      alt,
      src: dataset.full_size,
    });

    toggleModal();
  };
  const { id, src, alt } = largeImage;
  return (
    <>
      <Header>
        <Container>
          <Searchbar onSubmit={handleFormSubmit} />
        </Container>
      </Header>
      <Container>
        <Main>
          <FullSizeImageContext.Provider
            value={{ onClick: handlerFullSizeImage }}
          >
            <ImageGallery searchImages={searchImages} />
          </FullSizeImageContext.Provider>
        </Main>
      </Container>
      <ToastContainer autoClose={2500} />
      {showModal && (
        <Modal onClose={toggleModal}>
          {<img id={id} src={src} alt={alt} />}
        </Modal>
      )}
    </>
  );
}
