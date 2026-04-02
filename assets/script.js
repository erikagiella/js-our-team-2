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


//seleziono il nodo DOM 
const memberListEl = document.getElementById("memberList")



//ciclo gli elementi dell'array con un ciclo for
for (let i = 0; i < teamMembers.length; i++) {
  //seleziono l'elemento dell'array utilizzando i come indice
  const member = teamMembers[i];
  //creo le variabili a cui attribuire il valore delle proprietà dell'oggetto 
  const memberName = member.name;
  const memberRole = member.role;
  const memberEmail = member.email;
  const memberImg = member.img;
  //creo un nuovo elemento lista usando le API del DOM
  const liEl = document.createElement("li")
  //inserisco il testo nell'elemento lista
  liEl.append(member.name);
  //aggiungo l'elemento lista all'ul
  ulEl.appendChild(liEl);
}