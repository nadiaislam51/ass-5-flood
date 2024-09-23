// get InputField Value By Id
function getInputFieldValueById(id){
    const inputText = document.getElementById(id).value;
    const inputValue = Number(inputText);
    return inputValue;
}

// get innerText value by Id
function getTextValueById(id){
    const text = document.getElementById(id).innerText;
    const textValue = Number(text);
    return textValue;
}

// set value inside the element by Id
function setTextElementById(id, balance){
    let count = 0;
    count = count + balance;
    document.getElementById(id).innerText = count;
}

// show screen
function showScreen(id){
    document.getElementById(id).classList.remove('hidden');
}

// hide screen
function hideScreen(id){
    document.getElementById(id).classList.add('hidden');
}
