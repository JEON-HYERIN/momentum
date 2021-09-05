const bgImages = ['1.jpg', '2.jpg', '3.jpg', '4.jpg'];

const random = bgImages[Math.floor(Math.random() * bgImages.length)]; 

document.body.style.backgroundImage = `url('./img/${random}')`;