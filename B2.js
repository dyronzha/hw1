function greet(){
  console.log('HI!');
}
greet();

function greetfn(fn){
  fn();
}
greetfn(greet);

var greetMe = function(){
  console.log('尼豪~');
}
greetMe();

greetfn(greetMe);
