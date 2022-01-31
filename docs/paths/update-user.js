module.exports = {
    put:{
        tags:['Users'],
        description: "Update User",
        operationId: "updateUser",
        parameters:[
            {
                name:"id",
                in:"path",
                schema:{
                    $ref:"#/components/schemas/id"
                },
                required:true,
                description: "Id of User to be updated"
            }
        ],
        responses:{

            '200':{
                description: "User updated successfully"
            },
            '404':{
                description: "User not found"
            },
            '500':{
                description: "Server error"
            }
            
        }
    }
}