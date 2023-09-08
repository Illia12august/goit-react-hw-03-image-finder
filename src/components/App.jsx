import React, { Component } from 'react';
import Searchbar  from './Searchbar/Searchbar';
import { Button } from './LoadMoreButton/Button';
import { ImageGallery } from './ImgGallery/ImageGallery';
import { getGallery } from './Api';
import { Loader } from './Loader/Loader';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    hasMoreImages: true,
    showScrollBtn: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.checkScrollPosition);
  }

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.loadImages();
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.checkScrollPosition);
  }

  changeQuery = newQuery => {
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
      hasMoreImages: true,
    });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  checkScrollPosition = () => {
    if (typeof window !== 'undefined') {
      const offset = window.pageYOffset || 0;
      const { showScrollBtn } = this.state;

      if (offset > 1000 && !showScrollBtn) {
        this.setState({ showScrollBtn: true });
      } else if (offset <= 1000 && showScrollBtn) {
        this.setState({ showScrollBtn: false });
      }
    }
  };

  loadImages = async () => {
    const { query, page } = this.state;
    const actualQuery = query.split('/')[1];

    this.setState({ isLoading: true });

    const newImages = await getGallery({ query: actualQuery, page });

    this.setState(prevState => ({
      images: [...prevState.images, ...newImages],
      hasMoreImages: newImages.length >= 20,
      isLoading: false,
    }));
  };

  render() {
    const { images, hasMoreImages, isLoading } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.changeQuery} />
        <ImageGallery images={images} />
        {images.length > 0 && hasMoreImages && (
          <Button onClick={this.handleLoadMore} />
        )}
        {isLoading && <Loader />}
      </div>
    );
  }
}