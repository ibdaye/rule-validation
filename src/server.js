require('dotenv').config()

import fs from 'fs';
import path from 'path';
import express from 'express';
import validator from 'validator';
import expressWinston from 'express-winston';
import bodyParser from 'body-parser';
import winston from 'winston';
import logger from './utils/logger';

const app = express();

const port = process.env.PORT || 3001
const env = "dev"

app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(bodyParser.json());
app.use(expressWinston.logger({
	transports: [
		new winston.transports.Console({
			json: true,
			colorize: true
		})
	],
	meta: true,
	msg: "HTTP {{req.method}} {{req.url}}",
	expressFormat: true,
	colorize: false,
	ignoreRoute: function (req, res) {
		return false;
	}
}));

app.listen(port, err => {
	if (err) {
		logger.error(err);
		process.exit(1);
	}
	fs.readdirSync(path.join(__dirname, 'resources')).map(file => {
		require('./resources/' + file)(app);
	});

	logger.info(
		`app is now running on port ${port} in ${env} mode`
	);
});

module.exports = app;