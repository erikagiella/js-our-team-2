//funzione che riceve un oggetto member e restituisce una card 
function createMemberCard(member) {
    //creo la stringa contenente la card 
    const cardHTML = `
    <div class="card border-0">
      <div class="card-img text-center">
        <img class="w-50 rounded-circle" src="./assets/${member.img}" alt="">
      </div>
    <div class="card-body text-center">
        <div class="memberName">${member.name}</div>
        <div class="memberRole">${member.role}</div>
        <div class="memberEmail">${member.email}</div>
      </div>
    </div>   
  `
    //ritorno la stringa card
    return cardHTML;
}