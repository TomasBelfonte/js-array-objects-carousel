const rowContainerEl = document.querySelector(".row");

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

function htmlPrint(rowContainerEl,images){

    for (let i = 0; i < images.length; i++) {

        const createDiv = document.createElement("div");


        const createCardBig = document.createElement("div");
        createCardBig.classList.add("card");

        const createH2 = document.createElement("h2");
        createH2.innerText=`${images[i].title}`;

        const createP = document.createElement("p");
        createP.innerText=`${images[i].text}`;

        const createImg = document.createElement("img");
        createImg.src=`${images[i].image}`; 



        // appendere elementi
        rowContainerEl.append(createDiv);
        createDiv.append(createCardBig);
        createCardBig.append(createImg);
        createCardBig.append(createH2);
        createCardBig.append(createP);
        
        
        
        
    }
};

htmlPrint(rowContainerEl,images);


