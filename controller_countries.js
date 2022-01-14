var dbservice = require("./dbservice_countries")

let countries = dbservice.countrydbread();

module.exports.getcountries = () =>{
    return countries
}

module.exports.addcountry= (country)=> {

    countries.push(country)

    dbservice.countrydbwrite(countries);
}

//ToDO add method for removing countries
/*
module.exports.removecountry= (id)=> {
    
    var removeIndex = countries.map(item => item.id).indexOf(parseInt(id));

    ~removeIndex && countries.splice(removeIndex, 1);

    dbservice.dbwrite(countries);

}*/