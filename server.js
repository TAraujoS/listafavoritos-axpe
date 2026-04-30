const express = require('express');
const next = require('next');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const nextApp = next({ dev });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.all('*', (req, res) => {
    return handle(req, res);
  });

  app.listen(port, (err) => {
    if (err) {
      console.error('Server failed to start:', err);
      process.exit(1);
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});