export default (t) => {
  const { index } = t.dataset;
  const data = JSON.parse(localStorage.getItem('todoList'));
  const item = data.find((it) => it.index === +index);

  if (t.checked) {
    item.completed = true;
    t.nextElementSibling.classList.add('checked');
  } else {
    item.completed = false;
    t.nextElementSibling.classList.remove('checked');
  }

  localStorage.setItem('todoList', JSON.stringify(data));
};