const h1El = document.querySelector('h1');


function handleTitleClick () {
  const currentColor = h1El.style.color;
  let newColor;
  if (currentColor === 'blue') {
    newColor = 'tomato';
  } else {
    newColor = 'blue';
  } 
  h1El.style.color = newColor;
}

h1El.addEventListener('click', handleTitleClick);