import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, editTodo, completeTodo, activateTodo } from 
'./redux/actions';
const TodoList = () => {
 const [newTodo, setNewTodo] = useState('');
 const [editingTodoId, setEditingTodoId] = useState('');
 const todos = useSelector((state) => state.todos);
 const dispatch = useDispatch();
 const handleAddTodo = () => {
 if (newTodo.trim() !== '') {
 dispatch(addTodo(newTodo));
 setNewTodo('');
 }
 };
 const handleDeleteTodo = (id) => {
 dispatch(deleteTodo(id));
 };
 const handleEditTodo = (id, title) => {
 setEditingTodoId(id);
 setNewTodo(title);
 };
 const handleUpdateTodo = () => {
 if (newTodo.trim() !== '') {
 dispatch(editTodo(editingTodoId, newTodo));
 setNewTodo('');
 setEditingTodoId('');
 }
 };
 const handleCompleteTodo = (id) => {
 dispatch(completeTodo(id));
 };
 const handleActivateTodo = (id) => {
 dispatch(activateTodo(id));
 };
 return (
 <div>
 <h1>Todo List</h1>
 <div>
 <input
 type="text"
 placeholder="New Todo"
 value={newTodo}
 onChange={(e) => setNewTodo(e.target.value)}
 />
 {editingTodoId ? (
 <button onClick={handleUpdateTodo}>Update</button>
 ) : (
 <button onClick={handleAddTodo}>Add</button>
 )}
 </div>
 <ul>
 {todos.map((todo) => (
 <li key={todo.id}>
 <span className={todo.completed ? 'completed' : ''}>{todo.title}</span>
 <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
 {todo.completed ? (
 <button onClick={() => handleActivateTodo(todo.id)}>Activate</button>
 ) : (
 <button onClick={() => handleCompleteTodo(todo.id)}>Complete</button>
 )}
 <button onClick={() => handleEditTodo(todo.id, todo.title)}>Edit</button>
 </li>
 ))}
 </ul>
 </div>
 );
};
export default TodoList;