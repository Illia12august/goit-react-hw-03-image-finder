import React, { Component } from 'react';
// import { ImageModal } from 'components/Modal/Modal';

import { ImageModal } from 'components/Modal/Modal';
import { GalleryItem, ImageItem } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  onCloseModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { webformatURL, tags, largeImageURL } = this.props;

    return (
      <GalleryItem>
        <ImageItem onClick={this.openModal} src={webformatURL} alt={tags} />
        <ImageModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.onCloseModal}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      </GalleryItem>
    );
  }
}
