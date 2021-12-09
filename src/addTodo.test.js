import addTodo from './addTodo.js';
import deleteTodo from './deleteTodo.js';
import updateTodo from './updateTodo.js';
import checkBoxEvent from './checkBoxEvent.js';
import clearAllCompleted from './clearAllCompleted.js';

describe('test add function', () => {
  let arr = [];
  const todoStr = 'test';
  // addTodo test
  test('addTodo', () => {
    addTodo(arr, todoStr);
    expect(arr).toHaveLength(1);
    expect(arr[0].description).toBe('test');
  });
// deleteTodo test
  test('deleteTodo', () => {
    const todo = arr[0];
    arr = deleteTodo(todo, arr);
    expect(arr).toHaveLength(0);
  });
// updateTodo test
  test(' updateTodo', () => {
    arr.push({completed:false,description:'hello world',index:1});
    updateTodo(1,arr,'hey')
    expect(arr[0].description).toBe('hey');
  });
// completed status test
  test('update completed status', () => {
    checkBoxEvent(arr);
    expect(arr[0].completed).toBe(true);
  })

  test('clear all completed task', () => {
    
    arr = clearAllCompleted(arr);
    expect(arr).toHaveLength(0);
  })
});
