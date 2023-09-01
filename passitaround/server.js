const express = require('express');
const app = express();
const port = 3000; // You can use any port you prefer

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get('/', (req, res) => {
  res.send(`
    <h1>99 Bottles of Beer on the Wall</h1>
    <a href="/98">Take one down, pass it around</a>
  `);
});

app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  const nextBottleCount = numberOfBottles - 1;

  let link = '';
  if (nextBottleCount > 0) {
    link = `<a href="/${nextBottleCount}">Take one down, pass it around</a>`;
  }

  const startOverLink = '<a href="/">Start over</a>';

  res.send(`
    <h1>${numberOfBottles} Bottles of Beer on the Wall</h1>
    ${link}
    ${startOverLink}
  `);
});

//Adding Random Bugs:

app.get('/:bug_count', (req, res) => {
  let bugCount = parseInt(req.params.bug_count);

  // Randomly increase bug count
  if (Math.random() < 0.2) {
    bugCount += Math.floor(Math.random() * 10);
  }

  const nextBugCount = bugCount - 1;

  let link = '';
  if (nextBugCount > 0) {
    link = `<a href="/${nextBugCount}">Patch one, patch it around</a>`;
  }

  const startOverLink = '<a href="/">Start over</a>';

  res.send(`
    <h1>${bugCount} Little Bugs in the Code</h1>
    ${link}
    ${startOverLink}
  `);
});
