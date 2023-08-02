let express = require('express');
let app = express();
const port = 5001;
app.use(express.json());

let calcList = [];

app.use(express.static('server/public'));

app.post('/calc', (req,res) => {
    console.log('get a POST request.', req.body);;

    let calc = req.body;

    let result;

    switch (calc.operator) {
        case "+":
            result = calc.number1 + calc.number2;
            break;
        case "-":
            result = calc.number1 - calc.number2;
            break;
        case "*":
            result = calc.number1 * calc.number2;
            break;
        case "/":
            result = calc.number1 / calc.number2;
            break;
        default:
            console.log("Invalid operator");
            return;
    }
        calc.result = result;


    calcList.push(calc);
    res.sendStatus(201);
})

app.get('/calc', function(req, res){
    console.log('request for /calc was made');
    res.send(calcList)
})




app.listen(port, function() { 
    console.log('listening on port', port);
})