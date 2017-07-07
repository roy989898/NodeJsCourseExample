let getUser = (id, callback) => {

    let user = {
        id,
        name: 'Roy'
    };

    setTimeout(() => {
        callback(user);
    }, 4000);


};


getUser(9, (user) => {
    console.log(user);
});