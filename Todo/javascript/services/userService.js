import User from "../model/userModel.js";

const USERSERVICE = {

    uuid:0,
    userList : [],
    createUser:function(rawData){
        const user = new User(this.createUUID(),rawData.firstName,rawData.lastName,rawData.dob,rawData.phoneNumber,rawData.address);
        this.userList.push(user);
    },
    updateUser:function(id){
        const index =  this.userList.findIndex((user)=>user.id == id);
    },
    getUserByUUID:function(id){
        return this.userList.find((user)=>user.id==id)
    },
    deleteUser:function(id){
        this.userList = this.userList.filter((user)=>user.id!= id);

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