const express = require('express');
const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))

const route = require('./api/index');
const auth = require('./api/auth');
const test = require('./api/test');

app.use(express.static('public'))

// Routes
app.use('/', route);
app.use('/auth', auth);
app.use('/test', test);

async function startServer() {
    app.listen(4000, err => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("Server running on port 4000!");
    });
}

// Run the async function to start our server
startServer();