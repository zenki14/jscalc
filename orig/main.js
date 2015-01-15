//Declare Vars
var inputField1, inputField2, addButton, subtractButton, multiplyButton, divideButton, output, inputValue1, inputValue2;


//Set up Vars
inputField1 = document.getElementById('num_one');
inputField2 = document.getElementById('num_two');
addButton = document.getElementById('addBtn');
subtractButton = document.getElementById('subtractBtn');
multiplyButton = document.getElementById('multiplyBtn');
divideButton = document.getElementById('divideBtn');
output = document.getElementById('answer');




// console.log('addButton', addButton);
// console.log('subtractButton', subtractButton);
// console.log('multiplyButton', multiplyButton);
// console.log('divideButton', divideButton);
// console.log('Input1', inputField1);
// console.log('Input2', inputField2);
// console.log('Output', output);

addButton.onclick = function () {
  // console.log('Button click');
  inputValue1 = Number(inputField1.value);
  // console.log(inputValue1);
  inputValue2 = Number(inputField2.value);
  // console.log(inputValue2);
  output.innerHTML = inputValue1 + inputValue2;
  // console.log(output.innerHTML);
  
 }

subtractButton.onclick = function () {
  inputValue1 = Number(inputField1.value);
  inputValue2 = Number(inputField2.value);
  output.innerHTML = inputValue1 -= inputValue2;
 }

multiplyButton.onclick = function () {
  inputValue1 = Number(inputField1.value);
  inputValue2 = Number(inputField2.value);
  output.innerHTML = inputValue1 * inputValue2;
}

divideButton.onclick = function () {
  inputValue1 = Number(inputField1.value);
  inputValue2 = Number(inputField2.value);
  output.innerHTML = inputValue1 /= inputValue2;
}