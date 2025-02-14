const ensemble = document.querySelector(".ensemble");
ensemble.style.height=ensemble.getBoundingClientRect().width*2 + "px"

let ensembledivisepar10 = ensemble.getBoundingClientRect().width/10;

const cadreprochain = document.createElement("div");
cadreprochain.style.width=ensembledivisepar10*4+"px";
cadreprochain.style.height=ensembledivisepar10*4+"px";
cadreprochain.style.position="absolute";
cadreprochain.style.top="0";
cadreprochain.style.left="0";
cadreprochain.style.display="flex";
cadreprochain.style.justifyContent="center";
cadreprochain.style.alignContent="center";
cadreprochain.style.background="black";



cadreprochain.style.border=`${ensembledivisepar10/5}px solid yellow`;
cadreprochain.id="cadreprochain";




document.querySelector(".données").appendChild(cadreprochain)


for (let i = 0 ; i<20 ; i++){
    const ligne = document.createElement("div");
    ligne.classList.add("ligne");
    ligne.style.height=ensembledivisepar10+"px";

    for (let j = 0 ; j<10 ; j++){
        const cellule = document.createElement("div")
        cellule.classList.add("cellule")

        cellule.style.background="#1e1e1e";

        cellule.style.width=ensembledivisepar10+"px";
        cellule.style.height=ensembledivisepar10+"px";

        const fondcellule = document.createElement("div")
        fondcellule.style.width=ensembledivisepar10-3+"px";
        fondcellule.style.height=ensembledivisepar10-3+"px";

        fondcellule.style.background="black";

        cellule.appendChild(fondcellule)

        ligne.appendChild(cellule)
    }
    ensemble.appendChild(ligne)
}

let blocpro = 0;
let rotapro = 0;

let nombreAleatoire = 0;

function blocaleatoire(){
    blocpro = Math.floor(Math.random() * 7);
    // nombreAleatoire = 0
}

let donneesblocs = [
    // Format left,top

    // Bloc 0 : Ligne de 4
    [
        // Composant 1
        [0,0],
        // Composant 2
        [0,1],
        // Composant 3
        [0,2],
        // Composant 4
        [0,3]
    ],

    // Bloc 1 : L à l'endroit
    [
        // Composant 1
        [0,0],
        // Composant 2
        [0,1],
        // Composant 3
        [0,2],
        // Composant 4
        [1,2]
    ],

    // Bloc 2 : L à l'envers
    [
        // Composant 1
        [1,0],
        // Composant 2
        [1,1],
        // Composant 3
        [1,2],
        // Composant 4
        [0,2]
    ],

    // Bloc 3 : carré
    [
        // Composant 1
        [0,0],
        // Composant 2
        [0,1],
        // Composant 3
        [1,0],
        // Composant 4
        [1,1]
    ],

    // Bloc 4 : s à l'endroit
    [
        // Composant 1
        [0,0],
        // Composant 2
        [0,1],
        // Composant 3
        [1,1],
        // Composant 4
        [1,2]
    ],

    // Bloc 5 : s à l'envers
    [
        // Composant 1
        [1,0],
        // Composant 2
        [1,1],
        // Composant 3
        [0,1],
        // Composant 4
        [0,2]
    ],

    // Bloc 6 : pyramide
    [
        // Composant 1
        [0,0],
        // Composant 2
        [0,1],
        // Composant 3
        [0,2],
        // Composant 4
        [1,1]
    ],


    // Couleur
    [
        // Bloc 0 turquoise
        [
            // Contour
            "#32d3f7",
            // Fond
            "#2cbfe1"
        ],
        // Bloc 1 orange
        [
            // Contour
            "#ffc65c",
            // Fond
            "#f7ad24"
        ],
        // Bloc 2 bleu
        [
            // Contour
            "#4981ff",
            // Fond
            "#2254c2"
        ],
        // Bloc 3 jaune
        [
            // Contour
            "#fff25a",
            // Fond
            "#f3e002"
        ],
        // Bloc 4 vert
        [
            // Contour
            "#61f146",
            // Fond
            "#4dd335"
        ],
        // Bloc 5 rouge
        [
            // Contour
            "#ff647c",
            // Fond
            "#ee1c3c"
        ],
        // Bloc 6 violet
        [
            // Contour
            "#bb78ff",
            // Fond
            "#a75cf3"
        ]
    ]

]


let rotation = 0;

function rotaaleatoire(){
    rotapro = Math.floor(Math.random() * 4);

    // rotation = 0
}

