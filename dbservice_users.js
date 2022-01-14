const fs = require('fs');



module.exports.dbread = () =>{
    let rawjson = fs.readFileSync('data_users.json');
    let users = JSON.parse(rawjson);
    
    return users;
};

module.exports.dbwrite = (users) =>{
    let data = JSON.stringify(users);
    fs.writeFileSync('data_users.json', data);
};


