document.addEventListener('keydown', logKey);

function logKey(e) {
//  console.log(e.code);
let key=e.code;
switch(key){
  case 'ArrowUp': case 'KeyW':
  console.log("up");
  break;

  case 'ArrowDown': case 'KeyS':
  console.log("Down");
  break;
  
  case 'ArrowLeft': case "KeyA":
  console.log("left");
  break;

  case 'ArrowRight': case 'KeyD':
  console.log("right");
  break;
}

}
console.log("hey");