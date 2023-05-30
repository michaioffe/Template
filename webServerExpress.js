const express = require('express');
const app = express();

app.use(express.static('public'));

function generatePrimes(n) {
    const primes = [];
    let num = 2;
  
    while (primes.length < n) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
  
    return primes;
  }

app.get('/api/numbers/prime/display', (req, res) => {
    // Generate the first 10 prime numbers
    const primes = generatePrimes(10);
    let arr = "";
    primes.forEach((el) => {
      arr += `<div>${el}</div>`;
    });
  
    // Render the HTML page with the prime numbers
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          body {
            display: flex;
            justify-content: space-around;
          }
          div {
            width: fit-content;
          }
        </style>
        <title>Display</title>
      </head>
      <body>${arr}</body>
    </html>
    `;
    res.send(html);
  });
  
  function isPrime(num) {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  }

app.set('view engine', 'ejs');
app.set('views', __dirname + '/public');

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

  