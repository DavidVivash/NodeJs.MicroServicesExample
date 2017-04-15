# NodeWebApiRolesExample

Example web API using Node.js, Express 4, Mongo DB and Mongoose.

The API has 2 endpoints:

 1. GET /api/roles/:user_id - gets the roles of the specified user_id
 2. PUT /api/roles - the body should be json of the following format:
    {
      "user_id": 1,
      "roles": [{"role_name": "user"}, { "role_name": "admin" }]
    } 

To compile
----------

 1. This has been set up to compile and run in Visual Studio 2017
 2. Restore the node packages
 3. The project should then build and run

If you're not using VS2017, you'll need to compile the typescript before running app.js.
 
Mongo 
-----

 1. Create a mongo db database called "UserRoles"
 2. The connection string assumes mongo is running on localhost port 27017
 
 