let express = require('express');
let app = express();
const port = 5001;
app.use(express.json());

let calcList = [];

app.use(express.static('server/public'));

app.post('/calc', (req,res) => {
    console.log('get a POST request.', req.body);;

    let calc = req.body;
    calcList.push(calc);
    res.sendStatus(201);
})






app.listen(port, function() { 
    console.log('listening on port', port);
})