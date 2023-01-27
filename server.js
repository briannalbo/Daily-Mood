//sets all requirements
const express = require('express');
const path = require('path');

const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const helpers = require('./utils/helpers');

const router = require('./controllers/api');
//sets port for localhost
const PORT = process.env.PORT || 3003;

//sets express app 
const app = express();

const sess = {
    secret: 'security',
    cookie: {
      // Stored in milliseconds
      maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
      db: sequelize,
    }),
  };

  app.use(session(sess));

  const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//enables middleware for parsing data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/api', api);
app.use(router);

app.use(express.static('public'));


//get request for notes page
app.get('/mood', (req, res) => 
    res.sendFile(path.join(__dirname, './public/mood.html'))
);
//get request for homepage
app.get('/*', (req, res) => 
    res.sendFile(path.join(__dirname, './views/login.handlebars'))
);







// app.listen(3000)
// app.listen(PORT, () => {
// console.log(`im here`)
// }
// );

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(
        `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
      )
    );
  });