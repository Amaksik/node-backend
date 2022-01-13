const fs = require('fs');



module.exports.dbread = () =>{
    let rawjson = fs.readFileSync('db.json');
    let users = JSON.parse(rawjson);
    
    return users;
};

module.exports.dbwrite = (users) =>{
    let data = JSON.stringify(users);
    fs.writeFileSync('db.json', data);
};


