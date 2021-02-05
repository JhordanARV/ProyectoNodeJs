//console.log("Hola mundo");
//importar moment
var moment = require('moment');

moment.locale('es');
let hora = moment().format('yyyy-MM-DD');
let febrero = moment('2020-02-29').isValid();

//console.log('Hora:'+hora);
//console.log('Febrero:'+febrero);

// 1. Mostrar fecha mes(nombre del mes) dia año
let punto1 = moment().format('MMMM DD YYYY');
console.log('La fecha es: '+punto1);

// 2. Mostar que dia fue el dia que naci: Jueves
let punto2 = moment("1996-07-21").format("dddd");
console.log('Nací el día: '+punto2);

// 3. Mostrar hace cuantos años naciste
let punto3 = moment("1996-07-21", "YYYY-MM-DD").fromNow();
console.log('Nací: '+punto3);

// 4. Mostrar que fecha sera en 258 dias (dia-mes-año)
let punto4 = moment().add(258, 'days').format('DD-MM-YYYY');
console.log('358 dias es el: '+punto4);

// 5. Mostrar que fecha sera en 4 semanas (dia-mes-año)
let punto5 = moment().add(4, 'weeks').format('DD-MM-YYYY');
console.log('4 semanas es: '+punto5);