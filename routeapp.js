
const express = require('express');
const app = express();
const logger = require('./logger');
const people = require('./routes/peoplerouter');

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())
app.use(logger);

app.use('/api/people', people);



//  app.get('/newApi', (req, res) => {
//     res.send(' you are connected');
// });

app.listen('3010', () => {
    console.log('server started listening on port 3010');
})