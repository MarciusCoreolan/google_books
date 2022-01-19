import React, { useState } from 'react';
import Button from '../components/button/Button';
import style from './header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import Dropdown from '../components/dropDownMenu/Dropdown';

function Header({ searchText, setSearchText, handleSearch }) {
  const dispatch = useDispatch();
  const getBooksLoading = useSelector((state) => state.getBooksLoader);
  const changeCategory = useSelector((state) => state.changeCategory);
  const selected = useSelector((state) => state.selected);
  const sort = useSelector((state) => state.sort);
  const selectedSort = useSelector((state) => state.selectedSort);

  const [isActive, setIsActive] = useState(false);
  const [isActiveSort, setIsActiveSort] = useState(false);

  const setSelected = (category) => {
    dispatch({ type: 'chooseCategory', category: category });
    setIsActive(false);
  };
  const setSelectedSort = (sort) => {
    dispatch({ type: 'chooseSort', sort: sort });
    setIsActiveSort(false);
  };

  return (
    <div className={style.header}>
      <div className={style.header_bg_block}>
        <div className={style.header_panel}>
          <div className={style.search_panel}>
            <input
              type='text'
              className={style.search_panel_input_searching}
              placeholder={'Введите название книги'}
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <div className={style.search_panel_filter}>
              <Dropdown
                setIsActive={setIsActive}
                isActive={isActive}
                changeCategory={changeCategory}
                selected={selected}
                setSelected={setSelected}
              />
              <Dropdown
                setIsActive={setIsActiveSort}
                isActive={isActiveSort}
                changeCategory={sort}
                selected={selectedSort}
                setSelected={setSelectedSort}
              />
            </div>
            <div className={style.header_search_panel_button_container}>
              <Button
                text={'Поиск'}
                onClick={handleSearch}
                disabled={getBooksLoading}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
