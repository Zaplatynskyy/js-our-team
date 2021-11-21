// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.

const team = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        imgSrc : 'wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        imgSrc : 'angela-caroll-chief-editor.jpg'
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        imgSrc : 'walter-gordon-office-manager.jpg'
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        imgSrc : 'angela-lopez-social-media-manager.jpg'
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        imgSrc : 'scott-estrada-developer.jpg'
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        imgSrc : 'barbara-ramos-graphic-designer.jpg'
    }
];

// scorro il mio array di oggetti
for(let i = 0; i < team.length; i++) {
    // richiamo la funzione insTeamCard per inserire gli elementi (dati dall'array oggetti) nel document 
    insTeamCard(team[i].nome, team[i].ruolo, team[i].imgSrc);
}

// seleziono bottone Add al quale aggiungo un evento click
const addMemberButton = document.getElementById('addMemberButton');

addMemberButton.addEventListener("click",
    function() {
        // prelevo i valori inseriti tramite input in delle costanti
        const nome = document.getElementById('name').value;
        const ruolo = document.getElementById('role').value;
        const img = document.getElementById('image').value;

        // richiamo la funzione insTeamCard per inserire gli elementi (dati in input) nel document 
        insTeamCard(nome, ruolo, img);
    }
);

// funzione per lo sviluppo ed inserimento del nuovo elemento teamCard con passaggio di argomenti quali nome ruolo e immagine del membro
function insTeamCard(name, role, image) {
    const teamContainer = document.querySelector('.team-container');
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    teamCard.innerHTML = `
        <div class="card-image">
            <img
            src="img/${image}"
            alt="${name}"
            />
            </div>
        <div class="card-text">
        <h3>${name}</h3>
        <p>${role}</p>
        </div>
    `;
    teamContainer.appendChild(teamCard);
}

