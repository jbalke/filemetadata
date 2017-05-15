"use strict";
require('babel-register');
 
const app = require('./server/app').app;
const PORT = process.env.PORT || 8000;
 
app.listen(PORT, function() {
	console.log('File metadata microservice listening on port:', PORT);
});