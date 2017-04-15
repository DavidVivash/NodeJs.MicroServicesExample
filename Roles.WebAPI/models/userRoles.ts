import { Schema, model } from "mongoose";

var RoleSchema = new Schema({
    role_name: String
});


var UserRolesSchema = new Schema({
    user_id: { type: Number, unique: true, index: true },
    roles: [RoleSchema]
});

export = model('UserRoles', UserRolesSchema);