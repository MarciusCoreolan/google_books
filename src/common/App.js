import React, { useState } from 'react';
import Main from '../sections/Main';
import Header from '../sections/Head';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks, getBooks2 } from '../redux/reducer';
import './App.css';

function App(props) {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');
  const [getMore, setGetMore] = useState(0);
  const selectedSort = useSelector((state) => state.selectedSort);

  const handleSearch = () => {
    if (searchText) {
      dispatch(getBooks(searchText, selectedSort));
    }
  };

  const handleSearchMore = () => {
    setGetMore(getMore + 30);
    dispatch(getBooks2(searchText, getMore + 30, selectedSort));
  };

  return (
    <div>
      <Header
        setSearchText={setSearchText}
        searchText={searchText}
        handleSearch={handleSearch}
      />
      <Main searchText={searchText} handleSearchMore={handleSearchMore} />
    </div>
  );
}

export default App;
