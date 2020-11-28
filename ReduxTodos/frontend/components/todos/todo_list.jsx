import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({todos}) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => {
                    <TodoListItem todo={todo} key={todo.id} title={todo.title} body={todo.body} done={todo.done}  />
                })}
            </ul>
        </div>
    )
}

export default TodoList;