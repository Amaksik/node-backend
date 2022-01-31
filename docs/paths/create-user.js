
module.exports = {
    post:{
        tags:['Users'],
        description: "Create user",
        operationId: "createUser",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/User'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "User created"
            },
            '409':{
                description: 'Already exists'
            },
            '500':{
                description: 'Server error'
            }
        }
    }
}