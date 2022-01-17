var dbservice = require("./dbservice_users")

let users = dbservice.dbread();

module.exports.getUsers = () =>{
    return users
}

module.exports.getUserById= (id)=> {

    var user = users.find(item => item.id == id);
    return user;
}

module.exports.getUserId= (username, usersurname) => {
    var user = users.find(item => item.name === username && item.surname === usersurname);
    return user.id;
}
module.exports.autorize= (useremail, userpass) => {
    var user = users.find(item => item.email === useremail && item.password === userpass);
    return user.id;
}

module.exports.addUser= (user)=> {
    
    user.id = users.length + 1;

    users.push(user)

    dbservice.dbwrite(users);
}

module.exports.removeUser= (id)=> {
    
    var removeIndex = users.map(item => item.id).indexOf(parseInt(id));

    ~removeIndex && users.splice(removeIndex, 1);

    dbservice.dbwrite(users);

}