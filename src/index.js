const path = require('path');
const express = require('express');
const morgan = require('morgan');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');

//Connect to DB
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(methodOverride('_method'));

//XMLHTTPRequest, fetch, axios,

app.use(morgan('combined'));
//template engine
app.engine(
  '.hbs',
  engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    },
  })
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));
console.log('PATH: ', path.join(__dirname, 'resources', 'views'));

//Home, search, contact

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
