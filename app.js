const h1El = document.querySelector('h1');


function handleTitleClick () {
  const clickedClass = 'clicked';
  if (h1El.className === clickedClass) {
    h1El.className = '';
  } else {
    h1El.className = clickedClass;
  }
}

h1El.addEventListener('click', handleTitleClick);