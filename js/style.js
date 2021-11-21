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