let roation_blocs = [
    "0", "90", "180", "270"
]

function aleatoire(){
    blocaleatoire()
    rotaaleatoire()
}

function prochain(){
    const prochainbloc = document.createElement("div")
    
    prochainbloc.classList.add("prochainbloc")
    if(blocpro!=3){
        prochainbloc.style.transform=`rotate(${roation_blocs[rotapro]}deg)`;
    }
    
    prochainbloc.style.width=ensembledivisepar10*2 + "px";
    prochainbloc.style.height=ensembledivisepar10*4 + "px";
    // prochainbloc.style.position="absolute"
    // prochainbloc.style.top="0";
    // prochainbloc.style.left="0";
    document.querySelector("#cadreprochain").appendChild(prochainbloc)
    
    for (let i = 0 ; i<4 ; i++){
        const bloc = document.createElement("div")
        bloc.style.width=ensembledivisepar10+"px";
        bloc.style.height=ensembledivisepar10+"px";
        bloc.style.position="absolute";
        bloc.style.left=donneesblocs[blocpro][i][0]*ensembledivisepar10 + "px";
        bloc.style.top=donneesblocs[blocpro][i][1]*ensembledivisepar10 + "px";
        bloc.style.background=donneesblocs[7][blocpro][0];

        bloc.style.display="flex";
        bloc.style.justifyContent="center";
        bloc.style.alignItems="center";

        bloc.id="bloc";

        const blocfond = document.createElement("div");
        blocfond.style.width=ensembledivisepar10-3+"px";
        blocfond.style.height=ensembledivisepar10-3+"px";
        blocfond.style.background=donneesblocs[7][blocpro][1];
        bloc.appendChild(blocfond)

        prochainbloc.appendChild(bloc)
        
    }

}

function supprimerpro() {
    document.querySelector(".prochainbloc").remove();
}


aleatoire()
prochain()

supprimerpro()









let jeu = false;
function conteneurbloc(){
    jeu=true;
    rotation=rotapro;
    nombreAleatoire=blocpro;
    aleatoire()
    prochain()
    

    const ensemblebloc = document.createElement("div")
    ensemblebloc.style.width=ensembledivisepar10*2 + "px";
    ensemblebloc.style.height=ensembledivisepar10*4 + "px";
    // ensemblebloc.style.background="rgba(77, 255, 77, 0.366)";
    ensemblebloc.id="ensbloc";
    ensemblebloc.style.position="absolute";
    ensemblebloc.style.top="0";
    ensemblebloc.style.left=ensembledivisepar10*4 + "px";

    const ensmove = document.createElement("div");
    ensmove.style.width="100%";
    ensmove.style.height="100%";
    // ensmove.style.background="rgba(255, 255, 255, 0.366)";
    ensmove.id="ensmove";
    ensmove.style.position="absolute";
    ensmove.style.top="0";
    ensmove.style.left="0";

    

    

    function composants(){
        for (let i = 0 ; i<4 ; i++){
            const bloc = document.createElement("div")
            bloc.style.width=ensembledivisepar10+"px";
            bloc.style.height=ensembledivisepar10+"px";
            bloc.style.position="absolute";
            bloc.style.left=donneesblocs[nombreAleatoire][i][0]*ensembledivisepar10 + "px";
            bloc.style.top=donneesblocs[nombreAleatoire][i][1]*ensembledivisepar10 + "px";
            bloc.style.background=donneesblocs[7][nombreAleatoire][0];

            bloc.style.display="flex";
            bloc.style.justifyContent="center";
            bloc.style.alignItems="center";

            bloc.id="bloc";

            const blocfond = document.createElement("div");
            blocfond.style.width=ensembledivisepar10-3+"px";
            blocfond.style.height=ensembledivisepar10-3+"px";
            blocfond.style.background=donneesblocs[7][nombreAleatoire][1];
            bloc.appendChild(blocfond)

            ensmove.appendChild(bloc)
            
        }
    }
    

    composants()
    
    
    

    if (nombreAleatoire==3){
        ensmove.style.transform="rotate0deg)";
    } else {
        ensmove.style.transform=`rotate(${roation_blocs[rotation]}deg)`;
        if (rotation==1 || rotation==3){
            ensmove.style.top=ensmove.getBoundingClientRect().top-ensembledivisepar10 + "px";
        }
    }
    ensmove.offsetTop;
    ensemblebloc.appendChild(ensmove)
    ensemble.appendChild(ensemblebloc)
}

let delai = 500;

let collblocplacé = false;

let lignedétruite = 0;

