const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];


console.log('---------------EJERCICIO NUMERO 1---------------');


const pizzaImpar = pizzas.forEach( pizza => {  if (pizza.id % 2 == 1) 
  console.log (`Esta ${pizza.nombre} tiene su id impar y su numero de id es ${pizza.id}.`);
})


console.log('---------------EJERCICIO NUMERO 2---------------');

const precioMenor600 = pizzas.forEach( pizza => {  if (pizza.precio < 600)
  console.log (`Si, la pizza que vale menos de 600 es la ${pizza.nombre} cuyo precio es de $${pizza.precio}. `);
}) 
  

console.log('---------------EJERCICIO NUMERO 3---------------');

const nombreYPrecio = pizzas.filter( e =>  console.log(`${e.nombre} $${e.precio}.`));


console.log('---------------EJERCICIO NUMERO 4---------------');

const pizzaIngredientes = pizzas.filter( e =>  console.log(`La ${e.nombre} contiene: ${e.ingredientes}.`));