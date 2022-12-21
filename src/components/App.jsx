import React, { Component } from 'react';
import { AppWrapper } from './App.styled';
import fetchImages from '../utils/PixabayAPI';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
export class App extends Component {
  state = {
    images: [],
    value: '',
    page: 1,
  };

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   if (prevState.search !== nextProps.search) {
  //     return { page: 1, search: nextProps.search };
  //   }
  //   return null;
  // }

  // async componentDidUpdate(_, prevState) {
  //   const { value, page } = this.state;
  //   if (value !== prevState.value || page !== prevState.page) {
  //     const { data } = await fetchImages(value);
  //     this.setState({
  //       images: data.hits,
  //     });
  //     return '';
  //   }
  //   if (page !== prevState.page) {
  //     const { data } = await fetchImages(value, page);
  //     this.setState(prevState => ({
  //       images: [...prevState.images, ...data.hits],
  //     }));
  //   }
  // }

  handleSearchbarSubmit = value => {
    this.setState({ value });
  };

  changePage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images } = this.state;
    return (
      <>
        <Searchbar onFormSubmit={this.handleSearchbarSubmit} />
        <AppWrapper>
          <ImageGallery images={images} />
        </AppWrapper>
        {images.length !== 0 && <Button onClick={this.changePage} />}
      </>
    );
  }
}

export default App;
