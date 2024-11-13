const input = document.getElementsByTagName('input')[0];
const button = document.getElementsByClassName('button')[0];
const taskList = document.getElementById('task-list');

button.addEventListener('click', function () {
    const newAnswer = input.value.trim();
    if (newAnswer !== '') {
        const textAnswer = document.createElement('li')
        textAnswer.textContent = newAnswer;
        const buttonDone = document.createElement('button')
        buttonDone.textContent = 'Complete';
        buttonDone.onclick = function () {
            textAnswer.style.textDecoration = 'line-through';
        }

        const buttonUndone = document.createElement('button')
        buttonUndone.textContent = 'Delete';
        buttonUndone.onclick = function () {
            taskList.removeChild(textAnswer);
        }

        textAnswer.appendChild(buttonDone);
        textAnswer.appendChild(buttonUndone);

        taskList.appendChild(textAnswer);
        input.value = '';
    } else {
        alert('Please Enter The Task!');
    }


})

