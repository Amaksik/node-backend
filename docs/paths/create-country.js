
module.exports = {
    post:{
        tags:['Countries'],
        description: "Create Country",
        operationId: "createCountry",
        parameters:[],
        requestBody: {
            content:{
                'application/json': {
                    schema:{
                        $ref:'#/components/schemas/Country'
                    }
                }
            }
        },
        responses:{
            '201':{
                description: "Country created"
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