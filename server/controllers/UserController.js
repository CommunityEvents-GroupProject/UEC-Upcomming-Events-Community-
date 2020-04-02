const { User } = require('../models');
const { decrypt } = require('../helpers/bcrypt');
const { generateToken } = require('../helpers/jwt');
const { OAuth2Client } = require('google-auth-library');

class UserController {
    static register(req, res, next) {
        let { username, email, password } = req.body;
        let created = { username, email, password };
        User.findOne({
            where: {
                email
            }
        })
            .then(newUser => {
                if(newUser) {
                    return next({
                        name: 'Forbidden',
                        errors: { message: 'email already exists !'}
                    })
                } else {
                    return User.create(created);
                }
            })
            .then(result => {
                const payload = {
                    id: result.id,
                    email: result.email
                }
                const token = generateToken(payload);
                return res.status(201).json({
                    id: result.id,
                    email: result.email,
                    token
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static login(req, res, next) {
        let { email, password } = req.body;
        User.findOne({
            where: {
                email
            }
        })
            .then(foundUser => {
                const payload = {
                    id: foundUser.id,
                    email: foundUser.email
                }
                const token = generateToken(payload);
                if(foundUser) {
                    let verify = decrypt(password, foundUser.password);
                    if(verify) {
                        return res.status(200).json({
                            msg: 'User successfully login',
                            token
                        })
                    } else {
                        return next({
                            name: 'BadRequest',
                            errors: { message: 'Invalid email/password'}
                        })
                    }
                } else {
                    return next({
                        name: 'BadRequest',
                        errors: { message: 'Invalid email/password'}
                    })
                }
            })
            .catch(err => {
                return next({
                    name: 'NotFound',
                    errors: { message: 'User Not Found'}
                })
            })
    }

    static googleSignIn(req, res, next) {
        const client = new OAuth2Client(process.env.CLIENT_ID);
        const email = {};
        const token = req.headers.token;
        client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID
        })
            .then(ticket => {
                let payload = ticket.getPayload();
                email.payload = payload.email;
                return User.findOne({
                    where: {
                        email: email.payload
                    }
                })
            })
            .then(data => {
                if(data) {
                    return data;
                } else {
                    return User.create({
                        // username: 
                        email: email.payload,
                        password: process.env.MANUAL_PWD
                    })
                }
            })
            .then(data => {
                const payload = {
                    id: data.id,
                    email: data.email
                }
                const token = generateToken(payload);
                return res.status(201).json(token)
            }).catch(err =>{
                return next(err)
            })
    }
}

module.exports = UserController;