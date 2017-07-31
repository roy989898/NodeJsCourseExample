const SHA256 = require('crypto-js').SHA256;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

let password = '123abc';

bcrypt.genSalt(11, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('The hashed', hash);
    });
});

let hashedPassWord = '$2a$11$i8dR3swxMkOjuBkHqieWEO/korqD7T5PquRkxj5gbowDsPdq9f/pu';

bcrypt.compare(password, hashedPassWord, (err, res) => {
    console.log('result', res);
});
/* let data = {
    id: 10
};

let token = jwt.sign(data, '123abc');
console.log('Token', token);

let decoded = jwt.verify(token, '123abc');
console.log('decoded', decoded); */

/* let message = 'I am user number 3';
let hash = SHA256(message).toString();

console.log('Message: ' + message);
console.log('HASH: ' + hash);

let data = {
    id: 4
};

let token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'someseacret').toString()
};

// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();

let resultHash = SHA256(JSON.stringify(token.data) + 'someseacret').toString();

if (token.hash === resultHash) {
    console.log('Data was not cgange');

} else {

    console.log('Data was  cgange,Dont trust');

}  */

