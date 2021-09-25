import { configureStore } from '@reduxjs/toolkit';
import { bookService } from '../services/bookServices';

export const store = configureStore({
  reducer: {
    [bookService.reducerPath] : bookService.reducer,
  },
  middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(bookService.middleware),
})