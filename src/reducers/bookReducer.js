import { v4 } from "uuid";

export const bookReducer = (state, action) => {
  switch (action.type) {
    case "Add_Book":
      return [
        ...state,
        {
          title: action.book.title,
          author: action.book.author,
          id: v4(),
        },
      ];
    case "Remove_Book":
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};
