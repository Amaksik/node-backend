const fs = require('fs');



module.exports.countrydbread = () =>{
    let rawjson = fs.readFileSync('data_countries.json');
    let countries = JSON.parse(rawjson);
    
    return countries;
};

module.exports.countrydbwrite = (countries) =>{
    let data = JSON.stringify(countries);
    fs.writeFileSync('data_countries.json', data);
};


