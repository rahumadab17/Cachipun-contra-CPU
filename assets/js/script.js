let rondasGanadas = 0
let rondasPerdidas = 0

let cachipun = () => {
    var cantidadJuegos = parseInt(prompt("Cuantas veces deseas jugar?"))

    for(let i = 0;i < cantidadJuegos; i++){


        let eleccionUsuario = parseInt(prompt("Escriba 0 para PIEDRA, 1 para PAPEL y 2 para TIJERA."))
        
        let eleccionCPU = Math.floor(Math.random()*3)

        if (eleccionUsuario === eleccionCPU){
            alert("¡EMPATE!")
        } else if (
            eleccionUsuario === 0 && eleccionCPU === 2 ||
            eleccionUsuario === 1 && eleccionCPU === 0 ||
            eleccionUsuario === 2 && eleccionCPU === 1
        ) {
            alert("¡Has GANADO esta ronda!");
            rondasGanadas++
        } else {
            alert("¡La CPU ganó esta ronda!");
            rondasPerdidas++
        }
    }

    if (rondasGanadas > rondasPerdidas) {
        alert("Has ganado la partida! 😎");
    } else if (rondasGanadas < rondasPerdidas) {
        alert("Has perdido la partida 😢");
    } else {
        alert("Empate contra la CPU!🏳️");
    }
}

