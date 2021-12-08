import localStorageMock from './__mocks__/localStorageMock'

export default (id) => {
  // const id = e.target.getAttribute('data-index');
  // let data = JSON.parse(localStorage.getItem('todoList'));

  data = data.filter((item) => item.index !== Number(id));

  for (let i = 0; i < data.length; i += 1) {
    data[i].index = i + 1;
  }

  localStorageMock.setItem("todoList", JSON.stringify(data));
};