const mysql = require('mysql');
const express = require('express');
const cors = require('cors');
const app = express();
const connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	database: 'test1'
});

app.set('port', 4000);

app.get(['/', '/index.html'], (req, res, next) => {
    res.send('api server ok');
});

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