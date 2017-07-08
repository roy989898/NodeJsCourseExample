let arr = ['Jerry', 'Anna', 'A', 'BB'];

/*arr.forEach((name) => {
    console.log(name);
});*/
let newNameArray = arr.filter(name => {
    if (name.length > 3)
        return true;
    else
        return false
});


newNameArray.forEach((name) => {
    console.log(name);
});