import addTodo from './addTodo';
import deleteTodo from './deleteTodo';

describe('test add function', () => {
  let arr = [];
  const todoStr = 'test';
  // addTodo test
  test('addTodo', () => {
    addTodo(arr, todoStr);
    expect(arr).toHaveLength(1);
    expect(arr[0].description).toBe('test');
  });

  test('deleteTodo', () => {
    const todo = arr[0];
    arr = deleteTodo(todo, arr);
    expect(arr).toHaveLength(0);
  });
});
