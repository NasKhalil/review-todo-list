import localStorageMock from './__mocks__/localStorageMock.js';

export default (id, arr, str) => {
  const todoObj = arr.find((x) => x.index === id);
  todoObj.description = str;
  localStorageMock.setItem('todoList', JSON.stringify(todoObj));
};