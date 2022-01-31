module.exports = {
    get:{
        tags:['Users'],
        description: "Get user",
        operationId: "getUser",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
            }
        ],
        responses:{
            '200':{
                description:"Ok",
                content:{
                    'application/json':{
                        schema:{
                            $ref:"#/components/schemas/User"
                        }
                    }
                }
            },
            '404':{
                description: "User is not found",
            }
        }
    }
}