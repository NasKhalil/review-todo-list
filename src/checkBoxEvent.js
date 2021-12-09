import localStorageMock from "./__mocks__/localStorageMock.js";

export default (arr) => {
  // const { index } = t.dataset;
  // const data = JSON.parse(localStorage.getItem("todoList"));
  // const item = data.find((it) => it.index === +index);

  if (arr[0].completed === false) {
    arr[0].completed = true;
    // item.completed = true;
    // t.nextElementSibling.classList.add("checked");
  } else {
    arr[0].completed = false;
    // t.nextElementSibling.classList.remove("checked");
  }

  localStorageMock.setItem("todoList", JSON.stringify(arr));
};
