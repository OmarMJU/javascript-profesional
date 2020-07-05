/**
 * Tipos de datos en TS
 * Tipos:
    boolean. Valor verdadero o falso.
    number. Números.
    string. Cadenas de texto.
    string[]. Arreglo del tipo cadena de texto.
    Array. Arreglo multi-tipo, acepta cadenas de texto o números.
    enum. Es un tipo especial llamado enumeración.
    any. Cualquier tipo.
    object. Del tipo objeto.
 */

// Arreglos.
let people: string[] = [];
people = ["Omar", "Daniel", "Lesly", "Jiemena", "Tania"];
people.push("Valeria");
console.log(people);

let peopleAndAge: Array<string | number> = [];
peopleAndAge = ["Omar", 29, "Daniel", 25, "Lesly", 23, "Jiemena", 22, "Tania", 18];
peopleAndAge.push("Sharon");
peopleAndAge.push(27);
console.log(peopleAndAge);

// Enums.
enum Colores {
  Rojo = "Rojo",
  Azul = "Azul",
  Amarillo = "Amarillo",
  Verde = "Verde"
}

const colorFavorito = Colores.Azul;
console.log(`Mi color favorito es el ${colorFavorito}`);

// Any.
let comodin: any = "Jocker";
comodin = { type: "WildCart" }

// Objects.
let someObject: object = { type: "Objeto" }

// Funciones.
function add(a: number, b: number): number {
  return a + b;
}
const result = add(2, 4);
console.log(result);


function creaateAdder(a: number): (number) => number {
  return function(b: number): number {
    return a + b;
  }
}
const adder = creaateAdder(4);
const reAdder = adder(5);
console.log(reAdder);

// El signo de interrogación después del argumento y antes de los puntos indica que ese
// argumento es opcional.
function nameLastname(name: string, lastname?: string = ""): string {
  return `Hola, mi nombre es ${name} ${lastname}.`;
}
console.log(nameLastname("Omar"));

// Interfaces.
interface Rectangulo {
  alto: number;
  ancho: number;
}

const rec: Rectangulo = {
  alto: 10,
  ancho: 15
}

function calcularArea(r: Rectangulo): number {
  return r.alto * r.ancho;
}

const areaRec = calcularArea(rec);
console.log(areaRec);