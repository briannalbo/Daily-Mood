//sets all requirements
const express = require('express');
const path = require('path');

const session = require('express-session');
const exphbs = require('express-handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const sequelize = require('./config/connection');

const helpers = require('./utils/auth');

const router = require('./controllers');
//sets port for localhost
const PORT = process.env.PORT || 3003;

//sets express app 
const app = express();

const sess = {
    secret: 'security',
    cookie: {
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



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () =>
      console.log(
        `\nServer running on port ${PORT}. listeninnnng`
      )
    );
  });