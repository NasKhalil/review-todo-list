import deleteTodo from "./deleteTodo";

describe("Delete todo test", () => {
  // deleteTodo test
  test("deleteTodo", () => {
    const arr = [
      {
        index: 1,
        description: "Task 1",
        completed: false,
      },
    ];
    deleteTodo(1)
    expect(arr).toHaveLength(0)
  });
})
