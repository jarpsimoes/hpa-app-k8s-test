const express = require('express');
const app = express();
const winston = require("winston");
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  transports: [
    new winston.transports.Console()
  ],
});

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Usage:
app.get('/service', async (req, res) => {
	await sleep(2000); // Sleep for 2 seconds
	logger.info("service called /service");
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(JSON.stringify({ status: 'OK', time: "static 2000" }));
});

app.get('/highservice/:time', async (req, res) => {
	await sleep(req.params.time); // Sleep for 2 seconds
	logger.info("service called /highservice/" + req.params.time);
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(JSON.stringify({ status: 'OK', time: req.params.time }));
});

app.get('/health', (req, res) => {
	logger.info("service called /health");
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(JSON.stringify({ status: 'UP' }));
});

app.get('/', (req, res) => {
	logger.info("service called /health");
	res.setHeader('Content-Type', 'application/json');
	res.status(200).send(JSON.stringify({ status: 'UP' }));
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});