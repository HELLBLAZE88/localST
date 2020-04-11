let nzwp = document.getElementById('memr');
let tuda = document.getElementById('nzd');
let suda = document.getElementById('wpp');
let metro = 0;
let yuy = [];
let zett = yuy.length - 1;

//запоминание текста
nzwp.oninput = function() {
	yuy.push(nzwp.value);
	let json = JSON.stringify(yuy);
	localStorage.setItem('yuy', json);
	metro++;
	zett = yuy.length - 1;
};

//вперёд|право
function prawa() {
	if(yuy.length > 0 && metro < zett) {
	nzwp.value = yuy[metro + 1];
	metro++;
} else {
	nzwp.innerHTML = 'а тута ничево нет!'}};

//назад|лево
function lewa() {
	if (yuy.length > 0 && metro != 0) {
	nzwp.value = yuy[metro - 1];
	metro--;
} else {
	nzwp.innerHTML = 'а тута ничево нет!'}};