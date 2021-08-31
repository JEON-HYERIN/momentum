const h1El = document.querySelector('h1');

console.dir(h1El);
function colorChange() {
  h1El.style.color = 'blue';
};

h1El.addEventListener('click', colorChange);
h1El.addEventListener('mouseenter', function () {
  h1El.innerText = 'mouse is here~!';
});
h1El.addEventListener('mouseleave', () => {
  h1El.innerHTML = 'mouse is gone~!';
})
