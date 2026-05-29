const vector = document.getElementById('vector');
let angle = 0;

function rotate() {
  angle += 0.2;
  vector.style.transform = `rotate(${angle}deg)`;
  requestAnimationFrame(rotate);
}

rotate();
