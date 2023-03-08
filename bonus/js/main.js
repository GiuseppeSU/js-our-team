const esperti = [
    {
        'nome': 'Wayne', 'congnome' : 'Barnett', 'posizione' : 'Founder & CEO', 'foto' : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        'nome': 'Angela', 'congnome' : 'Caroll', 'posizione' : 'Chief Editor', 'foto' : 'angela-caroll-chief-editor.jpg'
    },
    {
        'nome': 'Walter', 'congnome' : 'Gordon', 'posizione' : 'Office Manager', 'foto' : 'walter-gordon-office-manager.jpg'
    },
    {
        'nome': 'Angela', 'congnome' : 'Lopez', 'posizione' : 'Social Media Manager', 'foto' : 'angela-lopez-social-media-manager.jpg'
    },
    {
        'nome': 'Scott', 'congnome' : 'Estrada', 'posizione' : 'Developer', 'foto' : 'scott-estrada-developer.jpg'
    },

    {
        'nome': 'Barbara', 'congnome' : 'Ramos', 'posizione' : 'Graphic Designer', 'foto' : 'barbara-ramos-graphic-designer.jpg'
    },
] 

for (let key in esperti){
    let testo = esperti[key].nome + ' ' + esperti[key].congnome + ' ' + esperti[key].posizione;
    creaCard(esperti[key].foto ,testo);

}

function creaCard (img , testo){
   let card= document.createElement('div');
   card.classList.add('card');
   let imgCard = document.createElement('img');
   imgCard.src = 'img/' + img;
   let paragrafo = document.createElement('p');
   paragrafo.innerHTML = testo;
   card.append(imgCard);
   card.append(paragrafo);
   let container = document.getElementById('container');
   container.appendChild(card);
}