function disparaitreligne(){
    
    const lignes = document.querySelectorAll(".ligne");
    lignes.forEach(ligne=>{
        const celluleligne = ligne.children
        let ok = 0;
        for (let i = 0 ; i<celluleligne.length ;i++){
            if (celluleligne[i].id=="placé"){
                ok++;
            }
        }
        if (ok==10){
            ligne.remove()

            const ligne2 = document.createElement("div");
            ligne2.classList.add("ligne");
            ligne2.style.height=ensembledivisepar10+"px";

            for (let j = 0 ; j<10 ; j++){
                const cellule = document.createElement("div")
                cellule.classList.add("cellule")

                cellule.style.background="#1e1e1e";

                cellule.style.width=ensembledivisepar10+"px";
                cellule.style.height=ensembledivisepar10+"px";

                const fondcellule = document.createElement("div")
                fondcellule.style.width=ensembledivisepar10-3+"px";
                fondcellule.style.height=ensembledivisepar10-3+"px";

                fondcellule.style.background="black";

                cellule.appendChild(fondcellule)

                ligne2.appendChild(cellule)
            }
            ensemble.prepend(ligne2)
            lignedétruite++;
            document.querySelector("#compteur").textContent="Nombre de ligne détruites : " + lignedétruite;
            console.log("ligne détruite : ", lignedétruite)
        }
    })

    
}



function placeblocs(){
    
    const touteslescellules = document.querySelectorAll(".cellule")
    const blocsplacés = document.querySelector("#ensmove").children
    touteslescellules.forEach(element=>{
        for (let i = 0 ; i<blocsplacés.length ; i++){
            if (
                element.getBoundingClientRect().top==blocsplacés[i].getBoundingClientRect().top &&
                element.getBoundingClientRect().left==blocsplacés[i].getBoundingClientRect().left
            ){
                element.style.background=donneesblocs[7][nombreAleatoire][0];
                element.children[0].style.background=donneesblocs[7][nombreAleatoire][1];
                element.id="placé"
            }
        }
    })
    disparaitreligne()
    

}




function mvtblocs(){
    const touslesblocs = document.querySelector("#ensmove");

    const compobloc = document.querySelectorAll("#bloc")
    const ensemblebottom = ensemble.getBoundingClientRect().top + ensemble.getBoundingClientRect().height;

    const blocsquisontplacés = document.querySelectorAll("#placé");
    

    


    let coll = false;
    function boucle(){
        if (!coll){
            setTimeout(() => {
                compobloc.forEach(element => {
                    const bottomelem = element.getBoundingClientRect().top +element.getBoundingClientRect().height;
                    if (bottomelem==ensemblebottom){
                        coll=true;
                        placeblocs()
                        
                        
                        touslesblocs.remove();
                        
                        delai=500;
                        setTimeout(() => {
                            collblocplacé = false
                            coll=false;
                            supprimerpro();
                            
                            
                            conteneurbloc();
                            mvtblocs()
                        }, 1000);
                        
                    }
                    if (blocsquisontplacés.length!=0){
                        blocsquisontplacés.forEach(bloc=>{
                            if (
                                element.getBoundingClientRect().bottom+20>=bloc.getBoundingClientRect().top 
                                &&
                                element.getBoundingClientRect().right-10>=bloc.getBoundingClientRect().left
                                &&
                                element.getBoundingClientRect().left+10<=bloc.getBoundingClientRect().right
                            ){

                                coll=true;
                                placeblocs()
                                touslesblocs.remove();
                                
                                delai=500;
                                setTimeout(() => {
                                    coll=false;
                                    supprimerpro();
                                    conteneurbloc();
                                    mvtblocs()
                                }, 1000);
                            }
                        })
                     
                    } 
                  
                    
                });


                if (rotation==1 || rotation==3){
                    if(nombreAleatoire!=3){
                        touslesblocs.style.top=touslesblocs.getBoundingClientRect().top-8 + "px"
                    } else {
                        touslesblocs.style.top=touslesblocs.getBoundingClientRect().top-8+ensembledivisepar10 + "px"
                    }
                    
                } else {
                    touslesblocs.style.top=touslesblocs.getBoundingClientRect().top-8+ensembledivisepar10 + "px"
                }
                
                boucle()
                
            }, delai);
        }
    }
    boucle()
    
}

function partie(){
    coll=false
    if (!jeu){
        conteneurbloc()
    }
    mvtblocs()
}




