import React from 'react';
import TodoForm from './todo_form';
import TodoListItem from './todo_list_item';

const TodoList = ({todos, receiveTodo}) => {
    return (
        <div>
            <h1>Todo List</h1>
            <ul>
                {todos.map((todo) => (
                    <TodoListItem 
                        todo={todo} 
                        key={todo.id} 
                        title={todo.title} 
                        body={todo.body} 
                        done={todo.done} />
                ))}
            </ul>

            <TodoForm receiveTodo={receiveTodo} />
        </div>
    )
}

export default TodoList;

