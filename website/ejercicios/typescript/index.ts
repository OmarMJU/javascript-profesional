console.log("Hola TypeScript");

function add(a: number, b: number) {
  return a + b;
}

const result = add(2, 4);

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