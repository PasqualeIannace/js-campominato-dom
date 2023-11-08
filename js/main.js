let grid = document.getElementById("grid");
let punteggio = document.getElementById("punteggio");

function play() {
    console.log("Hai cliccato")
    // RESET GRIGLIA
    grid.innerHTML = "";
    punteggio.innerHTML = 0;
    celleGenerator();
}

function celleGenerator(difficult) {

    const livello = parseInt (document.getElementById("level").value);
    let numCelle;
    let numRighe;

    if(livello == 1) {
        numCelle = 100;
        numRighe = 10;
    } else if (livello == 2) {
        numCelle = 81;
        numRighe = 9;
    } else {
        numCelle = 49;
        numRighe = 7;
    }

    // CREO BOMBE
    const bomba = [];

    for(x = 0; x < 16; x++) {
        bomba.push(randomNumber(1, numCelle));
    }

    console.log("Array di bombe:", bomba);



    // CREO CELLE
    for(let i = 1; i <= numCelle; i++) {
        
        let cella = document.createElement("div");
        cella.classList.add("square");
        cella.innerHTML += `${i}`;
        cella.style.width = `calc(100% / ${numRighe})`;
        cella.style.height = `calc(100% / ${numRighe})`;
        grid.appendChild(cella);


        // CLICK CELLA
        cella.addEventListener("click", function() {
            console.log("Cella: ", i);
            cella.classList.toggle("cellaClick");

            if(bomba.includes(i)) {
                console.log("BOOOM!");
            }

            punteggio.innerHTML++;

        })
    }

    
    // CREO BOMBE
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}