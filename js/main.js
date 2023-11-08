let grid = document.getElementById("grid");
let punteggio = document.getElementById("punteggio");
let game = true;

function play() {
    console.log("Hai cliccato")
    // RESET GRIGLIA
    grid.innerHTML = "";
    punteggio.innerHTML = 0;
    game = true;
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

    // CREO TROFEO
    const trophy = randomNumber(1, numCelle);
    console.log("Casella vincente: ", trophy);


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

            // VERIFICO STATO PARTITA
            if(game == true){

                console.log("Cella: ", i);
                cella.classList.toggle("cellaClick");

                if(bomba.includes(i)) {
                    alert("BOOOM! Hai perso!");
                    cella.innerHTML = `<i class="fa-solid fa-bomb fa-xl" style="color: #000000;"></i>`;
                    game = false;
                }

                punteggio.innerHTML++;

                if(trophy == i) {
                    alert("HAI VINTO!");
                    cella.innerHTML = `<i class="fa-solid fa-trophy fa-xl" style="color: #f3f30b;"></i>`;
                    game = false;
                }
            }
        })
    }

    
    // CREO BOMBE
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
}