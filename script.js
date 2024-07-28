let userName = document.querySelector('#name');
let img = document.querySelector('#img');
let textComent = document.querySelector('#textcoment');
let button = document.querySelector('button');
let list = document.querySelector('#list');


function createComment() {
let valueInputComment = textComent.value;
let valueInputImg = img.value;
let valueName = userName.value;
let checkValueName = valueName.toUpperCase().slice(0,1) + valueName.toLowerCase().slice(1, valueName.length);
let newLi = document.createElement('li');
let newImg = `<img src="${valueInputImg}" alt="">`;
let newName = `<h3>${checkValueName}</h3>`;
let checkValueInputComment = checkSpam(valueInputComment);
newLi.innerHTML = newName + newImg + '<p>' + checkValueInputComment + '</p>';
list.append(newLi);
document.querySelector('#textcoment').value = '';
}

button.addEventListener('click', createComment);

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