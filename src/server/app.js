const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
const connection = mysql.createConnection({
	host     : process.env.RDS_HOSTNAME,
	user     : process.env.RDS_USERNAME,
	password : process.env.RDS_PASSWORD,
	port     : process.env.RDS_PORT,
	database : process.env.RDS_DB_NAME
});

app.set('port', process.env.PORT || 4000);

app.get('/productTab', cors(), (req, res, next) => {
    connection.query('select * from productTab', (err, rows) => {
		if (err) console.log('Error', err);
        res.set('Content-Type', 'application/json');
		res.send(rows);
	});
});

app.get('/rankingTab', cors(), (req, res, next) => {
    connection.query('select * from rankingTab', (err, rows) => {
        if (err) console.log('Error', err);
        res.set('Content-Type', 'application/json');
        res.send(rows);
    });
});

app.listen(app.get('port'), () => {
	console.log('server connect');
});