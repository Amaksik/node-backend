module.exports = {
    components: {
      schemas: {
        // id model
        id: {
          type: "string", // data type
          example: "1", // example of an id
        },
        // user model
        User: {
          type: "object", // data type
          properties: {
            id: {
              type: "string", // data-type
              description: "not used in requests", // desc
              example: "1", // example of an id
            },
            name: {
              type: "string", // data-type
              example: "John", // example of a title
            },
            surname: {
                type: "string", // data-type
                example: "Doe", // example of a title
            },
            age: {
            type: "integer", // data-type
            example: "19", // example of a title
            },
          },
        },
        //list of users model
        Users: {
          type: "array",
          items:{
            $ref:"#/components/schemas/User"}
        },
        //credentials model
        Credentials: {
          type: "object", // data type
          properties: {
            email: {
              type: "string", // data-type
              example: "person@web.com", // example of an id
            },
            password: {
              type: "string", // data-type
              example: "StrongPassword!exampl3", // example of a title
            }
          },
        },
        // Country model
        Country: {
            type: "object", // data type
            properties: {
              name: {
                type: "string", // data-type
                example: "Mexico", // example
              },
            },
          },
      },
    },
  };