const assert = require('assert');
const http = require('http');
const app = require('./app');

const server = app.listen(0, () => {
  const port = server.address().port;
  http.get(`http://localhost:${port}/status`, (res) => {
    assert.strictEqual(res.statusCode, 200);
    server.close(() => {
      console.log('Test Passed: Server returned status 200');
      process.exit(0);
    });
  }).on('error', (err) => {
    console.error('Test Failed:', err);
    process.exit(1);
  });
});
