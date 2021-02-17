const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 5000

// settings
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middlerwares

// routes
app.use(require('./routes/index'));

// static files
app.use(express.static(path.join(__dirname, 'public')))

// listing the server
app.listen(PORT, () => console.log(`Listening on ${ PORT }`))