let grid = document.getElementById("grid");

function play() {
    console.log("Hai cliccato")
    // RESET GRIGLIA
    grid.innerHTML = "";
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

    // CREO CELLE
    for(let i = 1; i <= numCelle; i++) {


        // grid.innerHTML += `<div class "square">${i}</div>`;
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
        })
    }
    
    
}