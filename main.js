function load() {
	let canvas = $('#fractal')[0];
	let ctx = canvas.getContext('2d');

  for (let x = 0; x < canvas.width; x++) {
    for (let y = 0; y < canvas.height; y++) {
      const r = (x + y) % 255;
      const g = x * x;
      const b = y;

      ctx.fillStyle = 'rgb(' + r + ', ' + g + ', ' + b + ')';
      ctx.fillRect(x, y, 1, 1);
    }
  }
}