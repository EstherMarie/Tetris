document.addEventListener('DOMContentLoaded', () => {
	const grid = document.querySelector('.grid');
	let squares = Array.from(document.querySelectorAll('.grid div'));
	const scoreDisplay = document.querySelector('#score');
	const startBtn = document.querySelector('#start-button');
	const width = 10;

	// para mudar o texto do botão start - pause

	startBtn.addEventListener('click', () => {
		if (startBtn.innerHTML === 'Start') {
			startBtn.innerHTML = `Pause`;
		} else if (startBtn.innerHTML === 'Pause') {
			startBtn.innerHTML = `Start`;
		}
	});

	// Tetrominoes

	const lTetromino = [
		[1, width + 1, width * 2 + 1, 2],
		[width, width + 1, width + 2, width * 2 + 2],
		[1, width + 1, width * 2 + 1, width * 2],
		[width, width * 2, width * 2 + 1, width * 2 + 2],
	];

	const zTetromino = [
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
		[0, width, width + 1, width * 2 + 1],
		[width + 1, width + 2, width * 2, width * 2 + 1],
	];

	const tTetromino = [
		[1, width, width + 1, width + 2],
		[1, width + 1, width + 2, width * 2 + 1],
		[width, width + 1, width + 2, width * 2 + 1],
		[1, width, width + 1, width * 2 + 1],
	];

	const oTetromino = [
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
		[0, 1, width, width + 1],
	];

	const iTetromino = [
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3],
		[1, width + 1, width * 2 + 1, width * 3 + 1],
		[width, width + 1, width + 2, width + 3],
	];

	const theTetrominoes = [lTetromino, zTetromino, tTetromino, iTetromino];

	let currentPosition = 4;
	let currentRotation = 0;

	// select random tetromino and its rotation
	let random = Math.floor(Math.random() * theTetrominoes.length);
	let current = theTetrominoes[random][0];

	// draw the tetromino

	function draw() {
		current.forEach((index) => {
			squares[currentPosition + index].classList.add('tetromino');
		});
	}

	// undraw the Tetromino
	function undraw() {
		current.forEach((index) => {
			squares[currentPosition + index].classList.remove('tetromino');
		});
	}
});
