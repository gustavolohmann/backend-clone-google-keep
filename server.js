const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
const helmet = require('helmet');

app.use(express.json());



const allowedOrigins = [
    'http://localhost:3000',
];

const corsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Origem não permitida'), false);
        }
    },
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(helmet());


const note = require('./routes/note');
const user = require('./routes/user');

app.use('/user', user);
app.use('/note', note);

app.listen(port, () => {
    console.log('Server is running on port 5000');
});