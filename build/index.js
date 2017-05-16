"use strict";

var app = require('./server/app').app;
var PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
	console.log('File metadata microservice listening on port:', PORT);
});