function Person(name, num){
    this.name=name;
    this.num=num;
}

Person.prototype.walk=function(speed) {
    console.log(speed+'Km속도로 걸어갑니다. (3118최수민)');
}

Person.prototype.eat=function(food){
    console.log(food+'를 맛있게 먹었습니다.')
}

Person.prototype.ing=function(time){
    console.log(time+'만큼 시간을 썼습니다.')
}

var person01=new Person('소녀시대',20);
var person02=new Person('걸스데이',22);
var person03=new Person('(여자)아이들',25);

console.log(person01.name+'객체의 walk(10)을 호출합니다.');
person01.walk(10);
console.log(person02.name+'객체의 walk(10)을 호출합니다.');
person02.eat(10);
console.log(person03.name+'객체의 walk(10)을 호출합니다.');
person03.ing(10);