const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer.'
};
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completada una tarea.'
};

const argv = require('yargs')
    .command('crear', 'Crea un elemento por hacer.',{
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea.', {
        descripcion, 
        completado
    })
    .command('borrar', 'Borra el elemento de la lista de tareas.', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv    
};

