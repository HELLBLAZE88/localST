let textr = document.getElementById('terr');
textr.value = localStorage.getItem('eda');
textr.oninput = function() {
	localStorage.setItem('eda', textr.value);
};