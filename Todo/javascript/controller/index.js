
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
    console.log(event.target[0].value)
}