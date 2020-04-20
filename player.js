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
      case 'ArrowUp':
      case 'KeyW':
        classPlusOne(row, -1, 19);
        break;
      case 'KeyA':
      case 'ArrowLeft':
        classPlusOne(column, -1, 10);
        break;
      case 'KeyS':
      case 'ArrowDown':
        classPlusOne(row, +1, 19);
        break;
      case 'KeyD':
      case 'ArrowRight':
        classPlusOne(column, +1, 10);
        break;
      default:
        console.log('Tohle tlačítko neznám!')
        break;
    }

    player.className = classes.join(' ');
  });

  function classPlusOne(array, num, max) {
    let oldArray = array;
    let tmp = array.split('-');
    let oldNum = Number(tmp[1]);

    if (oldNum > 0 && num === -1 || oldNum < max && num === +1) {
      tmp[1] = Number(oldNum) + num;
      array = tmp[0] + '-' + tmp[1];
      classes.splice(classes.indexOf(oldArray), classes.indexOf(oldArray), array);
    } else {
      console.log('Dál už to nejde!');
    }
  }
})