
const mongoose = require('../db/mongoose').mongoose;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');
const bcrypt = require('bcryptjs');
const constants = require('./../../constants');

let UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not a valid email'
        }
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});


UserSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();

    return _.pick(userObject, ['_id', 'email']);
};

UserSchema.methods.generateAuthTokenAndSave = function () {
    let user = this;
    let access = 'auth';
    let token = jwt.sign({ _id: user._id.toHexString(), access }, 'abc123').toString();

    user.tokens.push({ access, token });

    return user.save().then(() => {
        return token;

    });


};

UserSchema.statics.findByToken = function (token) {
    let User = this;
    let decoded;

    try {
        decoded = jwt.verify(token, 'abc123');

    } catch (e) {
        // console.log(e);
        return new Promise((resolve, reject) => {
            reject('Token verify fail');
        });

    }

    return User.findOne({
        _id: decoded._id,
        'tokens.token': token,
        'tokens.access': 'auth'


    });

};

UserSchema.pre('save', function (next) {
    let user = this;

    // because we will save the hashed password,if we hash the password every time save,than  we will hash the hashed password,igt is not correct,sho we need to only 
    // hash the new modified password,it is not hash already
    if (user.isModified('password')) {
        // hash the password here
        bcrypt.hash(user.password, constants.BC_SALT, function (err, hash) {
            user.password = hash;
            next();
        });

    } else {
        next();
    }
});

let User = mongoose.model('User', UserSchema);



module.exports = {
    User
};