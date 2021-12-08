import addTodo from "./addTodo";
import deleteTodo from "./deleteTodo";

describe("test add function", () => {
  const arr = [];
  const todoStr = "test";
  // addTodo test
  test("addTodo", () => {
    addTodo(arr, todoStr);
    expect(arr).toHaveLength(1);
    expect(arr[0].description).toBe("test");
  });

  test("deleteTodo", () => {
    //  document.body.innerHTML =
    //   `<div class='todo-item'>
    //     <div class='left-items'>
    //       <input id='boxes' type="checkbox" checked} data-index="1">
    //     </div>
    //     <button class='remove-btn'data-index="1">del</button>
    //   </div>`;
      // const delBtn = document.querySelector('.remove-btn');  
    deleteTodo(arr);
    expect(arr).toHaveLength(0)
  });
});
