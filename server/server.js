const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();
const { PORT, DEV_PORT } = process.env;
const port = PORT || DEV_PORT;

// MIDDLEWARE
app.use(express.static(path.join(__dirname, '../build')));
app.use(express.json());

// LISTEN
app.listen(port, () => {
	console.log(`${port} ducks marching to Rome...`);
});

// ENDPOINTS

// ERROR
app.use((err, req, res, next) => {
	if (!err) next();
	let statusCode = err.statusCode || 500;
	let message = err.message || 'Internal Server Error.';

	res.status(statusCode).send(message);
});

// RETURN STATIC FILE
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../build', 'index.html'));
});