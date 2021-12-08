import localStorageMock from './__mocks__/localStorageMock'

export default (arr) => {
  const id = arr[0].index;
  // let data = JSON.parse(localStorage.getItem('todoList'));

  // let obj = JSON.parse(localStorageMock.getItem('todoList'));
  arr = arr.filter((item) => item.index !== id);

  // for (let i = 0; i < obj.length; i += 1) {
  //   obj[i].index = i + 1;
  // }

  
  localStorageMock.setItem("todoList", JSON.stringify(arr));
};