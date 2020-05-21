const express = require('express')
const port = 3000
const router = require('./router')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(router);

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))