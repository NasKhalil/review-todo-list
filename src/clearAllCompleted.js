import localStorageMock from './__mocks__/localStorageMock.js';

export default (arr) => {
  // let data = JSON.parse(localStorage.getItem('todoList'));
  arr = arr.filter((elem) => elem.completed !== true);
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
  localStorageMock.setItem('todoList', JSON.stringify(arr));
  return arr;
};