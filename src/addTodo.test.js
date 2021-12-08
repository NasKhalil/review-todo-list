import addTodo from "./addTodo";

describe("test add function", () => {
  const arr = [];
  const todoStr = "test";
  // addTodo test
  test("addTodo", () => {
    addTodo(arr, todoStr);
    expect(arr).toHaveLength(1);
    expect(arr[0].description).toBe("test");
  });
});
