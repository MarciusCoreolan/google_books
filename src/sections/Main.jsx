import React from 'react';
import style from './main.module.css';
import { useSelector } from 'react-redux';
import BookCard from '../components/bookCard/BookCard';
import Button from '../components/button/Button';

function Main({ handleSearchMore }) {
  const books = useSelector((state) => state.books);
  const selected = useSelector((state) => state.selected);
  const totalItems = useSelector((state) => state.totalItems);

  return (
    <div className={style.main}>
      <div className={books ? style.main_container : ''}>
        <div className={style.main_container_info_title}>
          Найдено {totalItems}
        </div>
        {books ? (
          <>
            {books
              .filter(
                (book) =>
                  selected === 'All' ||
                  JSON.stringify(book.volumeInfo.categories) ===
                    JSON.stringify([selected])
              )
              .map((book, index) => (
                <BookCard book={book} key={index} />
              ))}
            <div className={style.main_search_more_btn_container}>
              <Button text={'Показать больше'} onClick={handleSearchMore} />
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
}

export default Main;
