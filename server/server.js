let express = require('express');
let app = express();
const port = 5001;
app.use(express.json());

// list of calculations, array of objects
    // number1:
    // operator:
    // number2:
    // result:
let calcList = [];

app.use(express.static('server/public'));

// post request getting calc object from client
app.post('/calc', (req,res) => {
    console.log('get a POST request.', req.body);;
    let calc = req.body;
    // switch case does calculation and gets calc.result depending on operation submitted
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

// get response of calcList
app.get('/calc', function(req, res){
    console.log('request for /calc was made');
    res.send(calcList)
})



 // listening on port 5001
app.listen(port, function() { 
    console.log('listening on port', port);
})