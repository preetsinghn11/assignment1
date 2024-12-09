
const express = require('express');
const passport = require('passport');
const session = require('express-session');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();

// Initialize the database connection
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// For integration of Passport.js  , first we will install the necessary packages: passport, passport-local, and express-session. 
// Then, we will configure Passport in a separate file (config/passport.js) where we will define the authentication strategy (with LocalStrategy for username/password login). 
// In this file, we'll also serialize and deserialize the user to manage the session. Afterward, in our main app file (app.js), we import and initialize Passport using passport.initialize() and passport.session().
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
