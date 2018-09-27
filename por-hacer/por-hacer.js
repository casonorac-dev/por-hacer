const fs = require('fs');
const colors = require('colors');

let listadoPorHacer = []; //Creo listado de cosas por hacer
const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`DB/data.json`, data, (err) => {
        if (err) throw new Error(err);
    });
} 

const cargarDB = () => {
    try {
        listadoPorHacer = require('../DB/data.json');
    } catch (error) {
        listadoPorHacer = []
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = { //Este es el objeto de tareas por hacer
        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer); //Luego de crear la tarea, lo introduzco en la lista.
    
    guardarDB();

    return porHacer; //Regreso la tarea.
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if(index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion);
    if (index >= 0) {
        listadoPorHacer.splice(index,1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
};

