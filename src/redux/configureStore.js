import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerBook from './books/books';
import categoriesRed from './categories/categories';

// function that create a combine reducers with the function about book and categories
const rootReducer = combineReducers({
  book: reducerBook,
  categories: categoriesRed,
});

// create a store
const store = configureStore({ reducer: rootReducer });

export default store;
