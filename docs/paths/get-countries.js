module.exports = {
    get:{
        tags: ['Countries'],
        description: "Get Country",
        operationId: 'getCountriess',
        parameters:[],
        responses:{
            '200':{
                description:"Country were obtained",
                content:{
                    'application/json':{
                        schema:{
                            type: "array", // data type
                            items: {type:"string"},
                            example:["Canada", "Spain"]
                        }
                    }
                }
            }
        }
    }
}