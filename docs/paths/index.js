const getUsers = require('./get-users');
const getUser = require('./get-user');
const createUser = require('./create-user');
const updateUser = require('./update-user');
const deleteUser = require('./delete-user');
const autorizeUser = require('./autorize-user');
const getCountries = require('./get-countries');
const createCountry = require('./create-country');

module.exports = {
    paths:{
        '/users':{
            ...getUsers,
            ...createUser
        },
        '/users/{id}':{
            ...getUser,
            ...updateUser,
            ...deleteUser
        },
        '/users/autorize':{
            ...autorizeUser
        },
        '/countries':{
            ...getCountries,
            ...createCountry
        }
    }
}