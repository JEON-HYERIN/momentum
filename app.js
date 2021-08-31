const age = parseInt(prompt('나이를 입력하세요.'));

// console.log(isNaN(age));

if (isNaN(age) || age < 0) {
  console.log('양수를 입력하세요');
} else if (age <= 18) {
  console.log('당신은 너무 어려요');
} else if (age > 18 && age <= 50) {
  console.log('당신은 음주를 할 수 있어요');
} else if (age > 50 && age <= 80) {
  console.log('운동을 해야 해요');
} else if (age > 80) {
  console.log('하고싶은거 다하세용');
}

