const formcount = document.getElementById("formcontrol");
const nameinp = document.getElementById("name");
const sornameInp = document.getElementById("sorname");
const ageinp = document.getElementById("age");
const selectNationality = document.getElementById("selectNationality");
const selectposition = document.getElementById("position");
const intable = document.getElementById("tablein");
const experience = document.getElementById("experience");
let employers = [];
let counter = 0;

formcount.addEventListener("submit", (e) => {
    e.preventDefault();
    if (checkName(nameinp.value,employers)) {
        alert('tekrar edilen ad var') 
    } else {
        
    
    if (nameinp.value.trim() == '' || sornameInp.value.trim() == '' || ageinp.value.trim() == '' || selectNationality.value.trim() == '' || selectposition.value.trim() == '' || experience.value.trim() == '') {
        alert("formu tamamlayin");
    } else {
        let newUser = {
            id: counter,
            name: nameinp.value,
            sorname: sornameInp.value,
            age: ageinp.value,
            selectNationality: selectNationality.value,
            selectposition: selectposition.value,
            experience: experience.value
        };
        counter++;
        employers.push(newUser);
        renderUi(employers);
    }}
});

const renderUi = (employers) => {
    let innerHTML = "";
    for (let i = 0; i < employers.length; i++) {
        innerHTML += `<tr>
            <th>${employers[i].id}</th>
            <td>${employers[i].name}</td>
            <td>${employers[i].sorname}</td>
            <td>${employers[i].age}</td>
            <td>${employers[i].selectNationality}</td>
            <td>${employers[i].selectposition}</td>
            <td>${employers[i].experience}</td>
            <td><button onclick="editEmployer(${employers[i].id})">Edit</button></td>
            <td><button onclick="deleteEmployer(${employers[i].id})">Delete</button></td>
        </tr>`;
    }
    intable.innerHTML = innerHTML;
};

function deleteEmployer(id) {
    let idtoloc=employers.find(x => x.id == id)
    let xsa=employers.indexOf(idtoloc)
    console.log(xsa)
    employers.splice(xsa,1)
    renderUi(employers)
}

function editEmployer(id) {
    let idtoloc=employers.find(x => x.id == id)
    let newname=prompt("New name")
    let newsorname=prompt("New surname")
    let newage=prompt("New age")
    let newexperience=prompt("New experience")
    idtoloc.name=newname
    idtoloc.sorname=newsorname
    idtoloc.age=newage
    idtoloc.experience=newexperience
    renderUi(employers)
}

const checkName =(nameFromInput, employers) =>{
    const inputName = nameFromInput.trim().toLowerCase();
    for (let i = 0; i < employers.length; i++) {
        const employerName = employers[i].name.trim().toLowerCase();
        if (inputName === employerName) {
            return true; 
        }
    }
    return false; 
}