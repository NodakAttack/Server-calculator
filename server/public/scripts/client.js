console.log('script sourced =)');

let operator = null;

function submitForm(event){
    event.preventDefault();
    let number1 = document.querySelector("#number1").value;
    let number2 = document.querySelector("#number2").value;

    let operationToAdd = {
        number1: number1,
        operator: operator,
        number2: number2,
    }

    
    console.log('operation ', operationToAdd);
}

function operatorClick(operatorFromHTML){
    operator = operatorFromHTML;
}