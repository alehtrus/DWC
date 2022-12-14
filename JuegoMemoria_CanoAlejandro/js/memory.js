class Tablero {
    // Filas y columnas del tablero
    filas;
    columnas;

    // Crea el tablero con un array bidemensional.
    constructor() {

        this.tamañoTablero();
        this.esParTablero();
        this.crearTablero();


    }

    // Pregunta al usuario cuantas dilas y columnas quiere.
    tamañoTablero() {
        this.filas = parseInt(prompt("¿Cuántas filas quieres en el tablero?"));
        this.columnas = parseInt(prompt("¿Cuántas columnas quieres en el tablero?"));
    }

    // Analiza si los valores introducidos para que el tablero sea par, en caso negativo pregunta de nuevo
    // hasta que se cumpla.
    esParTablero() {
        let par = false;
        while (par != true) {
            if (this.filas * this.columnas % 2 != 0) {
                alert("El tablero no es par con los valores que has introucido \n Por favor, cambialos.");
                this.tamañoTablero();
            } else {
                par = true;
            }
        }

    }

    // Crea un array bidimensional vacio del tamaño del tablero.
    crearTablero() {
        this.arrayTablero = [];

        for (let fila = 0; fila < this.filas; fila++) {
            this.arrayTablero[fila] = [];

            for (let columna = 0; columna < this.columnas; columna++) {
                this.arrayTablero[fila][columna] = '';
            }
        }
    }

    // Dibuja en pantalla el array creado en crearTablero.
    dibujarTablero() {
        document.write('<table>');
        for (let i = 0; i < this.filas; i++) {
            document.write('<tr>');
            for (let j = 0; j < this.columnas; j++) {
                document.write(`<td>${this.arrayTablero[i][j]}</td>`);
            }
            document.write('</tr>');
        }
        document.write('</table>');
    }

}

class Memory extends Tablero {

    // Coloca los emoticonos en el array del tablero y luego lo dibuja en pantalla.
    constructor() {
        super();

        this.colocarEmoticonos();
        this.dibujarTablero();
    }

    // Hace las parejas necesarias segun el tamño del tablero.
    hacerParejas() {
        let emoticonos = ["&#127514;", "&#127535;", "&#127538;", "&#127539;", "&#127540;",
            "&#127541;", "&#127542;", "&#127544;", "&#127490;", "&#127543;"];

        let tamanio = this.filas * this.columnas;
        let parejas = new Array(tamanio);
        let contador = 0;

        for (let i = 0; i < parejas.length; i++) {
            if (parejas[i] == null) {
                parejas[i] = emoticonos[contador];
                parejas[i + 1] = emoticonos[contador];
                contador++;
                if (contador >= emoticonos.length) {
                    contador = 0;
                }

            }

        }

        return parejas;
    }

    // Desordena el arrya de las parejas.
    desordenarArray(array) {
        return array.sort(() => Math.random() - 0.5);
    }

    // Coloca en el array del tablero las parejas desordenadas.
    colocarEmoticonos(parejas) {
        parejas = this.hacerParejas();
        parejas = this.desordenarArray(parejas);


        let contador = 0;
        for (let filas = 0; filas < this.filas; filas++) {
            for (let columnas = 0; columnas < this.columnas; columnas++) {

                if (this.arrayTablero[filas][columnas] == '') {
                    this.arrayTablero[filas][columnas] = parejas[contador];
                    contador++;

                }
            }
        }
    }
}

let tableroMaster = new Memory();


