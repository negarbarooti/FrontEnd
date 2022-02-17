const express = require('expresss');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(5500, () => console.log(`server started on 5500`));
