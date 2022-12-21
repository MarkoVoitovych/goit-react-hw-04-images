import { GalleryImage, GalleryItem } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

function ImageGalleryItem({ webformatURL, tags }) {
  return (
    <GalleryItem>
      <GalleryImage src={webformatURL} alt={tags} />
    </GalleryItem>
  );
}

export default ImageGalleryItem;
