console.log('script sourced =)');

let operator = null;

function submitForm(event){
    event.preventDefault();
    // convert values to number?
    let number1 = Number(document.querySelector("#number1").value);
    let number2 = Number(document.querySelector("#number2").value);

    let operationToAdd = {
        number1: number1,
        operator: operator,
        number2: number2,
    }

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

function operatorClick(operatorFromHTML){
    operator = operatorFromHTML;
}

function getCalcs(){
    axios.get('/calc').then((response) => {
        console.log('success', response);
        let calcsFromServer = response.data;
        renderToDOM(calcsFromServer)
        console.log('calcs from server', calcsFromServer);
    }).catch((error) => {
        console.log(error);
        alert("Something went wrong 2");
    })
}

function renderToDOM(calcs){
    let outputList = document.querySelector('#output');
    outputList.innerHTML = `<h2>${calcs.at(-1).result}</h2>`

    for(let calc of calcs) {
        outputList.innerHTML += `
            <p>${calc.number1} ${calc.operator} ${calc.number2} = ${calc.result}</p>
        `
    }
}
