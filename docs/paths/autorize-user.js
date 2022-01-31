
module.exports = {
    post:{
        tags:['Users'],
        description: "Autorize user",
        operationId: "autorizeUser",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Credentials'
                    }
                }
            }
        },
        responses:{
            '200':{
                description: "OK"
            },
            '400':{
                description: 'Credentials are not provided'
            },
            '404':{
                description: 'User not found'
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}