const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

//OUR TEAM
//inserimento nel DOM dei membri contenuti nell'array teamMembers
//seleziono il nodo DOM 
const membersListEl = document.getElementById("membersList")

//ciclo gli elementi dell'array con un ciclo for
for (let i = 0; i < teamMembers.length; i++) {
  //seleziono l'elemento dell'array utilizzando i come indice
  const member = teamMembers[i];
  //creo un nuovo elemento div usando le API del DOM
  const colEl = document.createElement("div")
  //aggiungo al div le classi col
  colEl.classList.add("col-12", "col-md-6", "col-lg-4", "col-xl-3");
  //creo l'elemento card utilizzando l'apposita funzione
  const cardHTML = createMemberCard(member);
  //inserisco il testo nell'elemento col
  colEl.innerHTML = cardHTML;
  //aggiungo l'elemento col come nodo del DOM alla lista (nodo row)
  membersListEl.appendChild(colEl);
}

//           === FORM ===
// inserisco un eventListener che al submit del form prenda
// il contenuto nei campi del form e li inserisca nell'array teamMembers

// seleziono il submit button del form

// === EVENT LISTENER FORM SUBMIT ===

// === RECUPERO INPUT DAL DOM ===