let express = require('express');
let app = express();
const port = 5001;
app.use(express.json());

app.use(express.static('server/public'));

app.listen(port, function() { 
    console.log('listening on port', port);
})