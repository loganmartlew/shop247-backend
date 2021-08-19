// Load module alias to register custom path aliases
require('module-alias/register');

const express = require('express');
const { port } = require('@config');

// IIFE to enable async/await, though intended node version supports top-level await
(async () => {
  console.log('\nInitializing app...\n');

  const app = express();

  await require('./loaders')(app);

  app.listen(port, () => {
    console.log('--------------------------------------------------');
    console.log(`           Server running on port: ${port}           `);
    if (process.env.NODE_ENV === 'development') {
      console.log(`Base endpoint of the app is: http://localhost:${port}`);
    }
    console.log('--------------------------------------------------');
  });
})();
