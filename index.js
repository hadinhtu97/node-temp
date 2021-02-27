const express = require('express');

const app = express();

app.use(express.static(__dirname + '/public/'))

app.route('/').get((req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.use((req, res) => {
    res.status(404);
    res.send('Not Found')
})

app.listen(3000, () => {
    console.log('Listening in port 3000!');
})