import React from 'react';
import style from './card.module.css';
import defImg from '../../images/default-img.png';
function BookCard({ book }) {
  return (
    <div className={style.book_card}>
      <div className={style.book_card_img}>
        <img
          src={
            book.volumeInfo.imageLinks
              ? book.volumeInfo.imageLinks.thumbnail
              : defImg
          }
          alt=''
        />
      </div>
      <div className={style.book_card_content}>
        <div>
          <div>
            <span>Катешория: </span>
            {book.volumeInfo.categories ? (
              <>{book.volumeInfo.categories}</>
            ) : (
              ''
            )}
          </div>
          <div className={style.book_card_content_author}>
            <span>Автор:</span>{' '}
            {book.volumeInfo.authors ? (
              <>
                {book.volumeInfo.authors}
                <div>
                  <span>Дата: </span>
                  {book.volumeInfo.publishedDate}
                </div>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
        <div>
          <span>Название:</span> {book.volumeInfo.title}
        </div>
      </div>
    </div>
  );
}

export default BookCard;
