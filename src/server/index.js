const express = require('express');
const app = express();
const testsRoute = require('./routes/tests');

app.use('/api/tests', testsRoute);

app.listen(3001, () => {
    console.log('Server läuft auf Port 3001');
});
