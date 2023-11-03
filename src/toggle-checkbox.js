const subscribeCheckbox = document.getElementById('subscribeCheckbox');
const slider = document.querySelector('.slider');

subscribeCheckbox.addEventListener('change', () => {
  if (subscribeCheckbox.checked) {
    slider.style.transform = 'translateX(14px)';
    slider.style.backgroundColor = '#FD7918';
  } else {
    slider.style.transform = 'translateX(0)';
    slider.style.backgroundColor = '#fff'; // Меняете фон на белый, когда чекбокс не выбран
  }
});