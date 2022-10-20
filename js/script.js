const row = document.querySelector(".row");
const membersArray = [
    {
        name: "Wayne Barnett",
        role: "Founder & CEO",
        photo: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        photo: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        photo: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        photo: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        photo: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        photo: "barbara-ramos-graphic-designer.jpg"
    }
];

objArrayLog(membersArray);

for (let i = 0; i < membersArray.length; i++) {
    const thisMember = membersArray[i];
    const card = createCard(thisMember.name, thisMember.role, thisMember.photo);
    row.append(card);
}

/////////////////////////////////////////////

// Funzione per il console log dell'array di oggetti
function objArrayLog (objArray) {
    for (let i = 0; i < objArray.length; i++) {
        const thisObj = objArray[i];
        for (let key in thisObj) {
            console.log(key, thisObj[key]);
        }
    }
}

//Funzione per la creazione della card
function createCard (name, role, photo) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
        <img src="img/${photo}" alt="${name}">
        <h3>${name}</h3>
        <span>${role}</span>`;
    return card;
}