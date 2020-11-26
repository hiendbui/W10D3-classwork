import { RECEIVE_TODOS } from '../actions/todo_actions';
import { RECEIVE_TODO } from '../actions/todo_actions';

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


const todosReducer = (currentState = initialState, action) => {
    Object.freeze(currentState);
    let nextState = {...currentState};

    switch(action.type){
        case RECEIVE_TODOS:
            const todos = {};
            for (let todo of action.todos){
                todos[todo.id] = todo;
            }
            nextState = todos;
            return nextState;
        case RECEIVE_TODO:
             nextState[action.todo.id] = action.todo;
             return nextState;
        default:
            return nextState;

    }

}

export default todosReducer;



