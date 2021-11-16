import { createSlice } from "@reduxjs/toolkit";
import uniqid from "uniqid";

const todos = createSlice({
  name: "todos",
  initialState: {
    items: [],
  },
  reducers: {
    addTodo: (store, action) => {
      const newTodo = {
        id: uniqid(),
        text: action.payload,
        isComplete: false,
      };
      console.log(newTodo);
      store.items = [...store.items, newTodo];
    },
    toggleTodo: (store, action) => {
      const updatedItems = store.items.map((item) => {
        if (item.id === action.payload) {
          const updatedTodo = {
            ...item,
            isComplete: !item.isComplete,
          };
          return updatedTodo;
        } else {
          return item;
        }
      });
      store.items = updatedItems;
    },
    checkAllTodos: (store) => {
      const add = store.items.map((item) => {
        const check = {
          ...item,
          isComplete: true,
        };
        return check;
      });
      store.items = add;
    },

    deleteTodo: (store, action) => {
      const decreasedItems = store.items.filter(
        (item) => item.id !== action.payload
      );

      store.items = decreasedItems;
    },
    deleteAllTodos: (store) => {
      const decreasedAllItems = store.items.filter((item) => item);

      store.items = decreasedAllItems;
    },
  },
});

export default todos;
