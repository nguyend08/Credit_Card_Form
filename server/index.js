const express = require('express');
const app = express();
const PORT = process.env.PORT || 4002;
const path = require('path');

app.use(express.static(`${__dirname}/../dist`))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
