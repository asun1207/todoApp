export const saveTodoData = (todoData: ITodoItem[]) => {
  localStorage.setItem('todoData', JSON.stringify(todoData));
};

export const loadTododata = (): ITodoItem[] => {
  const todoData = localStorage.getItem('todoData');
  if (todoData) {
    return JSON.parse(todoData);
  } else {
    return [];
  }
};
