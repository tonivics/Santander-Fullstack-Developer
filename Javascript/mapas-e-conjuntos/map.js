function getUsers(map){
    let commonUser = [];
    for([key, value] of map){
        if(value === 'User'){
            commonUser.push(key);
        }
    }

    return commonUser;
}

const users = new Map();

users.set('Antonio','Admin');
users.set('Ariane','User');
users.set('Marcos','User');
users.set('Slyssas','Admin');
users.set('Cleia','User');

console.log(getUsers(users));

console.log(users.length);