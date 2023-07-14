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

for (let key in ironhacker) {

  if (key === "patata") {
    console.log("si existe")
  }

}