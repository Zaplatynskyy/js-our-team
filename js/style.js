// Ricreiamo le card del nostro team aggiungendo al layout di base fornito, il nostro javascript in cui:
// Creiamo il nostro array di oggetti che rappresentano ciascun membro del team. Ogni membro dovrà avere le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento il layout di esempio presente nell'html, stampiamo tutte le card del nostro team.
// BONUS: Utilizziamo poi gli input presenti nella pagina per permettere all'utente di aggiungere nuovi membri del team.

const team = [
    {
        nome : 'Wayne Barnett',
        ruolo : 'Founder & CEO',
        imgSrc : 'img/wayne-barnett-founder-ceo.jpg'
    },
    {
        nome : 'Angela Caroll',
        ruolo : 'Chief Editor',
        imgSrc : 'img/angela-caroll-chief-editor.jpg'
    },
    {
        nome : 'Walter Gordon',
        ruolo : 'Office Manager',
        imgSrc : 'img/walter-gordon-office-manager.jpg'
    },
    {
        nome : 'Angela Lopez',
        ruolo : 'Social Media Manager',
        imgSrc : 'img/angela-lopez-social-media-manager.jpg'
    },
    {
        nome : 'Scott Estrada',
        ruolo : 'Developer',
        imgSrc : 'img/scott-estrada-developer.jpg'
    },
    {
        nome : 'Barbara Ramos',
        ruolo : 'Graphic Designer',
        imgSrc : 'img/barbara-ramos-graphic-designer.jpg'
    }
];

// console.log(team);

// for(let i = 0; i < team.length; i++) {
//     // console.log(team[i]);
//     for(const key in team[i]) {
//         console.log(key, team[i][key]);
//     }
// }

// const teamContainer = document.querySelector('.team-container');
// const teamCard = document.createElement('div');
// teamCard.className = 'team-card';
// // console.log(teamCard); 
// teamCard.innerHTML = `
//     <div class="card-image">
//         <img
//         src="${team[0].imgSrc}"
//         alt="${team[0].nome}"
//         />
//         </div>
//     <div class="card-text">
//     <h3>${team[0].nome}</h3>
//     <p>${team[0].ruolo}</p>
//     </div>
// `;
// console.log(teamCard.innerHTML);
// teamContainer.appendChild(teamCard);

for(let i = 0; i < team.length; i++) {
    const teamContainer = document.querySelector('.team-container');
    const teamCard = document.createElement('div');
    teamCard.className = 'team-card';
    // console.log(teamCard); 
    teamCard.innerHTML = `
        <div class="card-image">
            <img
            src="${team[i].imgSrc}"
            alt="${team[i].nome}"
            />
            </div>
        <div class="card-text">
        <h3>${team[i].nome}</h3>
        <p>${team[i].ruolo}</p>
        </div>
    `;
    teamContainer.appendChild(teamCard);

}