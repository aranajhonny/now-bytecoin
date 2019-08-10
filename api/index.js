const util = require('util');
const exec = util.promisify(require('child_process').exec);

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', async (req, res) => {
  const { stdout, stderr } = await exec('lsb_release -a');
  console.log('stdout:', stdout);
  console.log('stderr:', stderr);
  res.send('Hello world\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);