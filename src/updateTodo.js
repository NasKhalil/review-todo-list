import localStorageMock from './__mocks__/localStorageMock.js';
export default (id,arr,str) => {
  // const id = Number(e.target.getAttribute('data-index'));
  // const data = JSON.parse(localStorage.getItem('todoList'));
  const todoObj = arr.find((x) => x.index === id);

  todoObj.description = str;
  localStorageMock.setItem('todoList', JSON.stringify(todoObj));
};