import React from 'react';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/';

function ImageGallery({ images }) {
  return (
    <Gallery>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            webformatURL={image.webformatURL}
            largeImageURL={image.largeImageURL}
            tags={image.tags}
          />
        );
      })}
    </Gallery>
  );
}

ImageGallery.propTypes = {};

export default ImageGallery;
