const initialState = {
  books: null,
  totalItems: null,
  selected: 'All',
  changeCategory: [
    'All',
    'Art',
    'Biography',
    'Computers',
    'History',
    'Medical',
    'Poetry',
  ],
  sort: ['relevance', 'newest'],
  selectedSort: 'relevance',
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'get/books/success':
      return {
        ...state,
        books: action.books,
        totalItems: action.totalItems,
        getBooksLoader: false,
      };
    case 'get/more/books/success':
      return {
        ...state,
        books: [...state.books, ...action.books],
        totalItems: action.totalItems,
        getBooksLoader: false,
      };
    case 'chooseCategory':
      return {
        ...state,
        selected: action.category,
      };
    case 'chooseSort':
      return {
        ...state,
        selectedSort: action.sort,
      };

    default:
      return state;
  }
};

export const getBooks = (bookName, selectedSort) => {
  return (dispatch) => {
    dispatch({ type: 'get/books/loader' });
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}&orderBy=${selectedSort}&startIndex=0&maxResults=30&AIzaSyD9RiK4OOrXCp7Oq4sot-QdmY2bwWzIx48`
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'get/books/success',
          books: json.items,
          totalItems: json.totalItems,
        });
      });
  };
};
export const getBooks2 = (bookName, getMore, selectedSort) => {
  return (dispatch) => {
    dispatch({ type: 'get/books/loader' });
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${bookName}&orderBy=${selectedSort}&startIndex=${getMore}&maxResults=30&AIzaSyD9RiK4OOrXCp7Oq4sot-QdmY2bwWzIx48`
    )
      .then((res) => res.json())
      .then((json) => {
        dispatch({
          type: 'get/more/books/success',
          books: json.items,
          totalItems: json.totalItems,
        });
      });
  };
};
