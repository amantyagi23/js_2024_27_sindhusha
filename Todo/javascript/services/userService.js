import User from "../model/userModel.js";

const USERSERVICE = {

    uuid:0,
    userList : [],
    createUser:function(rawData){
        const user = new User(this.createUUID(),rawData.firstName,rawData.lastName,rawData.dob,rawData.phoneNumber,rawData.address);
        this.userList.push(user);
    },
    updateUser:function(){

    },
    deleteUser:function(){

    },
    getUsers:function(){
        return this.userList;
    },
    createUUID:function(){
        this.uuid = this.uuid +1
        return this.uuid;
    }


    
}

export default USERSERVICE;