document.querySelector("#commencer").addEventListener("click", ()=>{
    document.querySelector("#commencer").style.display="none";
    const compteur = document.createElement("div");
    compteur.textContent="Nombre de lignes détruites : " + lignedétruite;
    compteur.style.position="absolute";
    compteur.style.top=ensembledivisepar10*5 + "px";
    compteur.id="compteur";
    document.querySelector(".données").appendChild(compteur)
    partie()
    
})

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche pressée est la flèche de droite
    if (event.key === 'ArrowRight') {
        const ensemblesblocs = document.querySelector("#ensmove");
        let espacedroite = 0;
        if (rotation==3){
            if (nombreAleatoire!=3 && nombreAleatoire!=0){
                espacedroite=24
            }
        }
        if (rotation==0){
            if (nombreAleatoire==0){
                espacedroite=24
            }
        }
        if (ensemblesblocs){
            if (ensemblesblocs.getBoundingClientRect().right<ensemble.getBoundingClientRect().right+espacedroite){
                if (rotation==1 || rotation==3){
                    if (nombreAleatoire!=3){
                        ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-48 + "px";
                    } else {
                        ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-72 + "px";
                    }
                    
                } else {
                    ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-72 + "px";
                }
                
                
            }
            
        } 
        
        
    }
});



document.addEventListener('keydown', function(event) {
    // Vérifie si la touche pressée est la flèche de droite
    if (event.key === 'ArrowLeft') {
        const ensemblesblocs = document.querySelector("#ensmove");
        let espacegauche = 0;
        if (rotation==1){
            if (nombreAleatoire!=3 && nombreAleatoire!=0){
                espacegauche=24
            }
        }
        if (rotation==2){
            if (nombreAleatoire==0){
                espacegauche=24
            }
        }

        
        if (ensemblesblocs){
            
            
  
                if (ensemblesblocs.getBoundingClientRect().left>ensemble.getBoundingClientRect().left-espacegauche){
                    if (rotation==1 || rotation==3){
                        if (nombreAleatoire!=3){
                            ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-96 + "px";
                        } else {
                            ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-120 + "px";
                        }
                        
                    } else {
                        ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-120 + "px";
                    }
                    
                }
       

            
            
            
            
        } 
        
    }
});

document.addEventListener('keydown', function(event) {
    // Vérifie si la touche pressée est la flèche de droite
    if (event.key === 'ArrowDown') {
        const ensemblesblocs = document.querySelector("#ensmove");
        if (ensemblesblocs){
    
            delai=50;
            
        } 
        
    }
});
document.addEventListener('keyup', function(event) {
    // Vérifie si la touche pressée est la flèche de droite
    if (event.key === 'ArrowDown') {
        const ensemblesblocs = document.querySelector("#ensmove");
        if (ensemblesblocs){
            delai=500;
            
        } 
        
    }
});


document.addEventListener('keydown', function(event) {
    // Vérifie si la touche pressée est la barre d'espace
    if (event.key === ' ') {
        // placeblocs()
        const ensemblesblocs = document.querySelector("#ensmove");
        if (ensemblesblocs){
            if (nombreAleatoire!=3){
                if(rotation==3){
                    rotation=0;
                } else {
                    rotation=rotation+1;
                }
                ensemblesblocs.style.transform=`rotate(${roation_blocs[rotation]}deg)`;
                if (ensemblesblocs.getBoundingClientRect().left<ensemble.getBoundingClientRect().left){
                    if (nombreAleatoire==0){
                        if (rotation==1){
                            ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-48 + "px";
                        } else if (rotation==3){
                            ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-24 + "px";
                        }
                    } else {
                        if(rotation==3){
                            ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-48 + "px";
                        }
                    }
                    
                }
                if (ensemblesblocs.getBoundingClientRect().right>ensemble.getBoundingClientRect().right){
                    
                    if(nombreAleatoire==0){
                        if(rotation==1){
                            ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-120 + "px";
                        } else if (rotation==3){
                            ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-96 + "px";
                        }
                        
                    } else {
                        if(rotation==1){
                            ensemblesblocs.style.left=ensemblesblocs.getBoundingClientRect().left-ensemble.getBoundingClientRect().left-96 + "px";
                        }
                        
                    }
                }
            }
            
            
        } 
        event.preventDefault(); // Empêche le comportement par défaut (par exemple, le défilement)
    }
});

// const observer = new MutationObserver(mutations => {
//     mutations.forEach(mutation => {
//         if (mutation.addedNodes.length || mutation.removedNodes.length) {
//             console.log("Changement dans le DOM :", mutation);
//         }
//     });
// });

// observer.observe(document.querySelector(".données"), { childList: true });
