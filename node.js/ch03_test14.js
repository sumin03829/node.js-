var Users=[{name:'방탄소년단',age:20},{name:'걸스데이',age:22},{name:'티아라',age:23},{name:'에프터스쿨',age:25}];

console.log('배열 요소의 수:%d',Users.length);
console.log('원본 Users');
console.dir(Users);

var Users2=Users.slice(1,3);

console.log('slice()로 잘라낸 후 Users2');
console.log(Users2);

var Users3=Users2.slice(1);

console.log('lsice()로 잘라낸 후 Users3');
console.dir(Users3);