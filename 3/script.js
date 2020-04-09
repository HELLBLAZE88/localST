//// лучший друг тестера
let trash = document.getElementById('trash');
trash.onclick = function() {
	localStorage.clear();
}

//// тексты

let area1 = document.getElementById('ar1');
area1.value = localStorage.getItem('ar1');
area1.oninput = function() {
	localStorage.setItem('ar1', area1.value);
};

let area2 = document.getElementById('ar2');
area2.value = localStorage.getItem('ar2');
area2.oninput = function() {
	localStorage.setItem('ar2', area2.value);
};

let goddes = document.getElementById('higod');
goddes.value = localStorage.getItem('god');
goddes.oninput = function() {
	localStorage.setItem('god', goddes.value);
};

////чеки, батоны и фиксики////

//не захотел сотрудничать querySelector'ом, поэтому всё отдельно
let chek1 = document.getElementById('chika1');
//for (let i = 0; i < chek.length; i++) {
	chek1.onclick = function() {
		if(chek1.checked) {
		localStorage.setItem('checkbox1', 'true');}
		else {
		localStorage.setItem('checkbox1', 'false');}
	}
//}
if (localStorage.getItem('checkbox1') == 'true') {
chek1.setAttribute('checked', 'checked');
}

let chek2 = document.getElementById('chika2');
chek2.onclick = function() {
	if(chek2.checked) {
	localStorage.setItem('checkbox2', 'true');}
	else {
	localStorage.setItem('checkbox2', 'false');}
}
if (localStorage.getItem('checkbox2') == 'true') {
chek2.setAttribute('checked', 'checked');
}

let selk = document.getElementById('tan');
// let mnogo = selk.options[selk.selectedIndex].value;
// ^ оказалось сложнее, чем я думала 
selk.onchange = function() {
	localStorage.setItem('nama', selk.value);
}
if(selk){
	selk.options[localStorage.getItem('nama')].selected = true;
} else {
	selk.options[localStorage.getItem('nama')].selected = false;}

/*let baton = document.querySelector('#radio');
for (let i = 0; i < baton.length; i++) {
	baton.onchange = function() {
	localStorage.setItem('kr', baton.value);
}}
if(localStorage.getItem('kr') == true) {
	baton.setAttribute('checked', 'checked');
}*/

let bat1 = document.getElementById('8');
bat1.onclick = function() {
	if(bat1.checked) {
	localStorage.setItem('rad1', 'true');}
	else {
	localStorage.setItem('rad1', 'false');}
}
if (localStorage.getItem('rad1') == 'true') {
bat1.setAttribute('checked', 'checked');
}

let bat2 = document.getElementById('21');
bat2.onclick = function() {
	if(bat2.checked) {
	localStorage.setItem('rad2', 'true');}
	else {
	localStorage.setItem('rad2', 'false');}
}
if (localStorage.getItem('rad2') == 'true') {
bat2.setAttribute('checked', 'checked');
}

let bat3 = document.getElementById('88');
bat3.onclick = function() {
	if(bat3.checked) {
	localStorage.setItem('rad3', 'true');}
	else {
	localStorage.setItem('rad3', 'false');}
}
if (localStorage.getItem('rad3') == 'true') {
bat3.setAttribute('checked', 'checked');
}