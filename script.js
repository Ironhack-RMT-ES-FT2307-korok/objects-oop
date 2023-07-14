console.log("probando")


// syntax

/*

{  
  key: value, => una propieda del objeto
  key: value,
  key: value
}


*/

let headPhones = {
  price: 100,
  // salePrice: 100,
  isNew: false,
  brand: "SteelSeries",
  "max volume": 20,
  // someArr: ["hola"],
  // someObj: { name: "Pedro"},
  // someFunc: () => {
  //   return "hola"
  // }
}



// accedemos a propiedades

console.log( headPhones.price ) // notacion de puntos
console.log( headPhones["price"] ) // notacion de corchetes

console.log( headPhones["max volume"] ) // notacion de corchetes


// modificamos propiedades

headPhones.price = 80;
// console.log(headPhones)

headPhones.isNew = true;

// añadir propiedades
headPhones.color = "azul";

// borrar propiedades
delete headPhones.brand;
console.log(headPhones)


// Objeto global Object y loops sobre objetos

console.log( Object.keys( headPhones ) ) // => crea un array con todos los nombres de propiedades
console.log( Object.values( headPhones ) ) // => crea un array con todos los valores de propiedades


// FOR IN loop para iterar sobre objetos

for ( let algo in headPhones ) {
  console.log(algo)
  // let algo = "price" => iteracion 1

  console.log( headPhones[algo] ) // notacion de corchetes



}


// actividad
const ironhacker = {
  firstName: 'marko',
  age: 39,
  favoriteLanguage: 'JavaScript',
  isSatisfied: true,
  'works at': 'Google',
  isRemote: false,
  address: {
      country: 'Portugal',
      city: 'Lisbon'
  }
}

let check;

for (let key in ironhacker) {

  if (key === "patata") {
    console.log("si existe")
    check = true;
  }

}

// o usar metodo hasOwnProperty



// Estructura de data

const users = [
  {
    name: "Jorge",
    bitcoin: 0,
    hasNFTs: false,
  },
  {
    name: "Pedro",
    bitcoin: 0.02,
    hasNFTs: false,
  },
  {
    name: "Antonio",
    bitcoin: 0.2,
    hasNFTs: false,
  }
];


console.log( users[0] )


// users[1].hasNFTs = true;
users[1]["hasNFTs"] = true;


users[2].bitcoin += 1



// agregar un nuevo objeto

let newUser = {
  name: "Ruth",
  bitcoin: 0,
  hasNFTs: true,
}

users.push( newUser )

console.log(users)



// funcion que revise si un usuario tiene bitcoins o tiene nfts
// si- "Está facturando"
// no- "no cree en cripto"

function userDoesCripto(oneUser) {

  if (oneUser.bitcoin > 0 || oneUser.hasNFTs === true) {
    return `${oneUser.name} Está facturando`
  } else {
    return `${oneUser.name} No cree en cripto`
  }

}

// console.log( userDoesCripto( users[2] ) )

for (let i = 0; i < users.length; i++) {

  console.log( userDoesCripto( users[i] ) )
  

}

// let numbers = [1, 10, 20, 12]
// for (let i = 0; i < numbers.length; i++) {}





// METODOS EN OBJ


let person = {
  name: "alicia",
  place: "Pais de las Maravillas",
  friends: [ "Sombrerero", "Conejo Blanco", "Liebre de Marzo", "Gato Chesire", "Humpty Dumpty", "Pomo de la puerta" ],
  introduce() {
    // return "Hola, soy alicia de el pais de las maravillas!"
    // return `Hola, soy ${person.name} de ${person.place}!`
    // hacer target a person podria ocasionar problemas cuando el objeto pasa de un contenedor a otro
    // console.log( this )
    return `Hola, soy ${this.name} de ${this.place}!`
  },
  // metodo que retorne un mensaje dependiendo de si alice es pequeña o es grande. aleatorio 
  // - 50% => "Alice es Grande";
  // - 50% => "Alice es Pequeña";
  whatSize() {

    // Math.random() => 0 - 0.99999999999
    let randomNumber = Math.floor( Math.random() * 100 ) // 0 - 99
    console.log(randomNumber)

    if ( randomNumber > 50) {
      return `${this.name} es Grande`;
    } else {
      return `${this.name} es Pequeña`;
    }
  },
  // que le desee feliz feliz no cumpleaños a alguno de sus amigos
  // un amigo aleatorio
  merryUnbirthday() {

    // array con 5 elementos
    // 0 - 5
    let randomIndex = Math.floor(Math.random() * this.friends.length ) // 0 - 0.9999 

    // Math.random() // => 0 - 0.99
    // Math.random() * this.friends.length // => 0 - 5.99
    // Math.floor() ... // => 0 - 5

    console.log(randomIndex)

    let randomFriend = this.friends[randomIndex]
    console.log(randomFriend)

    return `Feliz feliz no cumpleaños a ${randomFriend}`

  }
}

console.log( person.name )
console.log( person.introduce() )

person.name = "Alice";
console.log( person.introduce() )

// la palabra this cuando la usamos dentro un de un objeto, apunta a si mismo (el objeto)

console.log( person.whatSize() )

console.log( person.merryUnbirthday() )


person.friends.push("Uriel")



// CLASSES

// queremos crear multiples objetos de superheroes

// definir la plantilla/blueprint/esquema/planos de como será cada personaje

// ASI DECLARAMOS UNA CLASE
// buenas practicas, las clases se escriben con PascalCasing
class Hero {

  // definidas todas las propiedades que tendran los heroes
  constructor( unParametro, segundoParametro ) {
    // this.name = "Iron Man";
    this.name = unParametro;
    this.secretIdentity = segundoParametro;
    this.isEvil = false; // aplica a todos por igual
  }

  // definidas todos los metodos que tendran los heroes
  revealIdentity = () => {
    return `Mi identidad secreta es ${this.secretIdentity}`
  }

  turnEvil = () => {

    this.isEvil = true; // podemos hacer acciones
    return `Yo, ${this.name} me he vuelto villano, MUAHAHHAHA!` // podemos retornar algo

  }

}

// USAMOS LA CLASE PARA CREAR OBJETOS

// voy a crear un nuevo objeto basado en la plantilla Hero
let newHero1 = new Hero( "Iron Man", "Tony Stark" )
console.log(newHero1)

let newHero2 = new Hero( "Black Widow", "Natasha Romanof" )
console.log(newHero2)

console.log( newHero1.revealIdentity() )
console.log( newHero2.revealIdentity() )

console.log( newHero1.turnEvil() )

console.log(newHero1)


// Subclase especifica para heroes con superpoderes => SuperHero

// extends es palabra reservada para crear subclases
class SuperHero extends Hero {
  // hereda TODAS las propiedades y metodos de la clase padre

  constructor(nameParam, identityParam, superPowerParam) {
    super(nameParam, identityParam) // super envia estos parametros para crear las propiedades de la clase padre Hero
    // puedo crear nuevas propiedades y metodos exclusivos de esta clase SuperHero
    this.superPower = superPowerParam;
  }

  useSuperPower = () => {
    return `${this.name} usa ${this.superPower}`
  }


}

let newSuperHero1 = new SuperHero( "Spiderman", "Peter Parker", "Lanzar Telarañas" )

console.log(newSuperHero1)

console.log( newSuperHero1.useSuperPower() )


console.log( newSuperHero1.name )
console.log( newSuperHero1.superPower )

let newSuperHero2 = new SuperHero( "Deadpool", "Ryan Reynolds", "Regeneración" )

console.log( newSuperHero2.useSuperPower() )
