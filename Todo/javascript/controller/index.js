import USERSERVICE from "../services/userService.js";

window.addEventListener("DOMContentLoaded",events)

function events(){
    document.getElementById("addBtn").addEventListener("click",showForm)
    document.getElementById("details").addEventListener("submit",getDataForm);
}

function showForm(){
    const dataForm = document.querySelector(".dataForm");

    dataForm.classList.toggle("showForm");

}

function getDataForm(event){
    event.preventDefault()
    const rawData = {
        firstName : validateFirstName(event.target[0].value),
        lastName : event.target[1].value,
        dob: event.target[2].value,
        phoneNumber : event.target[3].value,
        address : event.target[4].value,
    }

    
    USERSERVICE.createUser(rawData)
    printData();
}


function printData(){
    const tbody = document.getElementById("printData");
    tbody.innerHTML = "";
    const userList =  USERSERVICE.getUsers();

    for (let i = 0; i < userList.length; i++) {
       const tr = document.createElement("tr")

       const idTd = document.createElement("td");
       idTd.innerText = userList[i].id
    //    <tr>
    //     <td></td>
    //    </tr>
       tr.appendChild(idTd)
       const firstNameTd = document.createElement("td");
       firstNameTd.innerText = userList[i].firstName
       tr.appendChild(firstNameTd)
       const lastNameTd = document.createElement("td");
       lastNameTd.innerText = userList[i].lastName
       tr.appendChild(lastNameTd)
       const dobTd = document.createElement("td");
       dobTd.innerText = userList[i].dob
       tr.appendChild(dobTd)
       const phoneNumberTd = document.createElement("td");
       phoneNumberTd.innerText = userList[i].phoneNumber
       tr.appendChild(phoneNumberTd);
       const addressTd = document.createElement("td");
       addressTd.innerText = userList[i].address
       tr.appendChild(addressTd);
        
       tbody.appendChild(tr);
    }

}


function validateFirstName(name){
    if(name ===undefined || name === null || name === ""){
        alert("Please Provide a name");
        return
    }
    return name
}

