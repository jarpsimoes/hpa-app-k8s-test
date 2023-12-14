const express = require('express');
const app = express();


function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}

// Usage:
app.get('/lowservice', async (req, res) => {
	await sleep(2000); // Sleep for 2 seconds
	res.send('Hello Low Service!');
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});