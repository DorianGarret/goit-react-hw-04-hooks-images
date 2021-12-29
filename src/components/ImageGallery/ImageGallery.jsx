import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGallery/ImageGalleryItem';

import { List } from './ImageGallery.styled';

export default function ImageGallery({ collection }) {
  return (
    <List>
      {collection.map(item => (
        <ImageGalleryItem key={item.id} params={item} />
      ))}
    </List>
  );
}

ImageGallery.propTypes = {
  collection: PropTypes.arrayOf(PropTypes.object.isRequired),
};
