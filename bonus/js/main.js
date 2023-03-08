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
    console.log(esperti[key].nome , esperti[key].posizione , esperti[key].foto)
    let espertiDom = document.getElementById('esperti');
    espertiDom.innerHTML += `${esperti[key].nome } ${esperti[key].posizione }<br />`;
    creaImg(esperti[key].foto);
}



function creaImg (foto){
    
    
    let immaginiDom = document.createElement('img')
    immaginiDom.src = 'img/' + foto;
    let src = document.getElementById('img-container');
    src.appendChild(immaginiDom);
}


