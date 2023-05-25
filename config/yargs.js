const argv = require('yargs')
    .options({

        'b':{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    },

    'l':{
        alias: 'listar',
        type: 'boolean', 
        default : false,
        describe: 'Si quiere listar o no en pantalla'
    },
    'h': {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        default : 10,
        describe: 'El limite de hasta donde multiplicar'
    }
}
    )
    .check((argv,options) =>{
        if(isNaN(argv.b)){
            throw 'La base tiene que ser un número'
        }
        if(isNaN(argv.h)){
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .argv


    module.exports = argv