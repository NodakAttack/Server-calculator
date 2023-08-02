console.log('script sourced =)');

// operator pushed
let operator = null;

// onClick of = button
function submitForm(event) {
    event.preventDefault();
    let number1 = Number(document.querySelector("#number1").value);
    let number2 = Number(document.querySelector("#number2").value);

        // object to be passed to server
    let operationToAdd = {
        number1: number1,
        operator: operator,
        number2: number2,
    }

        // reset input, pass object to server via post
    axios.post('/calc', operationToAdd).then((response) => {
        console.log(response);
        document.querySelector("#number1").value = '';
        document.querySelector("#number2").value = '';
        getCalcs();
    }).catch((error) => {
        console.log(error);
        alert('Something went wrong 1')
    })
    console.log('operation ', operationToAdd);
}

    // get request of calcList from server
function getCalcs() {
    axios.get('/calc').then((response) => {
        console.log('success', response);
        let calcsFromServer = response.data;
            // renderToDOM function of calcList from server
        renderToDOM(calcsFromServer)
        console.log('calcs from server', calcsFromServer);
    }).catch((error) => {
        console.log(error);
        alert("Something went wrong 2");
    })
}

    // Displays recent result and list of calculations
function renderToDOM(calcs) {
    let outputList = document.querySelector('#output');
    outputList.innerHTML = `<h2>${calcs.at(-1).result}</h2>`

    for (let calc of calcs) {
        outputList.innerHTML += `
            <p>${calc.number1} ${calc.operator} ${calc.number2} = ${calc.result}</p>
        `
    }
}

// handles which operator is clicked, setting button color to red and all others to default
function operatorClick(operatorFromHTML) {
        // operator selected, sent to operationToAdd
    operator = operatorFromHTML;
        // all operator buttons put in an array
    const operatorButtons = document.querySelectorAll(".operator");
        // listener event added to buttons if clicked
    operatorButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            // set the background color of all buttons 
            operatorButtons.forEach(button => {
                button.style.backgroundColor = '';
            });
            // change the listener clicked 
            event.target.style.backgroundColor = 'red';
        });
    });
}

// outdated function to change button color

// function changeButtonColor(button, color) {
//     button.style.backgroundColor = color;
// }
