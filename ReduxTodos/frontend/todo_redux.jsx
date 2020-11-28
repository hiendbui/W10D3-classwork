import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import { receiveTodo } from './actions/todo_actions'
import { receiveTodos } from './actions/todo_actions'
import Root from './components/root';
import allTodos from './reducers/selectors';

const initialState = {
    1: {
        id: 1,
        title: "wash car",
        body: "with soap",
        done: false
    },
    2: {
        id: 2,
        title: "wash dog",
        body: "with shampoo",
        done: true
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const root = document.getElementById('root');
    const store = configureStore()
    window.store = store
    window.receiveTodo = receiveTodo;
    window.receiveTodos = receiveTodos;
    window.allTodos = allTodos(store.getState());
    ReactDOM.render(<Root store={store} />, root);
    
})