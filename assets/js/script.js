const btnElList = document.querySelectorAll('.button');

btnElList.forEach(btnEl => {
  btnEl.addEventListener('click', () => {
    document.querySelector('.special')?.classList.remove('special');
    btnEl.classList.add('special');
    document.querySelector('.active')?.classList.remove('active');
    btnEl.classList.add('special');
  })
});
