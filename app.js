const colors = require('colors');
const {crearArchivo} = require ( './helpers/multiplicar')

const argv= require('./config/yargs')


//const base=4
console.clear() 
  
crearArchivo(argv.base, argv.l, argv.h)
    .then (nombreArchivo => console.log(colors.rainbow(nombreArchivo), ' creado'))
    .catch(err => console.log(colors.red(err)))




