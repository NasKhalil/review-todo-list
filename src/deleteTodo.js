import localStorageMock from './__mocks__/localStorageMock'

export default (task, arr) => {
  const {index} = task;
  const currentArr = arr.filter((item) => item.index !== index);

  for (let i = 0; i < obj.length; i += 1) {
    obj[i].index = i + 1;
  }

  localStorageMock.setItem("todoList", JSON.stringify(currentArr));
  return currentArr;
};