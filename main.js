'use strict';

{
  const text = document.getElementById('text');
  const save = document.getElementById('save');
  const message = document.getElementById('message');
  const clear = document.getElementById('clear');

  text.value = localStorage.getItem === null ? '': localStorage.getItem('memo');

  save.addEventListener('click', () => {
    message.classList.add('appear');
    setTimeout(() => {
      message.classList.remove('appear');
    }, 1000);
    localStorage.setItem('memo', text.value);
  });

  clear.addEventListener('click', () => {
    if (confirm('本当に削除しますか？')) {
      localStorage.removeItem('memo');
      text.value = '';
    } 
  });
}