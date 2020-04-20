let player;
let classes
document.addEventListener('DOMContentLoaded', function () {
  player = document.querySelector('.player');
  document.addEventListener("keydown", function (e) {
    let keyCode = e.code;
    classes = player.className.split(' ');
    let column = classes[1];
    let row = classes[2];

    switch (keyCode) {
      case 'KeyW':
        classPlusOne(row, -1)
        break;
      case 'KeyA':
        classPlusOne(column, -1)
        break;
      case 'KeyS':
        classPlusOne(row, +1)
        break;
      case 'KeyD':
        classPlusOne(column, +1)
        break;
      default:
        console.log('Tohle tlačítko neznám!')
        break;
    }

    player.className = classes.join(' ');
  });

  function classPlusOne(array, num) {
    let oldArray = array;
    let tmp = array.split('-');
    let oldNum = Number(tmp[1]);
    console.log(oldNum);

    if ((oldNum > 1 && num == +1) || (oldNum < 11 && num == -1)) {
      console.log(oldNum);
      tmp[1] = oldNum + num;
      array = tmp[0] + '-' + tmp[1];
      classes.splice(classes.indexOf(oldArray), classes.indexOf(oldArray), array);
      console.log(tmp);
      return;
    }
    console.log('Dál už to nejde!');
  }
})