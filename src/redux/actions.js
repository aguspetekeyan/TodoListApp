export const addTodo = (title) => {
    return {
      type: 'ADD_TODO',
      payload: {
        id: new Date().getTime().toString(),
        title,
        completed: false,
      },
    };
  };
  export const deleteTodo = (id) => {
    return {
      type: 'DELETE_TODO',
      payload: id,
    };
  };
  export const editTodo = (id, title) => {
    return {
      type: 'EDIT_TODO',
      payload: {
        id,
        title,
      },
    };
  };
  export const completeTodo = (id) => {
    return {
      type: 'COMPLETE_TODO',
      payload: id,
    };
  };
  export const activateTodo = (id) => {
    return {
      type: 'ACTIVATE_TODO',
      payload: id,
    };
  };