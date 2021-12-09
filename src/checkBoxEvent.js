import localStorageMock from './__mocks__/localStorageMock.js';

export default (arr) => {
  if (arr[0].completed === false) {
    arr[0].completed = true;
  } else {
    arr[0].completed = false;
  }
  localStorageMock.setItem('todoList', JSON.stringify(arr));
};
