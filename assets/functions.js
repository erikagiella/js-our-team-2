//funzione che riceve 4 variabili e ritorna una stringa contenente una card riempita col contenuto delle variabili
function createCardText(name, role, email, img) {
    //creo la stringa contenente la card 
    const cardHTML = `
    <div class="card border-0">
      <img class="card-img rounded-circle" src="./assets/${img}" alt="">
      <div class="card-body text-center">
        <div class="memberName">${name}</div>
        <div class="memberRole">${role}</div>
        <div class="memberEmail">${email}</div>
      </div>
    </div>  
  `
    //ritorno la stringa card
    return cardHTML;
}