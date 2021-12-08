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
    deleteTodo(1);
    expect(arr).toHaveLength(0)
  });
});
