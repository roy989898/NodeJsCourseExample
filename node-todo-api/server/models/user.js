
const mongoose = require('../db/mongoose').mongoose;
const validator = require('validator');
const jwt = require('jsonwebtoken');
const _ = require('lodash');

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

/* {
    "__v": 1,
    "email": "roy787@sxddddddddddxxs.com",
    "password": "sdfsdsdfsdfssss",
    "_id": "597bf8debaa9770ef018f000",
    "tokens": [
        {
            "access": "auth",
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTdiZjhkZWJhYTk3NzBlZjAxOGYwMDAiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTAxMjk2ODYyfQ.i29rN8wzwZvcYVeHjszaCePcmePbwk-4vIO1gzH6Ns0",
            "_id": "597bf8debaa9770ef018f001"
        }
    ]
} */
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

let User = mongoose.model('User', UserSchema);



module.exports = {
    User
};