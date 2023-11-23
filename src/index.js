const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override');
const app = express();
const port = 3000;
const route = require('./routes/index ');
const db = require('./config/db');
//connect db
db.connect();
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());
app.use(methodOverride('_method'));
//template engine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.use(morgan('combined'));
app.set('views', path.join(__dirname, 'resources', 'views'));
app.use('/src/public/css', express.static('src/public/css', { extensions: ['css'] }));

route(app);
app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});
