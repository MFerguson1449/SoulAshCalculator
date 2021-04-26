const calculatorButtons = document.querySelectorAll('.calculatorButton');
const currentiLevelButtons = document.querySelectorAll('.currentiLevelButton');
const desirediLevelButtons = document.querySelectorAll('.desirediLevelButton');

calculatorButtons.forEach((calculatorButton) => {
    calculatorButton.addEventListener('click', selectButton);
});

function selectButton(e) {
    clearButton(e);
    let selectedButton = e.target;
    selectedButton.classList.add('currentlySelectedButton');
};

function clearButton(e) {
    if(e.target.classList.contains('currentiLevelButton')) {
        currentiLevelButtons.forEach((currentiLevelButton) => {
            currentiLevelButton.classList.remove('currentlySelectedButton')
        });
    } else {
        desirediLevelButtons.forEach((desirediLevelButton) => {
            desirediLevelButton.classList.remove('currentlySelectedButton')
        });
    };
};