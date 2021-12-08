import localStorageMock from './__mocks__/localStorageMock'

export default (id) => {
  // const id = e.target.getAttribute('data-index');
  // let data = JSON.parse(localStorage.getItem('todoList'));
  const storage = new localStorageMock;

  const obj = JSON.parse(storage.getItem('todoList'));
  obj = obj.filter((item) => item.index !== id);

  // for (let i = 0; i < obj.length; i += 1) {
  //   obj[i].index = i + 1;
  // }

  
  storage.setItem("todoList", JSON.stringify(obj));
};