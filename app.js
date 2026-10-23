const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('DevOps CI/CD Pipeline Deployed Successfully!');
});

app.get('/status', (req, res) => {
  res.json({ status: 'running' });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
