"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const passport = require("passport");
var router = express.Router();
const Sqlconnection_1 = require("../Sqlconnection");
//check route is working
router.get('/', (req, res) => {
    Sqlconnection_1.default.oneOrNone('SELECT * FROM users WHERE _id = $1', [1])
        .then(function (data) {
        // success;
        res.status(200).json(data);
    })
        .catch(function (error) {
        // error;
        res.status(500).json("route not working!");
    });
});
//route for signup
router.post('/signup', (req, res) => {
    Sqlconnection_1.default.one('INSERT INTO users(name, email ,password) VALUES($1, $2) RETURNING _id', [req.body.name, req.body.email, req.body.password])
        .then(data => {
        console.log(data._id); // print new user id;
        res.status(200).json('added');
    })
        .catch(error => {
        console.log('ERROR:', error); // print error;
        res.status(401).json('err');
    });
});
//login Route
router.post('/login', passport.authenticate('local'), (req, res) => {
    res.status(200).json(req.user);
});
//logout route
router.post('/logout', (req, res) => {
    req.logout();
    res.status(200).json("succefully logout!");
});
//athenticate user
router.post('/authenticate', (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
    }
    else {
        res.status(401).json('user is not logged in!');
    }
});
exports.default = router;
//# sourceMappingURL=users.js.map