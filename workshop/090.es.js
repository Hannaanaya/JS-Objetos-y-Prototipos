// -> Define dos constructores: 'Robot' y 'Vehicle'
// -> Cuando `Robot` se invoque con 'new' debe retornar el 'this' implícito
// -> Cuando `Vehicle` se invoque con 'new', debe retornar un objeto cualquiera,
//    no el 'this' implícito.

function Robot() {
  return this;
};

function Vehicle() {
  return {};
};


// ------------------------------------------------
// Exports de Common JS para verificación, no modificar
module.exports = {
  Robot:   Robot,
  Vehicle: Vehicle
}
