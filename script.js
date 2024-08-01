let userName = document.querySelector('#name');
let img = document.querySelector('#img');
let textComent = document.querySelector('#textcoment');
let button = document.querySelector('button');
let list = document.querySelector('#list');
let no = document.querySelector('#no');
let yes = document.querySelector('#yes');
let nameno = document.querySelector('.nameno');
let li = document.querySelector('li');
let h4 = document.querySelector('h4');

function createComment() {
let valueInputComment = textComent.value;
let valueInputImg = img.value;
let valueName = userName.value;

no.addEventListener('change', function() {
	if (no.checked == true) {
		nameno.classList.remove('nameno');
		nameno.classList.add('hidden');	
		document.querySelector('#name').value = '';
}
});

yes.addEventListener('change', function() {
	if (yes.checked == true) {
		nameno.classList.remove('hidden');
		nameno.classList.add('nameno');
	}
});

h4.innerHTML = ``;

if (valueInputComment == '') {
	h4.innerHTML = `Вы не заполнили поле комментарий!`
	return;
}



if (valueName == '') {
	valueName = 'username';
} 

let checkValueName = valueName.toUpperCase().slice(0,1) + valueName.toLowerCase().slice(1, valueName.length);
let newLi = document.createElement('li');

let date = new Date();

if (valueInputImg == '') {
	valueInputImg = defaultAvatar();
}

let newImg = `<img src="${valueInputImg}" alt="">`;
let newName = `<h3>${checkValueName}</h3>`;
let checkValueInputComment = checkSpam(valueInputComment);
newLi.innerHTML = newImg + newName + date + '<p>' + checkValueInputComment + '</p>';
list.append(newLi);
let newHr = document.createElement('hr');
newLi.after(newHr);
document.querySelector('#textcoment').value = '';
document.querySelector('#name').value = '';
document.querySelector('#img').value = '';
}

function checkSpam(str) {
	let newValueText = str;
	if (str.toLowerCase().includes('viagra') == true) {
		newValueText = str.replace(/viagra/gi, '***');
	}
	if (str.toLowerCase().includes('xxx') == true) {
		newValueText = str.replace(/xxx/gi, '***');
	}
	if ((str.toLowerCase().includes('viagra') == true) && (str.toLowerCase().includes('xxx') == true)) {
		newValueText = str.replace(/viagra/gi, '***');
		newValueText = newValueText.replace(/xxx/gi, '***');
	}
	return newValueText;
}

function defaultAvatar() {
	let randomNumber = Math.floor(Math.random()*6) + 1;
	let adress = `https://anseka.github.io/hw_week12_2/assets/avatar${randomNumber}.png`;
	return adress;
}


button.addEventListener('click', createComment);